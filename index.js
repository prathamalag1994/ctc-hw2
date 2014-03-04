$(document).ready(function(){ 

 //QUESTION 1

function Dog(){};
Dog.prototype.bark = function () 
{return 'Woof';};
 
function ShibaInu()
{Dog.call(this);};
    
ShibaInu.prototype = new Dog();

ShibaInu.prototype.constructor = ShibaInu;

ShibaInu.prototype.bark = function()
{return 'much wow very javascript';};
  
 //QUESTION 3

$('.secondbutton').click(function(){
$( '.secondheading' ).text( "Tiger Sharks are the best!!!" );
$( '.secondheading' ).css('color', '#43C6DB');
});

 //QUESTION 4

$(".button#4").click(function(){
$("#hip").css("-webkit-filter", "grayscale(100%) blur(3px)");
});  

 //QUESTION 5

$(".button#5").click(function(){
    $(".spincar").css('webkit-animation-name', 'drive');
    $(".spincar .wheel").css('-webkit-animation-name', 'spin');
});

 //QUESTION 6

x();
function x(){
    $(".nyancat").animate({"left": "+=10"});
    $(".rainbows").animate({"width": "+=10"}, x);}
});



