// document.querySelector(".drum").addEventListener("click",handel)
// function handel() {
//     alert("clicked")
// }
array_length = document.querySelectorAll(".drum").length
for (let index = 0; index < array_length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        key = this.innerHTML;
        console.log(key)
        makesound(key);
        drum_pressed(key)


        console.log(this)
        this.style.color = "white";
    }
    )
    document.addEventListener("keypress", function (event) {
        key = event.key;
        console.log(key)
        makesound(key);
       

        console.log(event)
        document.querySelector("."+key).style.color = "white";
         drum_pressed(key)
      
    }
    )
}
function makesound(key) {
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
function drum_pressed(key) {
    arr = document.querySelector("."+key);
   arr.classList.add("pressed")

   
setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")
document.querySelector("."+key).style.color="red"
},300)
    
   
 

    // console.log(arr)

    
}