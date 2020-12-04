
var acc = [
  {
    id : 101,
    name : 'InterContinental Wellington',
    address : '2 Grey Street, Wellington Central, Wellington 6011',
    email : 'wellington@ihg.com',
    phone : '04-472 2722',
    lat : -41.28461908190314,
    lng : 174.7771539258883,
    minDays : '1',
    maxDays : '5',
    minPeople : '1',
    maxPeople : '2',
    cost : 157,
    type : 'Hotel',
    meal : 'yes',
    photo : 'inter1.jpeg',
    desc : 'Adjacent to Wellington’s waterfront, InterContinental Wellington is the most centrally-located and experienced global five-star hotel in New Zealand’s capital city. It is the seamless and personal service of the team that makes your Wellington accommodation and travel experience truly memorable. Guests can spend time with the award-winning concierge team whose tips and insider knowledge help travellers discover the arts, events, shopping, and culinary cultures surrounding the hotel.',
  },
  {
    id : 102,
    name : 'Novotel Wellington',
    address : '133 The Terrace, Wellington Central, Wellington 6011',
    email : 'h3049-re2@accor.com',
    phone : '+6449181900',
    lat : -41.28381834047013,
    lng : 174.7747396563135,
    minDays : '1',
    maxDays : '5',
    minPeople : '1',
    maxPeople : '2',
    cost : 157,
    type : 'Hotel',
    meal : 'yes',
    photo : 'nov.jpg',
    desc : 'Novotel Wellington is a 4.5 star hotel located in the heart of the CBD, close to iconic attractions - Te Papa, Cable Car, Botanical Gardens and the Waterfront. Our modern accommodation rooms have a pop of colour and are designed with guest comfort in mind. All rooms feature smart flat screen televisions, working desks and plenty of natural light.',
  },
  {
    id : 103,
    name : 'Copthorne Hotel Wellington Oriental Bay',
    address : '100 Oriental Parade, Oriental Bay, Wellington 6011',
    email : 'copthorne.orientalbay@millenniumhotels.co.nz',
    phone : '04-385 0279',
    lat : -41.29185460555702,
    lng : 174.78744999887266,
    minDays : '1',
    maxDays : '5',
    minPeople : '1',
    maxPeople : '2',
    cost : 157,
    type : 'Hotel',
    meal : 'yes',
    photo : 'nov.jpg',
    desc : 'Located on Wellingtons premier Oriental Parade, overlooking the stunning Wellington Harbour, Copthorne Hotel Wellington Oriental Bay is the perfect base to explore the city. Merely 10 minutes away, are the citys shopping, commercial, and entertainment centre. The Te Papa Museum, Live Theatre in Courtney Place, and many of the citys finest restaurants and bars are also close to our Oriental Parade hotel.',
  },
  {
    id : 104,
    name : 'The Dwellington',
    address : '8 Halswell Street, Thorndon, Wellington 6011',
    email : 'info@dwellington.co.nz',
    phone : '04-550 9373',
    lat : -41.273329407915654,
    lng : 174.77949280003304,
    minDays : '1',
    maxDays : '10',
    minPeople : '1',
    maxPeople : '1',
    cost : 30,
    type : 'Hostel',
    meal : 'yes',
    photo : 'dwel.jpg',
    desc : 'Established in 2013, The Dwellingtons aim is to improve the standard of backpacker hostels in Wellington, the Capital city. Our goal is to create a place of comfort and style, in a relaxed atmosphere, providing the weary traveler with some long missed home comforts at extremely affordable rates.',
  },
  {
    id : 105,
    name : 'The Marion Hostel',
    address : '13 Marion Street, Te Aro, Wellington 6011',
    email : 'themarionhostel@gmail.com',
    phone : '027 284 3887',
    lat : -41.29419916677331,
    lng : 174.7767263568617,
    minDays : '1',
    maxDays : '10',
    minPeople : '1',
    maxPeople : '1',
    cost : 30,
    type : 'Hostel',
    meal : 'yes',
    photo : 'marion.jpg',
    desc : 'Located in Wellington, The Marion Hostel is in the city centre. Interislander Ferry Terminal and Zealandia are worth checking out if an activity is on the agenda, while those wishing to experience the areas popular attractions can visit Wellington Zoo and The Weta Cave. Looking to enjoy an event or a game? See whats going on at TSB Bank Arena or Westpac Stadium.',
  },
  {
    id : 106,
    name : 'Nomads Capital Hostel Wellington',
    address : '118/120 Wakefield Street, Te Aro, Wellington 6011',
    email : 'info@nomadscapital.com',
    phone : '04-978 7800',
    lat : -41.28957158973267,
    lng : 174.77700965385907,
    minDays : '1',
    maxDays : '10',
    minPeople : '1',
    maxPeople : '1',
    cost : 30,
    type : 'Hostel',
    meal : 'yes',
    photo : 'Nomads Capital Hostel Wellington',
    desc : 'Located in at the center of Wellington, within steps of the citys main sights, Nomads Capital Backpackers - Wellington combines convenience with comfort at an affordable price. The hostel is less than 100 meters away from Civic Square, the Town Hall, and art gallery along with a wide range of bars, restaurants, and night spots. Theres a choice of dorms or private rooms with en-suite bathrooms, all of which are comfortably furnished. The ground floor is home to a spacious reception area and internet cafe along with a well-equipped kitchen, TV lounge, and courtyard garden. Next door is the hostels own Blend Cafe which serves breakfast, lunch, and dinner in a relaxing atmosphere.',
  },
  {
    id : 107,
    name : 'Marksman Motor Inn',
    address : '40/44 Sussex Street, Mount Cook, Wellington 6021',
    email : 'info@marksmanmotel.co.nz',
    phone : '04-385 2499',
    lat : -41.3002062268263,
    lng : 174.7784349134694,
    minDays : '3',
    maxDays : '10',
    minPeople : '2',
    maxPeople : '4',
    cost : 90,
    type : 'Motel',
    meal : 'yes',
    photo : 'mark.jpg',
    desc : 'Just 3 minutes’ walk from Government House Wellington, Marksman Motor Inn offers accommodation with flat-screen satellite TV and a microwave. The property features Wi-Fi internet access and free parking. Marksman Inn is located in the heart of Wellington, 10 minutes’ walk from the Courtenay Place entertainment district. Wellington International Airport is a 10-minute drive away.',
  },
  {
    id : 108,
    name : 'Bella Vista Motel Wellington',
    address : '302/304 Evans Bay Parade, Hataitai, Wellington 6021',
    email : 'info@bellavistamotel.co.nz',
    phone : '04-939 4430',
    lat : -41.3018677690229,
    lng : 174.80415356893974,
    minDays : '3',
    maxDays : '10',
    minPeople : '2',
    maxPeople : '4',
    cost : 90,
    type : 'Motel',
    meal : 'yes',
    photo : 'bella.jpg',
    desc : 'Wellington is New Zealands capital and the perfect base for your adventures. From the moment you arrive, youll enjoy the convenience of being located in close proximity to the Wellington CBD for business, shops, entertainment and other activities. At Bella Vista Wellington Motel Accommodation we cater for all your business or recreational needs.',
  },
  {
    id : 109,
    name : 'Victoria Court Motor Lodge',
    address : '201 Victoria Street, Te Aro, Wellington 6011',
    email : 'info@victoriacourtmotorlodge.co.nz',
    phone : '04-385 7102',
    lat : -41.29355324981513,
    lng : 174.77365902881925,
    minDays : '3',
    maxDays : '10',
    minPeople : '2',
    maxPeople : '4',
    cost : 90,
    type : 'Motel',
    meal : 'yes',
    photo : 'vic.jpg',
    desc : 'Located in the heart of Wellington, Victoria Court Motor Lodge is 15 minutes’ walk from Lambton Quay and Courtenay Place. Wellington Airport is a 15-minute drive away. All studios and apartments have a microwave, refrigerator and tea and coffee maker. A spa bath is included in most rooms.',
  },
  {
    id : 110,
    name : 'Views on View Road',
    address : 'Southgate, Wellington',
    email :'',
    phone :'',
    lat : -41.33125622456068,
    lng : 174.78271961081987,
    minDays : '2',
    maxDays : '15',
    minPeople : '1',
    maxPeople : '4',
    cost : 240,
    type : 'House',
    meal : 'no',
    photo : 'views.png',
    desc : 'This spacious 3 bedroom home is nestled on the ridgeline of the hill which means it gets bathed in sun all day long. This property features an east and a west facing deck so you can enjoy the outdoors all times of the day.',
  },
  {
    id : 111,
    name : 'White Picket Fence. Convenient to ferry & city.',
    address : 'Wadestown, Wellington',
    email : '',
    phone : '',
    lat : -41.26174039740074,
    lng : 174.7742727697319,
    minDays : '2',
    maxDays : '15',
    minPeople : '1',
    maxPeople : '4',
    cost : 240,
    type : 'House',
    meal : 'no',
    photo : 'white.png',
    desc : 'Wake up in a beautiful and serene white picketed villa; Nestled into the safe and quiet residential suburb of Wadestown, this space is a perfect hideaway only 3kms or a 10 minute drive from the bustling Capital city, Wellington. With all the elements to welcome a successful stay, this 3 bedroom, step-free and spacious villa is desirable for all types of traveler. After a full day of exploring, you can relax on the sheltered and well-appointed deck overlooking a tranquil courtyard full of nature.',
  },
  {
    id : 112,
    name : 'Nestled in Ngaio, harbour views over bush',
    address : 'Wadestown, Wellington',
    email : '',
    phone : '',
    lat : -41.26174039740074,
    lng : 174.7742727697319,
    minDays : '2',
    maxDays : '15',
    minPeople : '1',
    maxPeople : '4',
    cost : 240,
    type : 'House',
    meal : 'no',
    photo : 'nest.png',
    desc : 'Earlier or later checkin or checkout times may be able to be arranged - please ask. Light breakfast supplies provided are: bread, spreads (honey, marmalade, jam), muesli, plunger coffee and a selection of teas also available. Please advise if you would like a specific one type of milk and/or bread. (24 hrs prior to check-in)',
  }
] //Object Array ends


