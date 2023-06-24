//
const inputPhone = document.querySelector("#numberonly");
if (inputPhone) {
  inputPhone.addEventListener("keypress", function (evt) {
    console.log(evt.which);
    const isPresion = evt.which > 1776 && evt.which < 1786;
    if (evt.which < 48 || (evt.which > 57 && !isPresion)) {
      evt.preventDefault();
    }
  });
  var phone = document.getElementById("numberonly"),
    cleanPhoneNumber;

  cleanPhoneNumber = function (e) {
    e.preventDefault();
    var pastedText = "";
    if (window.clipboardData && window.clipboardData.getData) {
      // IE
      pastedText = window.clipboardData.getData("Text");
    } else if (e.clipboardData && e.clipboardData.getData) {
      pastedText = e.clipboardData.getData("text/plain");
    }
    this.value = pastedText.replace(/\D/g, "");
  };
  phone.onpaste = cleanPhoneNumber;
}
