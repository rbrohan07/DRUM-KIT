array_length=$(".drum").array_length
console.log(array_length)
$(".drum").on("click",function(){
    key=this.innerHTML;
    console.log(key);
    sound_drum(key);

})
$(document).on("keypress",function(event)
{
    var key = event.key;
    console.log(key) 
    sound_drum(key)
    $("."+key).addClass("pressed")
    setTimeout(function(){    $("."+key).removeClass("pressed") },300)

})

function sound_drum(key)
{
  
        key=key.toLowerCase();
        switch (key) {
            
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "k":
                   var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "l":
             var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
    
            default:
                break;
        }
    
    
}