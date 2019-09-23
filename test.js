function checkPhoneNumber() {
  var phone = Xrm.Page.getAttribute('mobilephone');
  if (phone === "" || phone === null)
  {
    alert("Введите номер телефона");
  }
}