console.log(key);
var script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key + '&libraries=&v=weekly" defer></script>'
console.log (script);

$(document).ready(function(){
  $('body').append(script);
  $('#exampleModal').hide();


}); //documen.ready

  var days, guests, meal;

function initMap(accom) {
  console.log(accom);
  // The location of Uluru
const wellington = { lat: -41.2769, lng: 174.7731 };
  // The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: wellington,
});

var i;
  for (i = 0 ; i < accom.length; i++){
    console.log(accom[i].lat, accom[i].lng);
    var location = { lat : accom[i].lat, lng: accom[i].lng}
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });

    var cost = (accom[i].cost + (meal * guests)) * days ;
    var contentString = '<div class="mapWindow"><img class="d-block m-auto mapImages img-fluid" src="img/photos/' + accom[i].photo + '" alt="Photo">'+
    '<h3 class="my-2 text-center text-primary">'+ accom[i].name +
     ' </h3> <p class="text-center">' + accom[i].desc + '</p> <br> <h6 class="text-center text-dark">Total Guests: ' + guests+ '</h6>'+
     '<br> <h6 class="text-center text-dark">Total Nights: ' + days + '</h6><br> <h6 class="text-center text-dark">Total Cost: $ ' + cost + ' </h6> '+
     '<button id="bookBtn" type="button" id="bookBtn" class="d-block m-auto quoteBtn btn btn-outline-info">Book Now</button></div>';

   const infowindow = new google.maps.InfoWindow({
     content: contentString,
   });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    //push the marker into array then run loop to accsess markers click event to trigger modal with details
  }
}//initMap


