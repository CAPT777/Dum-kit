// DRUM KIT (Modified Wes Bos JS30 Challenge)

//Listen for key events on the page
document.addEventListener("keydown", playSound);

//Event function
function playSound(event)  {
    console.log(event.keyCode);

    if (event.keyCode == 65 ) { // "a"
            //Play A-Clap
            let audio = document.getElementById("clap");
            audio.currentTime = 0;
            audio.play();
            document.getElementById("A").classList.add("playing");
    }

    if (event.keyCode == 83 ) { // "s"
        //Play S-hihat
        let audio = document.getElementById("hihat");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("S").classList.add("playing");
    }

    if (event.keyCode == 68 ) { // "d"
        //Play D-kick
        let audio = document.getElementById("kick");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("D").classList.add("playing");
    }

    if (event.keyCode == 70 ) { //"f"
        //Play F-openhat
        let audio = document.getElementById("openhat");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("F").classList.add("playing");
    }

    if (event.keyCode == 71 ) { //"g"
        //Play G-boom
        let audio = document.getElementById("boom");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("G").classList.add("playing");
    }

    if (event.keyCode == 72 ) {//"h"
        //Play H-ride
        let audio = document.getElementById("ride");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("H").classList.add("playing");
    }
    
    if (event.keyCode == 74 ) {//"j"
        //Play J-snare
        let audio = document.getElementById("snare");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("J").classList.add("playing");
    }

    if (event.keyCode == 75 ) {//"k"
        //Play K-tom
        let audio = document.getElementById("tom");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("K").classList.add("playing");
    }

    if (event.keyCode == 76 ) {//"l"
        //Play L-tink
        let audio = document.getElementById("tink");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("L").classList.add("playing");
    }

}

//add transition and listeners
document.getElementById("A").addEventListener("transitionend", removePlaying);
document.getElementById("S").addEventListener("transitionend", removePlaying);
document.getElementById("D").addEventListener("transitionend", removePlaying);
document.getElementById("F").addEventListener("transitionend", removePlaying);
document.getElementById("G").addEventListener("transitionend", removePlaying);
document.getElementById("H").addEventListener("transitionend", removePlaying);
document.getElementById("J").addEventListener("transitionend", removePlaying);
document.getElementById("K").addEventListener("transitionend", removePlaying);
document.getElementById("L").addEventListener("transitionend", removePlaying);

//Transition end function
function removePlaying() {
    this.classList.remove("playing")
}
