// Update sugar value dynamically
const sugarInput = document.getElementById('sugar');
const sugarValue = document.getElementById('sugar-value');

sugarInput.addEventListener('input', () => {
    sugarValue.textContent = sugarInput.value;
});

function submitPreferences() {
    const coffeeType = document.getElementById('coffee-type').value;
    const cupSize = document.getElementById('cup-size').value;
    const sugarLevel = sugarInput.value;
    const milkPreference = document.querySelector('input[name="milk"]:checked').value;

    const preferencesSummary = `
        <h3>Your Preferences Summary:</h3>
        <p><strong>Coffee Type:</strong> ${coffeeType}</p>
        <p><strong>Cup Size:</strong> ${cupSize}</p>
        <p><strong>Sugar Level:</strong> ${sugarLevel}</p>
        <p><strong>Milk Preference:</strong> ${milkPreference}</p>
    `;

    document.getElementById('preferences-summary').innerHTML = preferencesSummary;
    document.getElementById('preferences-summary').style.display = 'block';
}

function submitPayment() {
    alert('Payment successful! Your order is being processed.');
}
// script.js

function confirmPayment() {
    // Hide payment and preferences sections
    document.querySelector('.payment').style.display = 'none';
    document.querySelector('.preferences').style.display = 'none';
    document.querySelector('.preferences-summary').style.display = 'none';

    // Display confirmation message
    const confirmationSection = document.createElement('div');
    confirmationSection.className = 'confirmation';
    confirmationSection.innerHTML = `
        <h2>✅ Your order is confirmed!</h2>
        <p>🕒 Estimated delivery time: <strong>15-20 minutes</strong></p>
        <p>🎉 Thank you for choosing us! Enjoy your coffee ☕</p>
    `;
    confirmationSection.style.textAlign = 'center';
    confirmationSection.style.margin = '50px auto';
    confirmationSection.style.padding = '30px';
    confirmationSection.style.background = 'rgb(93 90 90)';
    confirmationSection.style.borderRadius = '12px';
    confirmationSection.style.boxShadow = '0 6px 10px rgba(252, 251, 251, 0.1)';
    confirmationSection.style.maxWidth = '600px';

    document.body.appendChild(confirmationSection);
}


