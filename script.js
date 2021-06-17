var audioSrc = "https://raw.githubusercontent.com/ArkuDada/Cocoroid/main/Asset/Voices/"

var voices = {
    "a" : new Audio(audioSrc +  "a.wav"),
    "i" : new Audio(audioSrc +  "i.wav"),
    "u" : new Audio(audioSrc +  "u.wav"),
    "e" : new Audio(audioSrc +  "e.wav"),
    "o" : new Audio(audioSrc +  "o.wav"),
}

function playAudio() {

    var input = document.getElementById("speech").value;
    var splitInput = input.split("");
    splitInput.forEach(voices[splitInput].play());

}

function playVoice(item, index, arr) {
    arr[index] = voices[item].play();
}