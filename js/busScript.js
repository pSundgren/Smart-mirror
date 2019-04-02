var key = "<API key>";

var latOri = "63.819414";
var longOri = "20.240160";

var latDest = "63.825634";
var longDest = "20.268602";

var vsgtnID = "740020116";
var tcID = "740026172";
var brygtnID = "740045087";

var noOfTrips = 4;
 
function fetchBus(key, vsgtnID, tcID) {
    fetch("https://api.resrobot.se/v2/trip?key=" + key +
          "&originId=" + tcID + "&destId=" + vsgtnID +  
          "&numF=" + noOfTrips +
          "&originWalk=0&format=json")  
    .then(function(resp) { 
        return resp.json();
    })
    .then(function(data) {
      console.log(data);
      displayTrips(data);
    });
}

function displayTrips(busData){
  var times = "";
  document.getElementById("bus-origin").innerHTML = busData.Trip[0].LegList.Leg[0].Origin.name.slice(5);
  document.getElementById("bus-dest").innerHTML = busData.Trip[0].LegList.Leg[0].Destination.name.slice(5);
  for(var i = 0; i < noOfTrips; i++){
    var index = busData.Trip[i].LegList.Leg.length;
    var time = busData.Trip[i].LegList.Leg[index-1].Origin.time;
    document.getElementById("bus-desc-" + i).innerHTML = time.substring(0, time.length-3);
  }
}

//fetchBus(key, latOri, longOri, latDest, longDest);
setInterval(180*10000, fetchBus(key, vsgtnID, tcID));
