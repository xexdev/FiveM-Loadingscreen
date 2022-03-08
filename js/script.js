var myAudio = document.getElementById("loadingscreen");

function onKeyDown(event) {
	switch (event.keyCode) {
		case 32:
    myAudio.paused ? myAudio.play() : myAudio.pause();
	}
	return false;
}

window.addEventListener("keydown", onKeyDown, false);