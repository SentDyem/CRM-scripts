function AddRegion() {
  var city = Xrm.Page.getAttribute('new_place').getValue();
    if (city !=  "" || city != null)
    {
      Xrm.Page.getAttribute('new_reg').setValue("Test");
    }
}
