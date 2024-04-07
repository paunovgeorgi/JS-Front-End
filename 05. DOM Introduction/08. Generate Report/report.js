function generateReport() {

    const selectedCols = Array.from(document.querySelectorAll("input"));

    const rows = Array.from(document.querySelectorAll("tbody tr"));
    let result = [];

    rows.forEach(row => {
        const oneEntry = {};
        selectedCols.forEach((col, index) => {
            if (col.checked) {
                oneEntry[col.name] = Array.from(row.children)[index].textContent;
            }
        })
        result.push(oneEntry)
    })

    document.querySelector("#output").textContent = JSON.stringify(result, null, 2);
}