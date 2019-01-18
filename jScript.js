// js file is loaded after jQuery //

// 'Where Time Is It?' is a small js app I built
// to convert the current date and time 
// into map coordinates that will display a
// Google map result into an iFrame.
// See it in action here:
// https://codepen.io/orenambielli/pen/gQYqoN

var currentTime = new Date();
var h = currentTime.getHours();
var mm = currentTime.getMinutes();
var s = currentTime.getSeconds();
var latitude = (h + "%20" + mm + "'" + s);
var displayLat = (h + "&deg;" + mm + " " + s)

var m = currentTime.getMonth()+1;
var d = currentTime.getDate();
var y = currentTime.getFullYear() - 2000;
var longitude = m + "%20" + d + "'" + y;
var displayLong = (m + "&deg;" + d + " " +  y) //murican calendar system!

// use js to insert HTML
document.write("<p class = 'coordinates'>Your longitude is month/day/year, or " + displayLong + ".</p>");
document.write("<p class = 'coordinates'>Your latitude is hours/minutes/seconds, or " + displayLat + ".</p>");

// google maps api using generated map from above scripts
document.write('<div class="map"><div class=  "gmap_canvas"><iframe width = "600" height = "500" id = "gmap_canvas" src = "https://maps.google.com/maps?q=' + longitude + '%20' + latitude + '&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder= "0" scrolling= "no" marginheight= "0" marginwidth= "0"></iframe></div></div>')

// also display on console
console.log(longitude + " " + latitude);
