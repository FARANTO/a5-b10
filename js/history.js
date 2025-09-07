document.addEventListener("DOMContentLoaded", function () {
  const historySection = document.getElementById("history-section");
  const historyBtn = document.getElementById("history-btn");
  const donationBtn = document.getElementById("donation-btn");
  const donationSection = document.getElementById("donation-section");
  const historyList = document.getElementById("history-list");

  // Load history
  const loadHistory = () => {
    historyList.innerHTML = "";
    let history = JSON.parse(localStorage.getItem("donationHistory")) || [];

    if (history.length === 0) {
      historyList.innerHTML = `<p class="text-gray-600">No donation history available.</p>`;
      return;
    }

    history.forEach(entry => {
      let historyItem = document.createElement("div");
      historyItem.classList.add(
        "border-t-[32px]", 
        "border-b-[32px]", 
        "border-white", 
        "p-4", 
        "rounded-lg", 
        "text-start", 
        "mb-4",
        "ml-[40px]" // ✅ margin-left 40px
      );
      historyItem.innerHTML = `
        <p class="font-bold">${entry.amount} Taka is Donated for ${entry.cause}</p>
        <p class="text-sm">Date : ${entry.time}</p>
      `;
      historyList.appendChild(historyItem);
    });
  };

  // Toggle to History
  historyBtn.addEventListener("click", () => {
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");

    historyBtn.classList.add("bg-buttongreen");
    donationBtn.classList.remove("bg-buttongreen");
    donationBtn.classList.add("bg-white");

    loadHistory();
  });

  // Toggle back to Donation
  donationBtn.addEventListener("click", () => {
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");

    donationBtn.classList.add("bg-buttongreen");
    historyBtn.classList.remove("bg-buttongreen");
    historyBtn.classList.add("bg-white");
  });
});
