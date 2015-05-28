angular.module('starter.controllers')
    .factory('mobileserviceProvider', function() {
        var client = new WindowsAzure.MobileServiceClient(
            'https://roadbumps-v1.azure-mobile.net/',
            'vOzxIlHpCUwhOIHpIHdVHLajUflgup44');
        var roadObj = client.getTable('Road');
        var service = {
            query: function() {
                //Insert

                //roadObj.insert({ rid: 4, name: "Ibrahim Madbouly St." }).done(function () { alert("Insert Successfuly") }, function () { alert("Insert Failed") });

                //Get all

                //roadObj.read().then(function (roadObjs) {
                //    alert("Get all Sucessfully");
                //for (var i = 0; i < roadObjs.length; i++) {
                //    alert(roadObjs[i].name);
                //}

                //Get by ID

                roadObj.where({ rid: "3" }).read().then(function (roadObjs) {
                    alert("Get by ID Sucessfully");
                    console.log(roadObjs);
                    alert(roadObjs[0].name);

                //Update by ID

                //roadObj.update({
                //    rid: "3",
                //    name: "MennaUpdated2"
                //}).done(function () {
                //    alert("Update Sucessfully");

                //Delete by ID

                //roadObj.del({
                //    rid: 3
                //}).done(function () {
                //alert("Delete Sucessfully");

                //Compare username & password

                },
                function () { alert("Error") }
                );
                

    }
}
return service;
});