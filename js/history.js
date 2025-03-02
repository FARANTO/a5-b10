document.addEventListener("DOMContentLoaded", function () {
    const historySection = document.getElementById("history-section");
    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    const donationSection = document.getElementById("donation-section");
    const historyList = document.getElementById("history-list");

    // Load donation history from localStorage (Newest First)
    const loadHistory = () => {
        historyList.innerHTML = ""; // Clear previous entries

        let history = JSON.parse(localStorage.getItem("donationHistory")) || [];

        if (history.length === 0) {
            historyList.innerHTML = `<p class="text-center text-black">No donation history available.</p>`;
            return;
        }

        // Sort history to show the most recent donations first
        history.reverse(); 

        history.forEach(entry => {
            let historyItem = document.createElement("div");
            historyItem.classList.add(
                "border-t-[32px]", 
                "border-b-[32px]", 
                "border-white",
                "ml-[200px]", 
                "p-4", 
                "rounded-lg", 
                "text-start", 
                "mb-4"
            );

            historyItem.innerHTML = `
                <p class="text-lg font-bold text-black">${entry.amount} Taka is Donated for ${entry.cause} at ${entry.location}</p>
                <p class="text-sm text-black mt-2">Date: ${entry.time}</p>
            `;

            historyList.appendChild(historyItem);
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
