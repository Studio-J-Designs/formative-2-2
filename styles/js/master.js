// modal codes and vars

var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("btn1");
var span1 = document.getElementsByClassName("close1")[0];

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("btn3");
var span3 = document.getElementsByClassName("close3")[0];

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

// main array for birds

var birds = [
  {
    name: 'Kiwi',
    scienceName: 'Apteryx mantelli',
    number: 01,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Bay-of-Plenty', 'Manawatu', 'Wellington',  'West-Coast', 'Southland'],
    status: 'Unseen',
    image: 'kiwi.png',
    info: 'North Island brown kiwi have disappeared from many lowland sites and around the fringes of their distribution, through a combination of habitat loss and predation by mammalian predators, especially dogs, ferrets and stoats.',
    link: 'north-island-brown-kiwi',
    value: 'birdValue1',
  },
  {
    name: 'Tui',
    scienceName: 'Prosthemadera novaeseelandiae',
    number: 02,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'tui.png',
    info: 'Tui were the most common passerine found in Maori middens and were probably once an important source of protein. Despite the loss of the vast majority of lowland forest in New Zealand, tui have probably benefitted from the introduction to New Zealand of a variety of flowering and fruiting plants. These new species.',
    link: 'tui',
    value: 'birdValue2',
  },
  {
    name: 'Fantail',
    scienceName: 'Rhipidura fuliginosa',
    number: 03,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'fantail.png',
    info: 'The fantail is one of the few native forest bird species that has coped reasonably well with the extensive conversion of lowland native forest to farmland. However, nesting adults, eggs and chicks are not immune from being preyed upon by introduced mammalian pests, particularly by ship rats.',
    link: 'new-zealand-fantail',
    value: 'birdValue3',
  },
  {
    name: 'Kea',
    scienceName: 'Nestor notabilis',
    number: 04,
    island: 'South',
    region: ['Tasman', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'kea.png',
    info: 'Contemporary threats include introduced mammalian predators, environmental lead, and conflict and accidents with humans and their equipment. Episodic, semi-catastrophic mortality events are thought to be associated with plagues of stoats which ensue after mast seeding of beech and rimu.',
    link: 'kea',
    value: 'birdValue4',
  },
  {
    name: 'Kaka',
    scienceName: 'Nestor meridionalis',
    number: 05,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Tasman', 'Nelson'],
    status: 'Unseen',
    image: 'kaka.png',
    info: 'Although forest clearance has destroyed all but a fraction of the kaka’s former habitat, the biggest threat to their survival is introduced mammalian predators, particularly the stoat, but also the brushtail possum. It is predation by these pests, particularly of nesting females, that is the reason for general rarity of kaka on the main islands compared to their forested offshore island strongholds.',
    link: 'kaka',
    value: 'birdValue5',
  },
  {
    name: 'Native Pigeon',
    scienceName: 'Hemiphaga novaeseelandiae',
    number: 06,
    island: 'Both',
    region: ['Auckland', 'Wellington', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'nativePigeon.png',
    info: 'Although a major issue for conservation of the kereru in the early 1900s, habitat loss probably has little impact on regional populations today. The main threat to kereru is predation by introduced mammalian predators, particularly feral cats, possums, stoats and ship rats, especially when nesting.',
    link: 'new-zealand-pigeon',
    value: 'birdValue6',
  },
  {
    name: 'Takahe',
    scienceName: 'Porphyrio hochstetteri',
    number: 07,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Hawkes-Bay', 'Wellington', 'Nelson', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'takahe.png',
    info: 'Natural hazards influencing the Fiordland takahē population include avalanches and cold climate. Modern threats include predation by introduced stoats, and competition for food from introduced red deer. Deer numbers have been controlled to low levels since 1980, allowing tussock grasslands to slowly recover their original size and nutrients.',
    link: 'south-island-takahe',
    value: 'birdValue7',
  },
  {
    name: 'Kingfisher',
    scienceName: 'Todiramphus sanctus',
    number: 08,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'kingfisher.png',
    info: 'It isn\'t threatened. Yay.',
    link: 'sacred-kingfisher',
    value: 'birdValue8',
  },
  {
    name: 'Robin',
    scienceName: 'Petroica longipes ',
    number: 09,
    island: 'North',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki'],
    status: 'Unseen',
    image: 'robin.png',
    info: 'Forest clearance for farmland during the 19th and 20th centuries resulted in loss of habitat of the North Island robin. Today the main threat to its conservation is predation by introduced mammalian predators, such as feral cats, stoats, possums, and particularly the ubiquitous and arboreal ship rat.',
    link: 'north-island-robin',
    value: 'birdValue9',
  },
  {
    name: 'Tomtit',
    scienceName: 'Petroica macrocephala',
    number: 10,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'],
    status: 'Unseen',
    image: 'tomtit.png',
    info: 'Presently, the main threat to populations on North and South Islands is from introduced mammalian predators, particularly ship rats. While many clutches and broods are taken by predators, adult females also suffer mortality because they alone incubate clutches and brood young, and their habit of nesting in shallow cavities means that they are not always able to escape once a predator arrives at the nest.',
    link: 'tomtit',
    value: 'birdValue10',
  },
  {
    name: 'Black Oyster Catcher',
    scienceName: 'Haematopus chathamensis',
    number: 11,
    island: 'Both',
    region: ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Wellington',  'Nelson', 'Marlborough', 'Southland'],
    status: 'Unseen',
    image: 'blackOysterCatcher.png',
    info: 'The most significant threat to Chatham Island oystercatchers on Chatham and Pitt Islands is predation by introduced cats. Cats prey on eggs and chicks, and to a lesser extent, adults. Introduced weka also prey on eggs. Trampling of nests by farm animals also occurs.',
    link: 'chatham-island-oystercatcher',
    value: 'birdValue11',
  },
  {
    name: 'Weka',
    scienceName: 'Gallirallus australis',
    number: 12,
    island: 'Both',
    region: ['Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Hawkes-Bay', 'Tasman', 'Nelson', 'Marlborough'],
    status: 'Unseen',
    image: 'weka.png',
    info: 'The main recognised threats are starvation during droughts, and predation by mustelids, especially ferrets.  Weka are often killed by uncontrolled dogs, and are legally hunted on the Chatham Islands and on some muttonbird islands.',
    link: 'weka',
    value: 'birdValue12',
  },
]

// code for carosel

function swiperNo(){
var swiper = new Swiper('.swiper-container', {
     centeredSlides: true,
     slidesPerView: 'auto',
     loop: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
   });
};

swiperNo();

// other vars

var wayChange = 'down';
var sortChange = 'Numeric';
var numbers = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
var islandArray = ['North', 'South'];
var regionArray = ['Northland', 'Auckland', 'Waikato', 'Bay-of-Plenty', 'Gisborne', 'Taranaki', 'Manawatu', 'Hawkes-Bay', 'Wellington', 'Tasman', 'Nelson', 'Marlborough', 'West-Coast', 'Cantebury', 'Otago', 'Southland'];
var statusArray = ['Seen', 'Unseen']
var birdExpand = ['birdValue1'];

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

//Status Modal

for (var i = 0; i < statusArray.length; i++) {
  document.getElementById('statusContent').innerHTML

  += '<button id="' + statusArray[i] + '" class="btn btn-info modal-btn-fix">' + statusArray[i] + '</button>'
};

// all reset code

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

//status Filter

document.getElementById('Seen').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].status === 'Seen') {
        numbers.push(birds[i].number);
    }
  }
  clear();
  profileMaker();
  closeNav();
  modal3.style.display = "none";
});

