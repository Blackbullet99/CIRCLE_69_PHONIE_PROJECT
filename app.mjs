// Create object storing the prefix for each network provider
const prefix = {
  '0703': 'MTN',
  '0706': 'MTN',
  '0803': 'MTN',
  '0806': 'MTN',
  '0810': 'MTN',
  '0813': 'MTN',
  '0814': 'MTN',
  '0816': 'MTN',
  '0903': 'MTN',
  '0906': 'MTN',
  '07025': 'MTN',
  '07026': 'MTN',
  '0704': 'MTN',
  '0705': 'GLO',
  '0805': 'GLO',
  '0807': 'GLO',
  '0811': 'GLO',
  '0815': 'GLO',
  '0905': 'GLO',
  '0701': 'AIRTEL',
  '0708': 'AIRTEL',
  '0802': 'AIRTEL',
  '0808': 'AIRTEL',
  '0812': 'AIRTEL',
  '0902': 'AIRTEL',
  '0904': 'AIRTEL',
  '0907': 'AIRTEL',
  '0901': 'AIRTEL',
  '0809': '9MOBILE',
  '0817': '9MOBILE',
  '0818': '9MOBILE',
  '0908': '9MOBILE',
  '0909': '9MOBILE',
  '07028': 'STARCOMMS',
  '07029': 'STARCOMMS',
  '0819': 'STARCOMMS',
  '07027': 'MULTILINKS',
  '0709': 'MULTILINKS',
  '0707': 'ZOOM MOBILE',
  '0804': 'NTEL',
  '07020': 'SMILE',
  '0915': 'GLO',
  '0913': 'MTN',
  '0912': 'AIRTEL',
  '0916': 'MTN',
};


// Logo for the network providers              
const logos = {
  "MTN": "<img src=\"./images/MTN-logo.png\" alt=\"mtn-logo\"></img>",
  "GLO": "<img src=\"./images/glo-logo.png\" alt=\"glo-logo\"></img>",
  "AIRTEL": "<img src=\"./images/airtel-logo.png\" alt=\"airtel-logo\"></img>",
  "9MOBILE": "<img src=\"./images/etisalat-logo.svg\" alt=\"etisalat-logo\"></img>",
  "SMILE": "<img src=\"./images/Smile-Logo.svg\" alt=\"etisalat-logo\"></img>",
  "NTEL": "<img src=\"./images/ntel-Logo.svg\" alt=\"etisalat-logo\"></img>",
      
}

function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    // console.log('make magic in here!');
  
    // const header = document.querySelector('h2');
    // if(header) {
    //   header.textContent = 'make some magic here!!';
    // }

    // Get the phone number input element and the display for the logos
    phoneNumber = document.getElementById("phone-number");
    providerDiv = document.getElementById("provider");
    phoneNumber.addEventListener('input', catchInput);
    
  };
  

function catchInput(event) {
  // Remove white spaces from the input
  value = phoneNumber.value.replace(/\s+/g, '');
  let provider = undefined;

  // checks prefix by calling the checkPrefix function and inserts the corresponding logo
  if (value.startsWith("0")) {
      provider = checkPrefix(value)
      
  } else if (value.startsWith("+234")) {
      let prefix = "0" + value.substring(4);
      provider = checkPrefix(prefix);

      }
      
  if (provider != undefined) {
      providerDiv.innerHTML = logos[provider];
  } else {
      providerDiv.innerHTML = "";
  }
  
}

// Checks the prefix of the input and retuns the provider.
// Returns undefined if there is no match
function checkPrefix(value) {
  let provider = undefined;
  if (value.length >= 4) {
      provider = prefix[value.substring(0,4)];
      if (provider != undefined) {
          return provider;
      };
  };
  if (provider == undefined & value.length >= 5) {
      provider = prefix[value.substring(0,5)];
      if (provider != undefined) {
          return provider;
      };

      
  } 
  return provider;
}

// Forces the input to be + or 0 for the first entry and numbers for the rest
function isPhoneNumberKey(event) {
  if (phoneNumber.value.length === 0 && event.key != "+" && event.key != "0") {
      event.preventDefault();
  } else if (phoneNumber.value.length > 0 && !isFinite(event.key)) {
      event.preventDefault();
  }
}







  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //