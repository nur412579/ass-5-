document.addEventListener("DOMContentLoaded", () => {
    let countElement = document.getElementById("count");
    let minesElement = document.getElementById("mines");
    let historyElement = document.getElementById("history");
    let buttons = document.querySelectorAll("#btn-1");

    // Initialize values
    countElement.textContent = "24"; 
    minesElement.textContent = minesElement.textContent.trim() || "0";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let count = parseInt(countElement.textContent) || 0;
            let mines = parseInt(minesElement.textContent) || 0;

            // Increase count and decrease mines
            countElement.textContent = count + 1;
            minesElement.textContent = mines > 0 ? mines - 1 : 0;

            // Add history log
            let time = new Date().toLocaleString();
            let newEntry = document.createElement("p");
            newEntry.textContent = `Task completed at: ${time}`;
            historyElement.appendChild(newEntry);

            // Disable the button after clicking
            this.disabled = true;
        });
    });
});
