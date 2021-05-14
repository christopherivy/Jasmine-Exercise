window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

//My code below----------------------------------------

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById("loan-amount").value = 120000;
	document.getElementById("loan-years").value = 30;
	document.getElementById("loan-rate").value = 2.5;
	calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	let paymentValue = calculateMonthlyPayment(getCurrentUIValues());
	let monthlyPayment = document.getElementById("monthly-payment");
	monthlyPayment.innerText = paymentValue;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let principle = values.amount;
	let interest = values.rate / 100 / 12;
	let numberOfYears = values.years * 12;
	let numerator = principle * interest;
	let denominator = 1 - Math.pow(1 + interest, -numberOfYears);

	return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
