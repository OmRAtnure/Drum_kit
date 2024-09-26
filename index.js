function playsound(e){
     
    var key=e;

   
    switch(key){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass =new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:console.log(key);
    }   
}

// function keylog(e){
//      console.log(e.key);
    
// }

var no_of_drums=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonClicked=this.innerHTML;
        playsound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
    


}
window.addEventListener("keyup", function (event) {
    playsound(event.key);
    buttonAnimation(event.key);
});
function buttonAnimation(key){
    //so this key is the which is beinge pressed and we have given class of key(itself) to that key
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){},100 )
    setTimeout(function(){activebutton.classList.remove("pressed")}, 100);
}
