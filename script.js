// Array of carrier prefixes
const mtn = ['0803', '0806', '0703', '0706', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916'];
const glo = ['0805', '0807', '0811', '0705', '0815', '0905', '0915'];
const airtel = ['0802', '0808', '0812', '0701', '0708', '0902', '0907', '0901', '0912'];
const $9mobile = ['0809', '0817', '0818', '0908', '0909'];

// Getting elements from html doc.
const userInput = document.querySelector("input");
const btnClick = document.querySelector("button");

// Button click event
btnClick.addEventListener('click', valMobileNum);


//  Function to Validate Mobile Number
function valMobileNum() {
  for (m of mtn) {
    if (userInput.value.slice(0, 4) === m) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "none";
      const $9mobile_logo = document.getElementById("_9mobile");
      $9mobile_logo.style.display = "none";
      //  done
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "flex";
      mtn_logo.style.width = "50px";
      mtn_logo.style.height = "50px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  for (g of glo) {
    if (userInput.value.slice(0, 4) === g) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "none";
      const $9mobile_logo = document.getElementById("_9mobile");
      $9mobile_logo.style.display = "none";
      //  done
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "flex";
      glo_logo.style.width = "55px";
      glo_logo.style.height = "55px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  for (a of airtel) {
    if (userInput.value.slice(0, 4) === a) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      const $9mobile_logo = document.getElementById("_9mobile");
      $9mobile_logo.style.display = "none";
      //  done
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "flex";
      airtel_logo.style.width = "110px";
      airtel_logo.style.height = "30px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  for (e of $9mobile) {
    if (userInput.value.slice(0, 4) === e) {
      const carrierIndicator = document.getElementById("messageBox");
      carrierIndicator.style.display = "flex";
      carrierIndicator.style.justifyContent = "center";
      carrierIndicator.style.alignItems = "center";
      // setting other networks display to none
      const glo_logo = document.getElementById("glo");
      glo_logo.style.display = "none";
      const airtel_logo = document.getElementById("airtel");
      airtel_logo.style.display = "none";
      const mtn_logo = document.getElementById("mtn");
      mtn_logo.style.display = "none";
      //  done
      const $9mobile_logo = document.getElementById("_9mobile");
      $9mobile_logo.style.display = "flex";
      $9mobile_logo.style.width = "40px";
      $9mobile_logo.style.height = "70px";
      const warningText = document.getElementById("text");
      warningText.style.display = "none";
      const warningText2 = document.getElementById("text2");
      warningText2.style.display = "none";
    }
  };
  if (userInput.value === '') {
    const carrierIndicator = document.getElementById("messageBox");
    carrierIndicator.style.display = "none";
    const warningText = document.getElementById("text");
    warningText.style.display = "none";
    const warningText2 = document.getElementById("text2");
    warningText2.style.display = "flex";
    warningText2.style.fontSize = "18px";
    warningText2.innerText = "Input Field Cannot be Empty!";

    console.log("Input Field Cannot be Empty!");
  } else if (userInput.value.length === 11) {
    console.log("Valid Phone Number!")
  } else if (userInput.value.length > 0 || userInput.value.length < 11 && userInput.value.length > 11) {
    const carrierIndicator = document.getElementById("messageBox");
    carrierIndicator.style.display = "none";
    const warningText2 = document.getElementById("text2");
    warningText2.style.display = "none";
    const warningText = document.getElementById("text");
    warningText.style.display = "flex";
    warningText.style.fontSize = "15px";
    warningText.innerText = "Invalid! Confirm phone number length!";
    console.log("Invalid! Confirm phone number length!");
  };

};