document.getElementById('Unseen').addEventListener('click', function(){
  numbers.splice(0,numbers.length);
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].status === 'Unseen') {
        numbers.push(birds[i].number);
    }
  }
  clear();
  profileMaker();
  closeNav();
  modal3.style.display = "none";
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


// Baisc card maker

function profileMaker(){
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (birds[i].number === numbers[j]) {
        document.getElementById('profiles').innerHTML
        +=  '<div id="birdValue' + birds[i].number + '" class="card mb-3 card-fix birdClass" style="max-width: 540px;"><div class="row no-gutters"><div class="col-md-4"><img src="assets/images/'
        + birds[i].image
        + '" class="card-img" alt="'
        + birds[i].name
        + '"></div><div class="col-md-8"<div class="card-body"><h5 class="card-title">'
        + birds[i].scienceName
        + '</h5><p class="card-text">'
        + birds[i].name
        + '</p><p class="card-text"><small class="text-muted">'
        + birds[i].number
        + '</small></p></div></div></div></div>';
      };
    };
  };
  console.log(numbers);
  $('.birdClass').on('click', function(){
    birdExpand.splice(0,birdExpand.length);
    birdExpand.push(this.id);
    console.log(birdExpand);
  });
};

// adition vars for code

var currentRegions = [];
var galleryArray = [];
var finalGalleryArray = [];
var regionText = [];

//code making each individual expanded profile

