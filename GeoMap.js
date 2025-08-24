// Set your Mapbox access token here
// 🎬 Scene 1: Opening the Mapbox Gate
mapboxgl.accessToken = 'pk.eyJ1IjoiZXNodGFkZXZhdGhhIiwiYSI6ImNtNnBxeWV6eTFwY2cydHM4ZXd3bndzenAifQ.ipBpO4fA-O2Qd5S9-uto6A';



// 🎬 Scene 2: Creating the World Map

// Initialize the map and set its default view
const map = new mapboxgl.Map({
  container: 'map', // ID of the map container in HTML
  style: 'mapbox://styles/mapbox/streets-v11', // Map style
  center: [0, 0], // Default center [longitude, latitude]
  zoom: 2, // Default zoom level
});




// Function to get the user's current geolocation
function getUserLocation() {
  if (navigator.geolocation) { // navigator → A built-in JavaScript object that gives access to browser functions.
    navigator.geolocation.getCurrentPosition(showUserLocation, (error) => {  // .geolocation` → Property to check if geolocation is supported.
  //  navigator.geolocation.getCurrentPosition(successFn, errorFn)


      alert('Geolocation failed: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}


// Function to display user's current location on the map
function showUserLocation(position) {
  const userCoords = [position.coords.longitude, position.coords.latitude];
  map.flyTo({
    center: userCoords,
    zoom: 12,
  });

  // Add a marker for the user's location
  new mapboxgl.Marker()
    .setLngLat(userCoords)
    .addTo(map);
}



// 🎬 Scene 4: Calling the Hero’s Location





// 🎬 Scene 5: Triggering the Whole Adventure


// Trigger the geolocation when the page loads
window.onload = function() {
  getUserLocation();
};

// Function to search for a location based on user input



// 🎬 Scene 6: Treasure Hunt by Name


function searchLocation() {
  const locationInput = document.getElementById('location-input').value;


  // 🧠 Scene Name: "User Types a Secret Clue"
  if (locationInput) {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationInput)}.json?access_token=${mapboxgl.accessToken}`;



  //  🧠 Scene Name: "The First Clue is Found"
    fetch(geocodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.features.length > 0) {
          const place = data.features[0]; // One fetch gives Two results...
          const coordinates = place.center; // [longitude, latitude]

        // 🧠 Scene Name: "Fly to the Hidden Temple"
          map.flyTo({
            center: coordinates,
            zoom: 12,
          });

          // Add a marker for the searched location
          new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);



            // 🧠 Scene Name: "Mystery or Error"
        } else {
          alert('Location not found');
        }
      })
      .catch((error) => {
        alert('Error fetching location: ' + error.message);
      });
  } else {
    alert('Please enter a location to search.');
  }
}




// ✅ In Short — What Each Part Does
// Part	Purpose
// mapboxgl.accessToken	Gives your token to access Mapbox services
// new mapboxgl.Map()	Creates a new interactive map
// getUserLocation()	Requests the user's current location from the browser
// showUserLocation()	Updates the map view and puts a marker on the user's location
// flyTo()	Smooth map movement to a new location
// Marker()	Puts a pin on the map




// ✅ const place = data.features[0];
// {
//   "type": "FeatureCollection",
//   "query": ["paris"],
//   "features": [
//     {
//       "id": "place.123",
//       "place_name": "Paris, France",
//       "center": [2.3522, 48.8566],
//       "geometry": {...},
//       "properties": {...}
//     },
//     ...
//   ]
// }
