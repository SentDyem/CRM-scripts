function CheckPhone() {
  var phone = Xrm.Page.getAttribute('new_phone').getValue();
  if (phone === "" || phone === null)
  {
    alert("Ошибка! Введите номер телефона")
    return false;
  }
  Xrm.Page.data.save().then(function() {
    alert("Успешно сохранено");
  },
  function () {
    alert("Ошибка! Проверьте корректность введеных данных");
  });
}