function birdExpanded(){
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].value == birdExpand) {

      document.getElementById('headingSection').innerHTML
      = '<img id="logo" src="assets/images/logo.jpg" alt="">';

      currentRegions = [];
      galleryArray = [];
      finalGalleryArray = [];
      regionText = [];

      currentRegions = birds[i].region;
      console.log(currentRegions);

      regionText = currentRegions.join(', ');
      console.log(regionText);

      for (var j = 0; j < currentRegions.length; j++) {
        galleryArray.push('<div class="swiper-slide" style="background-image:url(assets/images/'
        + currentRegions[j] + '.jpg)"></div>');
        console.log(currentRegions[j]);
      };

      finalGalleryArray = galleryArray.join('');
      console.log(finalGalleryArray);

      document.getElementById('contentArea').innerHTML
      = '<div class="contentAreaFix"><div id="profiles"></div></div>';



      if (birds[i].status == 'Unseen') {
        document.getElementById('sortBy').innerHTML
        = '<h3 class="titleSB"> Status: </h3><div id=""><button onclick="status()" type="button" class="btn btn-outline-danger order-btn-fix">'
        + birds[i].status
        + '</button></div>';
      } else if (birds[i].status == 'Seen') {
        document.getElementById('sortBy').innerHTML
        = '<h3 class="titleSB"> Status: </h3><div id=""><button onclick="status()" type="button" class="btn btn-outline-success order-btn-fix"> &nbsp;&nbsp;'
        + birds[i].status
        + '&nbsp;&nbsp;</button></div>';
      }

      document.getElementById('profiles').innerHTML
      = '<div class="row"><div class="column"><img src="assets/images/'
      + birds[i].image
      + '" class="card-img" alt="'
      + birds[i].name
      + '"></div><div class="column"><p class="textFix"> Conservation Status: <br><br>'
      + birds[i].info
      + '</p></div></div><div class="row"><div class="column"><p class="textFix"><br>The '
      + birds[i].name
      + ' can be found in the following regions: <br><br>'
      + regionText
      + '.</p></div><div class="column"><div class="swiper-container"><div class="swiper-wrapper">'
      + finalGalleryArray
      + '</div></div></div></div><button onclick="back()" id="back" type="button" class="btn btn-success backButtonFix">Back</button><a class="btn btn-success infoButtonFix" href="http://nzbirdsonline.org.nz/species/'
      + birds[i].link
      + '">Info Link</a>';

      swiperNo();
    }
  }
};

// changes a birds status

function status(){
  console.log('test');
  for (var i = 0; i < birds.length; i++) {
    if (birds[i].value == birdExpand) {
      if (birds[i].status === 'Unseen') {
        birds[i].status = 'Seen'
        console.log(birds[i].status);
      } else {
          birds[i].status = 'Unseen'
          console.log(birds[i].status);
      };
    };
  };
  birdExpanded();
};

// the back button

function back(){
  document.getElementById('headingSection').innerHTML
  = '<img id="logo" src="assets/images/logo.jpg" alt=""><span onclick="openNav()"><button type="button" class="btn btn-outline-info filter-btn-fix"> &nbsp; Filter By &nbsp; </button></span>';

  document.getElementById('sortBy').innerHTML
  ='<h3 class="titleSB"> Sort By: </h3><div onclick="wayChangeFunction()" id="wayChange" class=""><img class="wayChange" src="assets/images/down.png" alt=""></div><div id="sortChange"><button onclick="sortChangeFunction()" type="button" class="btn btn-outline-info order-btn-fix">  &nbsp; Numeric &nbsp;  </button></div>';

  document.getElementById('contentArea').innerHTML
  = '<h2> INDEX</h2><div id="profiles"></div><br><br><button onclick="submit()" id="submit" type="button" class="btn btn-success submitButtonFix">Submit</button>';

  profileMaker();
};

//submit button

function submit(){
    birdExpanded();
    console.log(birds[i].status);
};

// basic clear function

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

// first launched look

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

 function wayChangeFunction(){

  if (wayChange === 'down') {
      wayChange = 'up';
  } else  if (wayChange === 'up'){
    wayChange = 'down';
  };

    document.getElementById('wayChange').innerHTML

    =  '<img class="wayChange" src="assets/images/' + wayChange + '.png" alt="">';

    sortBy();

};

// determines the order the cards are displayed in (numbers/alphabet)

function sortChangeFunction(){

  if (sortChange === 'Numeric') {
      sortChange = 'Alphabetic';

      document.getElementById('sortChange').innerHTML

      =  '<button onclick="sortChangeFunction()" type="button" class="btn btn-outline-info order-btn-fix"> &nbsp;' + sortChange + '&nbsp; </button>';

  } else  if (sortChange === 'Alphabetic'){
    sortChange = 'Numeric';

    document.getElementById('sortChange').innerHTML

    =  '<button onclick="sortChangeFunction()" type="button" class="btn btn-outline-info order-btn-fix">  &nbsp; &nbsp;' + sortChange + '&nbsp; &nbsp; </button>';
  };

  sortBy();

};
