// var modals = [
//   {
//     modal1: document.getElementById("modal1"),
//     btn1: document.getElementById("btn1"),
//     span1: document.getElementsByClassName("span1")[0]
//   },
// ]
//
// var modal1 = document.getElementById("modal1");
// var btn1 = document.getElementById("btn1");
// var span1 = document.getElementsByClassName("span1")[0];
//
// var modal2 = document.getElementById("modal2");
// var btn2 = document.getElementById("btn2");
// var span2 = document.getElementsByClassName("span2")[0];
//
// var modal3 = document.getElementById("modal3");
// var btn3 = document.getElementById("btn3");
// var span3 = document.getElementsByClassName("span3")[0];
//
//
// for (var i = 0; i < 2; i++) {
//   modals[i].btn[(i + 1)].onclick = function() {
//     modal[i].style.display = "block";
//   }
//   span[i].onclick = function() {
//     modal1.style.display = "none";
//   }
// }





// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



// Get the modal
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btn3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}



var birds = [
  {
    name: 'Kiwi',
    number: 01,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Bay of Plenty', 'Manawatu', 'Wellington',  'West Coast', 'Southland' ],
    status: 'Unseen',
    image: 'Kiwi.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Tui',
    number: 02,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West Coast', 'Cantebury', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Tui.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Fantail',
    number: 03,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West Coast', 'Cantebury', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Fantail.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Kea',
    number: 04,
    island: 'South',
    region: ['Tasman', 'West Coast', 'Cantebury', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Kea.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Kaka',
    number: 05,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Tasman', 'Nelson'],
    status: 'Unseen',
    image: 'Kaka.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Native Pigeon',
    number: 06,
    island: 'Both',
    region: ['Auckland', 'Wellington', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Native Pigeon.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Takahe',
    number: 07,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Hawkes bay', 'Wellington', 'Nelson', 'Cantebury', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Takahe.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Kingfisher',
    number: 08,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'Cantebury', 'Otago', 'Southland' ],
    status: 'Unseen',
    image: 'Kingfisher.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Robin',
    number: 09,
    island: 'North',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne', 'Taranaki'],
    status: 'Unseen',
    image: 'Robin.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Tomtit',
    number: 10,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Wellington', 'Nelson', 'Marlborough', 'Southland' ],
    status: 'Unseen',
    image: 'Tomtit.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Black Oyster Catcher',
    number: 11,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Wellington',  'Nelson', 'Marlborough', 'Southland' ],
    status: 'Unseen',
    image: 'Black Oyster Catcher.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Weka',
    number: 12,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne', 'Hawkes bay', 'Tasman', 'Nelson', 'Marlborough',],
    status: 'Unseen',
    image: 'Weka.jpg',
    info: 'Blah',
    link: 'Blah',
  },
]





var wayChange = 'down';
var sortChange = 'Numeric';
var cards = ['Kiwi', 'Tui', 'Fantail', 'Kea', 'Kaka', 'Native Pigeon', 'Takahe', 'Kingfisher', 'Robin', 'Tomtit', 'Black Oyster Catcher', 'Weka'];
var numbers = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];

// South Island Function

// document.getElementById('south').addEventListener('click', function(){
//   numbers.splice(0,numbers.length);
//   for (var i = 0; i < birds.length; i++) {
//     if (!(birds[i].island === 'North')) {
//         numbers.push(birds[i].number);
//     }
//   }
// });




/*

// Function to clear printed table
function clear(){
    document.getElementById('registryResults').innerHTML = '';
}

// Creating table heading
function tableHeading(){
    document.getElementById('registryResults').innerHTML +=
    '<thead class="thead-dark">' +
        '<tr>' +
            '<th>Name</th>' +
            '<th>Age</th>' +
            '<th>Weapon</th>' +
        '</tr>' +
    '</thead>';
}

// Function that writes appropriate information to results table
function writeFencers(){
    document.getElementById('registryResults').innerHTML +=
    '<tr>' +
        '<td>' + fencer[i].lastName + ', ' + fencer[i].firstName + '</td>' +
        '<td>' + fencer[i].age + '</td>' +
        '<td>' + fencer[i].weapon[0] + '</td>' +
    '</tr>';
}

*/






function profileMaker(){
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (birds[i].number === numbers[j]) {
        document.getElementById('profiles').innerHTML
        +=  '<div>'
        + birds[i].name
        + birds[i].number
        + '</div>';
      }
    }
  }
  console.log(numbers);
};

function clear(){
    document.getElementById('profiles').innerHTML = '';
};

// sort by function

function sortBy(){
  if (sortChange === 'Numeric' && wayChange === 'down') {

    birds.sort((a, b) => {
      if (a.number > b.number) {
        return 1
      } else {
        return -1
      }
    });

  } else if (sortChange === 'Numeric' && wayChange === 'up') {

    birds.sort((a, b) => {
      if (a.number < b.number) {
        return 1
      } else {
        return -1
      }
    });

  } else if (sortChange === 'Alphabetic' && wayChange === 'down') {

    birds.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    });

  } else if(sortChange === 'Alphabetic' && wayChange === 'up') {

    birds.sort((a, b) => {
      if (a.name < b.name) {
        return 1
      } else {
        return -1
      }
    });
  }

  clear();
  profileMaker();
}

profileMaker();



/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};







// determines the order the cards are displayed in (arrows)

document.getElementById('wayChange').addEventListener('click', function(){

  if (wayChange === 'down') {
      wayChange = 'up';
  } else  if (wayChange === 'up'){
    wayChange = 'down';
  };

    document.getElementById('wayChange').innerHTML

    =  '<img class="wayChange" src="assets/images/' + wayChange + '.png" alt="">';

    sortBy();

});

// determines the order the cards are displayed in (numbers/alphabet)

document.getElementById('sortChange').addEventListener('click', function(){

  if (sortChange === 'Numeric') {
      sortChange = 'Alphabetic';

      document.getElementById('sortChange').innerHTML

      =  '<button type="button" class="btn btn-outline-info order-btn-fix"> &nbsp' + sortChange + '&nbsp </button>';

  } else  if (sortChange === 'Alphabetic'){
    sortChange = 'Numeric';

    document.getElementById('sortChange').innerHTML

    =  '<button type="button" class="btn btn-outline-info order-btn-fix">  &nbsp &nbsp' + sortChange + '&nbsp &nbsp </button>';
  };

  sortBy();

});
