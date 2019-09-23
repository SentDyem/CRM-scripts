function Save() {
  let name, email, region, city;
  name = Xrm.Page.getAttribute('fullname').getValue();
  email = Xrm.Page.getAttribute('emailaddress1').getValue();
  region = Xrm.Page.getAttribute('sd_region').getValue();
  city = Xrm.Page.getAttribute('sd_city').getValue();
  if (name === "" || name === null) {
    alert('Заполните поле "Full Name"');
    return false;
  }
  else if (email === "" || email === null) {
    alert('Заполните поле "Email"');
    return false;
  }
  else if (region === "" || region === null) {
    alert('Установите значение в поле "Регион"');
    return false;
  }
  else if (city === "" || city === null) {
    alert('Установите значение в поле "Город"');
    return false;
  }
  Xrm.Page.data.save().then(function () {alert('Сохранено')}, function () {alert('Ошибка сохранения! Проверьте корректность введённых данных.')});
}

function SaveAndClose() {
  let name, email, region, city;
  name = Xrm.Page.getAttribute('fullname').getValue();
  email = Xrm.Page.getAttribute('emailaddress1').getValue();
  region = Xrm.Page.getAttribute('sd_region').getValue();
  city = Xrm.Page.getAttribute('sd_city').getValue();
  if (name === "" || name === null) {
    alert('Заполните поле "Full Name"');
    return false;
  }
  else if (email === "" || email === null) {
    alert('Заполните поле "Email"');
    return false;
  }
  else if (region === "" || region === null) {
    alert('Установите значение в поле "Регион"');
    return false;
  }
  else if (!city) {

  }
  else if (city === "" || city === null) {
    alert('Установите значение в поле "Город"');
    return false;
  }
  Xrm.Page.data.save("saveandclose");
}

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
