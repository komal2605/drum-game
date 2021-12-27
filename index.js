var yourName = prompt("Enter your name ?");
alert("Hello "+yourName+", Welcome to drum site!");
var body = document.getElementsByTagName("body")[0];

var drumSelector=document.querySelectorAll(".drum").length;
for(i=0;i<drumSelector; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

   var buttonInnerHtml= this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnnimation(buttonInnerHtml);
   });
}

document.addEventListener("keydown",function (event){
   makeSound(event.key);
   buttonAnnimation(event.key);
})

function makeSound(key){
   switch (key) {
      case "w":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         
         break;
         case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "s":
         var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
         case "d":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
         case "j":
         var kick=new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;
         case "k":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
         break;
         case "l":
         var snare=new Audio("sounds/snare.mp3");
         snare.play();
         alert("Hello GiniAshok !")
         break;
      default:

      } 
}

function buttonAnnimation(currentKey){
var activeButton= document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
   activeButton.classList.remove("pressed")
},100);
}

$("input").keydown(function(event){
  $("h2").text(event.key);
});

