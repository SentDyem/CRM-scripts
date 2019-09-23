GetGuid: function () {
  if (Xrm.Page.getAttribute('sd_city').getValue() != null) {
var id = Xrm.Page.getAttribute('sd_city').getValue()[0].id;
var res = id.replace(/{|}/g, '');
}
else {
  return false;
}
Xrm.WebApi.online.retrieveRecord("sd_city", res, "?$select=sd_city,sd_cityid&$expand=sd_region($select=sd_region,sd_regionid)").then(
    function success(result) {
        var sd_city = result["sd_city"];
        var sd_cityid = result["sd_cityid"];
        if (result.hasOwnProperty("sd_region")) {
            var sd_region_sd_region = result["sd_region"]["sd_region"];
            var sd_region_sd_regionid = result["sd_region"]["sd_regionid"];
        }
        var object = new Array();
          object[0] = new Object();
          object[0].id = sd_region_sd_regionid;
          object[0].name = sd_region_sd_region;
          object[0].entityType = "sd_region";
          Xrm.Page.getAttribute('sd_region').setValue(object);

    },
    function(error) {
        Xrm.Utility.alertDialog(error.message);
    }
);
}

function getGuid() {
  if (Xrm.Page.getAttribute('sd_city').getValue() != null) {
    var id = Xrm.Page.getAttribute('sd_city').getValue()[0].id;
      var res = id.replace(/{|}/g, '');
     alert('Is: '+ res);
  }
  else {
    return false;
  }
}
