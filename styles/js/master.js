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

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var wayChange = 'down';
var sortChange = 'Numeric'

document.getElementById('wayChange').addEventListener('click', function(){

  if (wayChange === 'down') {
      wayChange = 'up';
  } else  if (wayChange === 'up'){
    wayChange = 'down';
  }

    document.getElementById('wayChange').innerHTML

    =  '<img class="wayChange" src="assets/images/' + wayChange + '.png" alt="">';


});

document.getElementById('sortChange').addEventListener('click', function(){

  if (sortChange === 'Numeric') {
      sortChange = 'Alphabetic';

      document.getElementById('sortChange').innerHTML

      =  '<button type="button" class="btn btn-outline-info order-btn-fix"> &nbsp' + sortChange + '&nbsp </button>';

  } else  if (sortChange === 'Alphabetic'){
    sortChange = 'Numeric';

    document.getElementById('sortChange').innerHTML

    =  '<button type="button" class="btn btn-outline-info order-btn-fix">  &nbsp &nbsp' + sortChange + '&nbsp &nbsp </button>';
  }


});