$(function() {
  $( "#datepicker" ).datepicker();
  $( "#datepicker2" ).datepicker();
  // date calculation
  $('#datepicker').datepicker({
    dateFormat : 'yy-dd-mm',
    changeMonth : true,
    minDate :new Date(),
    maxDate : '+1y',
    onSelect : function(date){
      var selectDate = new Date(date);
      var msecInADay  = 86400000;
      var stDate = new Date(selectDate.getTime() + msecInADay);

      $('#datepicker2').datepicker('option', 'minDate', stDate);
      var enDate = new Date(selectDate.getTime() + 10 * msecInADay);

      $('#datepicker2').datepicker('option', 'maxDate', enDate);

    }

  });//datepicker


  $('#datepicker2').datepicker({
    dateFormat : 'yy-dd-mm',
    changeMonth : true
  });//datepicker2


  $('#searchBtn').click(function(){
  days = dateDiff();
  guests = parseInt($('#guests').val());
  console.log(days,guests);
  meal=parseInt($('#meal').val());
  filterAccommodation(days, guests);

  $('#exampleModal').show();
    // filterAccommodation(days, guests);
  }); //search btn
  $('.closeBtn').click(function(){
    $('#exampleModal').hide();
  });
function dateDiff(){
  var start = $(datepicker).datepicker('getDate');
  var end = $(datepicker2).datepicker('getDate');

  var days = (end-start)/1000/60/60/24; //to get human readable days
  console.log(days);
  return (days);

}//dateDiff
function filterAccommodation(d,g){
  console.log(d,g);
  var i;
  var filteredObjects =[];
  for(i = 0; i< acc.length; i++){
    console.log(acc[i].minDays, acc[i].maxDays, acc[i].minPeople, acc[i].maxPeople);
    if ((d <= acc[i].maxDays) && (d >= acc[i].minDays) && (g <= acc[i].maxPeople) && (g >= acc[i].minPeople)) {
      filteredObjects.push(acc[i]);
    }
  }
  console.log(filteredObjects);
  initMap(filteredObjects);
}
   


    $( "#speed" ).selectmenu();

    $( "#files" ).selectmenu();

    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );

    $( "#salutation" ).selectmenu();
  });//funtion
