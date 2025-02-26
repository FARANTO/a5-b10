document.addEventListener("DOMContentLoaded", function () {
    const accountBalanceElement = document.getElementById("acc-balance");
    const donationForms = document.querySelectorAll(".donation-form");
    const modal = document.getElementById("donation-modal");
    const modalAmount = document.getElementById("modal-amount");

    // Helper function to extract numerical values from "5500 BDT"
    const parseAmount = (amountText) => parseInt(amountText.replace(/\D/g, ""), 10);

    // Update the balance after a donation
    const updateBalance = (donationAmount) => {
      let currentBalance = parseAmount(accountBalanceElement.textContent);
      if (donationAmount > currentBalance) {
        alert("Insufficient balance to make this donation.");
        return false;
      }
      currentBalance -= donationAmount;
      accountBalanceElement.textContent = `${currentBalance} BDT`;
      return true;
    };

    // Show modal
    const showModal = (amount) => {
      modalAmount.textContent = `${amount} BDT`;
      modal.classList.remove("hidden");
    };

    // Close modal
    const closeModal = () => {
      modal.classList.add("hidden");
    };

    // Loop through each form and add event listeners
    donationForms.forEach((form) => {
      const donationInput = form.querySelector(".donation-input");
      const donationButton = form.querySelector(".donation-btn");
      const donationAmountElement = form.querySelector(".donation-amount");

      donationButton.addEventListener("click", () => {
        let donationValue = parseInt(donationInput.value, 10);

        if (isNaN(donationValue) || donationValue <= 0) {
          alert("Please enter a valid donation amount.");
          return;
        }

        if (updateBalance(donationValue)) {
          let currentDonation = parseAmount(donationAmountElement.textContent);
          donationAmountElement.textContent = `${currentDonation + donationValue} BDT`;
          donationInput.value = "";

          // Show success modal
          showModal(donationValue);
        }
      });
    });

    // Expose function to window for button click
    window.closeModal = closeModal;
  });