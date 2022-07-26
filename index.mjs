import startApp from './app.mjs';
// import isPhoneNumberKey from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

// Forces the input to be + or 0 for the first entry and numbers for the rest
// function isPhoneNumberKey(event) {
//     if (phoneNumber.value.length === 0 && event.key != "+" && event.key != "0") {
//       event.preventDefault();
//     } else if (phoneNumber.value.length > 0 && !isFinite(event.key)) {
//       event.preventDefault();
//     }
//   }