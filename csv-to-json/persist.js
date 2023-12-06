function restoreValues() {
    for (const input of document.querySelectorAll("input")) {
        if (!input.id)
            continue;

        const stored = localStorage.getItem(input.id);

        if (stored) {
            const parsed = JSON.parse(stored);
            if (input.type === "checkbox")
                input.checked = parsed;
            else
                input.value = parsed;
        }
    }
}

function persistValues() {
    for (const input of document.querySelectorAll("input")) {
        if (!input.id)
            continue;

        input.addEventListener("input", e => {
            if (e.target.type === "checkbox")
                localStorage.setItem(e.target.id, JSON.stringify(e.target.checked));
            else
                localStorage.setItem(e.target.id, JSON.stringify(e.target.value));
        });
    }
}

window.addEventListener('load', () => {
    restoreValues();
    persistValues();
});