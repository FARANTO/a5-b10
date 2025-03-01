document.addEventListener("DOMContentLoaded", function () {
    const historySection = document.getElementById("history-section");
    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    const historyTable = document.getElementById("history-table");
    const donationSection = document.getElementById("donation-section");

    // Load donation history from localStorage
    const loadHistory = () => {
        historyTable.innerHTML = ""; // Clear previous entries

        let history = JSON.parse(localStorage.getItem("donationHistory")) || [];

        if (history.length === 0) {
            historyTable.innerHTML = "<tr><td colspan='2' class='text-center py-2'>No donation history available.</td></tr>";
            return;
        }

        history.forEach(entry => {
            let row = document.createElement("tr");
            row.innerHTML = `<td class="border px-4 py-2">${entry.amount}</td><td class="border px-4 py-2">${entry.time}</td>`;
            historyTable.appendChild(row);
        });
    };

    // Toggle to History Section
    historyBtn.addEventListener("click", () => {
        donationSection.classList.add("hidden");
        historySection.classList.remove("hidden");

        historyBtn.classList.add("bg-buttongreen");
        donationBtn.classList.remove("bg-buttongreen");
        donationBtn.classList.add("bg-white");

        // Load donation history when clicked
        loadHistory();
    });

    // Toggle back to Donation Section
    donationBtn.addEventListener("click", () => {
        donationSection.classList.remove("hidden");
        historySection.classList.add("hidden");

        donationBtn.classList.add("bg-buttongreen");
        historyBtn.classList.remove("bg-buttongreen");
        historyBtn.classList.add("bg-white");
    });
});
