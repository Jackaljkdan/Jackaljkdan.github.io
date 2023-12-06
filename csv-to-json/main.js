function convert() {
    const inputArea = document.getElementById("input");
    const inputText = inputArea.value;
    const sanitizedInput = fixNewlines(inputText).join("\n");

    const sanitizeOnly = document.getElementById("sanitizeonly");

    const output = sanitizeOnly.checked
        ? sanitizedInput
        : csvToJson(sanitizedInput);

    const outputArea = document.getElementById("output");
    outputArea.value = output;

    const autoSelect = document.getElementById("autoselect");

    if (autoSelect.checked) {
        outputArea.focus();
        outputArea.select();
    }

    const autoClipboard = document.getElementById("autoclipoard");

    if (autoClipboard?.checked)
        navigator.clipboard.writeText(output);
}

function inputChanged() {
    const autoConvert = document.getElementById("autoconvert");

    if (autoConvert.checked)
        convert();
}

/**
 * 
 * @param {*} str 
 */
function hasEvenQuotes(str) {
    const quotesCount = (str.match(/"/g) || []).length;
    return quotesCount % 2 === 0;
}

/**
 * 
 * @param {string[]} lines
 * @param {string[]} headers
 * @param {number} index
 * @param {string[]} split
 */
function isMultineSplit(lines, headers, index, split) {
    const last = split[split.length - 1];
    if (hasEvenQuotes(last))
        return false;

    const nextLineIndex = index + 1;
    if (nextLineIndex >= lines.length)
        return false;

    const nextSplit = lines[nextLineIndex].split("\t");
    if (nextSplit.length === headers.length)
        return false;

    if (nextSplit.length === 1)
        return true;

    return !hasEvenQuotes(nextSplit[0]);
}

/**
 * 
 * @param {string} csv 
 * @returns {string[]}
 */
function fixNewlines(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split("\t");

    const fixedLines = [lines[0]];

    for (let i = 1; i < lines.length; i++) {
        const trimmed = lines[i].trim();

        if (trimmed === "")
            continue;

        const split = lines[i].split("\t");

        if (split.length === headers.length && !isMultineSplit(lines, headers, i, split)) {
            fixedLines.push(lines[i]);
            continue;
        }
        
        const merged = mergeFollowingLines(lines, headers, i, split);
        fixedLines.push(split.join("\t"));
        i += merged;
    }

    return fixedLines;
}

/**
 * 
 * @param {string} str 
 */
function fixEscapedQuotes(str) {
    return str.replace(/""/g, '"');
}

/**
 * 
 * @param {string[]} lines
 * @param {string[]} headers
 * @param {number} index
 * @param {string[]} masterSplit
 * @return {number}
 */
function mergeFollowingLines(lines, headers, index, masterSplit) {
    // remove leading quote that signifies the beginning of a multiline column
    masterSplit[masterSplit.length - 1] = fixEscapedQuotes(masterSplit[masterSplit.length - 1].slice(1));

    let mergedCount = 0;
    for (let i = index+1; i < lines.length; i++) {
        const split = lines[i].split("\t");

        if (masterSplit.length === headers.length && split.length > 1)
            break;
        
        const lastIndex = masterSplit.length - 1;
        let merged = masterSplit[lastIndex] + "\\n" + fixEscapedQuotes(split[0]);
        
        // remove trailing quote that signifies the ending of a multiline column
        if (!hasEvenQuotes(split[0]))
            merged = merged.slice(0, -1);

        masterSplit[lastIndex] = merged;

        // remove leading quote that signifies the beginning of a multiline column
        if (isMultineSplit(lines, headers, i, split))
            split[split.length - 1] = fixEscapedQuotes(split[split.length - 1].slice(1));

        masterSplit.push(...split.slice(1));

        mergedCount += 1;
    }

    return mergedCount;
}

/**
 * 
 * @param {string} csv 
 * @returns {string}
 */
function csvToJson(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split("\t");

    lines.shift();

    const json = {};

    for (const lang of headers) {
        if (lang !== "key")
            json[lang] = {};
    }

    const keyIndex = headers.indexOf("key");

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine === "")
            continue;

        const split = trimmedLine.split("\t");
        const key = split[keyIndex];

        for (let i = 0; i < headers.length; i++) {
            if (i === keyIndex)
                continue;

            const trimmedValue = split[i]?.trim();

            const parsed = trimmedValue?.replace(/\\n/g, "\n") ?? "";

            json[headers[i]][split[keyIndex]] = parsed;
        }
    }

    return "export default " + JSON.stringify(json, null, 2);
}