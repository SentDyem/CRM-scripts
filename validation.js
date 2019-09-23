function validateEmail() {
  var email = Xrm.Page.getAttribute('emailaddress1').getValue();
  if (email != "" || email != null) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) == false)
    {
      Xrm.Page.getControl('emailaddress1').setNotification('Адрес электронной почты введён некорректно! Следуйте данному примеру - yourname@company.com');
    }
    else {
      Xrm.Page.getControl('emailaddress1').clearNotification();
    }
  }
}
