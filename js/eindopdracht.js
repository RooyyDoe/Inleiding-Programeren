/*jslint browser: true, deel: true, eqeq: true, plus plus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint ‘no-console’: 0*/

/* hier word een eventlistener gemaakt die kijkt of er een keydown event 
gebeurd, hierbij zit functie met daarin een parameter e (event) */
document.addEventListener('keydown', function(e) {
  /* Hier word een variabele gemaakt en hierin worden alle div elementen
  gestopt waardoor het een array wordt */  
  var audioKnoppen = document.querySelectorAll("div");
  /* Hier loop je door alle audio items in de array heen */  
  for (var i = 0; i<audioKnoppen.length; i++) {
      /* hier word de class van de div opgehaald en die word in de 'klasnaam'
      variabele gestopt */
      var klasnaam = audioKnoppen[i].className;
      /* Hier worden alle elementen met de class 'klasnaam' opgehaald en daarvan wordt de 
      waarde van de 'data-key' attribute opgehaald. Deze informatie wordt in de 'getkey' variabele opgeslagen*/
      var getkey = document.getElementsByClassName(klasnaam)[0].getAttribute("data-key");
      /* Hier wordt gekeken of de keycode van het ingekomen event (bv. A = 65) gelijk is aan de opgehaalde 'data-key' waarde van de geklikte div (bv. A = 65) */
      if (e.keyCode == getkey) {
        /* En wanneer dit true geeft wordt er een css class toegevoegd aan de geklikte div en speelt er een sound af */  
        document.getElementsByClassName(klasnaam)[0].classList.add('playing');   
        document.getElementById(getkey).play();
      }
      
  }
});


document.addEventListener('keyup', function(e) {

  var audioKnoppen = document.querySelectorAll("div");
    
  for (var i = 0; i<audioKnoppen.length; i++) {
      
      var klasnaam = audioKnoppen[i].className
     
      var getkey = document.getElementsByClassName(klasnaam)[0].getAttribute("data-key");
      
      if (e.keyCode == getkey) {
        /* En wanneer dit true geeft wordt er een css class afgehaald van de geklikte div */  
        document.getElementsByClassName(klasnaam)[0].classList.remove('playing');
      }
      
  }
});


/* hier word een eventlistener gemaakt die kijkt of er een click event 
gebeurd, hierbij zit een functie */
document.addEventListener('click', function(){
  /* Hier wordt het element dat het 'click' evenement triggerde, opgeslagen in de 'clicked' variabele */
  var clicked = event.target;
  /* hier word de class van een element opgehaald en die word in de 'klasnaam'
      variabele gestopt */  
  var klasnaam = clicked.className;
  /* Hier wordt gecontroleerd of het element dat je op wilt halen op class met de 'klasnaam' variabele wel bestaat */
  if (document.getElementsByClassName(klasnaam)[0] != undefined){
      /* Hier worden alle elementen met de class 'klasnaam' opgehaald en daarvan wordt de 
      waarde van de 'data-key' attribute opgehaald. Deze informatie wordt in de 'getkey' variabele opgeslagen*/
    var getkey = document.getElementsByClassName(klasnaam)[0].getAttribute("data-key");
     /* Wanneer er geklikt word op een div speelt er een geluidsfragment af. */
    document.getElementById(getkey).play();

  }

});