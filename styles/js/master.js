var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("btn1");
var span1 = document.getElementsByClassName("close1")[0];

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("btn3");
var span3 = document.getElementsByClassName("close3")[0];

// var modals = [modal1, modal2, modal3];
// var buttons = [btn1, btn2, btn3];
// var spans = [span1, span2, span3];
//
// for (var i = 0; i < modals.legnth; i++) {
//   buttons[i].onclick = function() {
//     modals[i].style.display = "block";
//   };
//   spans[i].onclick = function() {
//     modals[i].style.display = "none";
//   };
//   window.onclick = function(event) {
//    if (event.target == modals[i]) {
//      modals[i].style.display = "none";
//    };
//  }
// };


btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
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
    region: ['Northland', 'Auckland', 'Bay-of-Plenty', 'Manawatu', 'Wellington',  'West-Coast', 'Southland'],
    status: 'Unseen',
    image: 'Kiwi.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Tui',
    number: 02,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Tui.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Fantail',
    number: 03,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Fantail.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Kea',
    number: 04,
    island: 'South',
    region: ['Tasman', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
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
    region: ['Auckland', 'Wellington', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Native Pigeon.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Takahe',
    number: 07,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Hawkes-Bay', 'Wellington', 'Nelson', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Takahe.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Kingfisher',
    number: 08,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Kingfisher.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Robin',
    number: 09,
    island: 'North',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki'],
    status: 'Unseen',
    image: 'Robin.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Tomtit',
    number: 10,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'Tomtit.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Black Oyster Catcher',
    number: 11,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Wellington',  'Nelson', 'Marlborough', 'Southland'],
    status: 'Unseen',
    image: 'Black Oyster Catcher.jpg',
    info: 'Blah',
    link: 'Blah',
  },
  {
    name: 'Weka',
    number: 12,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Hawkes-Bay', 'Tasman', 'Nelson', 'Marlborough'],
    status: 'Unseen',
    image: 'Weka.jpg',
    info: 'Blah',
    link: 'Blah',
  },
]





var wayChange = 'down';
var sortChange = 'Numeric';
// var cards = ['Kiwi', 'Tui', 'Fantail', 'Kea', 'Kaka', 'Native Pigeon', 'Takahe', 'Kingfisher', 'Robin', 'Tomtit', 'Black Oyster Catcher', 'Weka'];
var numbers = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
var islandArray = ['North', 'South'];

var regionArray = ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'];

// Island Modal

for (var i = 0; i < islandArray.length; i++) {
  document.getElementById('islandContent').innerHTML

  += '<button id="' + islandArray[i] + '" class="btn btn-info modal-btn-fix">' + islandArray[i] + '</button>'
};

// Region Modal

for (var n = 0; n < regionArray.length; n++) {
  if (regionArray[n] === 'Bay-of-Plenty') {
    document.getElementById('regionContent').innerHTML
      += '<button id="Bay-of-Plenty" class="btn btn-info modal-btn-fix">Bay of Plenty</button>'
  } else if (regionArray[n] === 'Hawkes-Bay') {
    document.getElementById('regionContent').innerHTML
      += '<button id="Hawkes-Bay" class="btn btn-info modal-btn-fix">Hawkes Bay</button>'
  } else if (regionArray[n] === 'West-Coast') {
    document.getElementById('regionContent').innerHTML
      += '<button id="West-Coast" class="btn btn-info modal-btn-fix">West Coast</button>'
  } else {
    document.getElementById('regionContent').innerHTML
    += '<button id="'
    + regionArray[n]
    + '" class="btn btn-info modal-btn-fix">'
    + regionArray[n]
    + '</button>'
  }
};
console.log(regionArray);

document.getElementById('all').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    numbers.push(birds[i].number);
    }
  clear();
  profileMaker();
  closeNav();
  modal1.style.display = "none";
});





// North Island Filter

document.getElementById('North').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    if (!(birds[i].island === 'South')) {
        numbers.push(birds[i].number);
    }
  }
  clear();
  profileMaker();
  closeNav();
  modal1.style.display = "none";
});



// South Island Filter

document.getElementById('South').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    if (!(birds[i].island === 'North')) {
        numbers.push(birds[i].number);
    }
  }
  clear();
  profileMaker();
  closeNav();
  modal1.style.display = "none";
});




// Region filters


// for (var k = 0; k < regionArray.length; k++) {
//   document.getElementById(regionArray[k]).addEventListener('click', function(){
//     numbers.splice(0,numbers.length);
//     console.log(numbers);
//     for (var l = 0; l < birds.length; l++) {
//       for (var m = 0; m < 16; m++) {
//         if (birds[l].region[m] === regionArray[l]) {
//             numbers.push(birds[l].number);
//             console.log(birds[l].region[m]);
//             console.log(birds[l].number);
//             console.log(regionArray[l]);
//           };
//
//         };
//       };
//     clear();
//     profileMaker();
//     closeNav();
//     modal2.style.display = "none";
//   });
// };


document.getElementById('Northland').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Northland') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Auckland').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Auckland') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Waikato').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Waikato') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Bay-of-Plenty').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Bay-of-Plenty') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Gisborne').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Gisborne') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Taranaki').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Taranaki') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Manawatu').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Manawatu') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Hawkes-Bay').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Hawkes-Bay') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Wellington').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Wellington') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Tasman').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Tasman') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Nelson').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Nelson') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Marlborough').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Marlborough') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('West-Coast').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'West-Coast') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Cantebury').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Cantebury') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Otago').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Otago') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});

document.getElementById('Southland').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < 16; j++) {
      if (birds[i].region[j] === 'Southland') {
          numbers.push(birds[i].number);
      };
    };
  };
  clear();
  profileMaker();
  closeNav();
  modal2.style.display = "none";
});





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


// function profileMaker(){
//   for (var i = 0; i < birds.length; i++) {
//     for (var j = 0; j < numbers.length; j++) {
//       if (birds[i].number === numbers[j]) {
//         document.getElementById('profiles').innerHTML
//         +=  '<option value="'+ [(i + 1)] + '">'
//         + birds[i].name
//         + birds[i].number
//         + '</option>';
//       }
//     }
//   }
//   console.log(numbers);
// };


function profileMaker(){
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (birds[i].number === numbers[j]) {
        document.getElementById('profiles').innerHTML
        +=  '<div class="card mb-3 card-fix" style="max-width: 540px;">  <div class="row no-gutters"><div class="col-md-4"><img src="assets/images/'
        + birds[i].image
        + '" class="card-img" alt="'
        + birds[i].name
        + '"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">'
        + birds[i].name
        + '</h5><p class="card-text">'
        + birds[i].info
        + '</p><p class="card-text"><small class="text-muted">'
        + birds[i].number
        + '</small></p></div></div></div></div>'
      }
    }
  }
  console.log(numbers);
};








// function profileMaker(){
//   for (var i = 0; i < birds.length; i++) {
//     for (var j = 0; j < numbers.length; j++) {
//       if (birds[i].number === numbers[j]) {
//         document.getElementById('profiles').innerHTML
//         +=  '<div>'
//         + birds[i].name
//         + birds[i].number
//         + '</div>';
//       }
//     }
//   }
//   console.log(numbers);
// };

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
