const accountBalanceElement = document.getElementById('acc-balance');
    const donationAmountElement = document.getElementById('donation');
    const donationInputs = document.querySelectorAll('.donation-input');
    const donationButtons = document.querySelectorAll('.donation-btn');
    const modal = document.getElementById('donmodal');
    const closeModalButton = document.getElementById('closemodal');

    // String to Integer function
    const getBalance = () => parseInt(accountBalanceElement.textContent.split(' ')[0], 10);

    // Main Function Start
    const updateBalances = (donationInput) => {
      const donationValue = parseInt(donationInput.value, 10);
      if (!isNaN(donationValue) && donationValue > 0) {
        let currentBalance = getBalance();

        // Check if there are sufficient funds
        if (donationValue <= currentBalance) {
          // Update account balance
          currentBalance -= donationValue;
          accountBalanceElement.textContent = `${currentBalance} BDT`;

          // Update donated amount
          const currentDonation = parseInt(donationAmountElement.textContent.split(' ')[0], 10);
          donationAmountElement.textContent = `${currentDonation + donationValue} BDT`;

          // Clear the input field
          donationInput.value = '';
          // Show the modal
          modal.classList.remove('hidden');
        } 
        else {
          alert('Insufficient balance to make this donation.');
        }
      } else {
        alert('Please enter a valid donation amount.');
      }
    };
// Main Function End


    // Add event listeners to buttons
    donationButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        updateBalances(donationInputs[index]);
      });
    });
    // Close modal 
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });