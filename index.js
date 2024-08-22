var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                sound("./sounds/tom-1.mp3");
                break;
            case "a":
                sound("./sounds/tom-2.mp3");
                break;

            case "s":
                sound("./sounds/tom-3.mp3");
                break;
            case "d":
                sound("./sounds/tom-4.mp3");
                break;
            case "j":
                sound("./sounds/snare.mp3");
                break;
            case "k":
                sound("./sounds/crash.mp3");
                break;
            case "l":
                sound("./sounds/kick-bass.mp3");
                break;
            default : console.log(buttonInnerHTML);
            
        }
        buttonAnimation(buttonInnerHTML);
    });
}
function sound(url){
    var audio = new Audio(url);
    audio.play();
}

document.addEventListener("keypress",function(event){
    var ch = event.key;
    switch(ch){
        case "w":
            sound("./sounds/tom-1.mp3");
            break;
        case "a":
            sound("./sounds/tom-2.mp3");
            break;

        case "s":
            sound("./sounds/tom-3.mp3");
            break;
        case "d":
            sound("./sounds/tom-4.mp3");
            break;
        case "j":
            sound("./sounds/snare.mp3");
            break;
        case "k":
            sound("./sounds/crash.mp3");
            break;
        case "l":
            sound("./sounds/kick-bass.mp3");
            break;
        default : console.log(ch);
        
    }
    buttonAnimation(ch);
});

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed")
    },100);
}
