var audioSrc = "https://raw.githubusercontent.com/ArkuDada/Cocoroid/main/Asset/Voices/"

function playAudio() {

    var input = document.getElementById("speech").value;
    var constructInput = translate(input.split(""));
    var soundQueue = toSound(constructInput);
    //console.log(splitInput,constructInput);
    play_sound_queue(soundQueue);

}

function translate(arr) {
    const vowel = ["a", "i", "u", "e", "o"];
    var tempNewArr = [];
    var tempItem = "";
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        tempItem += arr[i].toString();
        if (vowel.includes(arr[i])) {
            tempNewArr.push(tempItem);
            tempItem = "";
        }
    }
    return tempNewArr;
}

function toSound(arr) {
    var temp = [];
    for (i = 0; i < arr.length; i++) {
        temp.push(voices[arr[i]]);
    }
    return temp;
}

function checkVowel(char) {

    for (i = 0; i < vowel.length; i++) {
        if (vowel[i] === char) {
            return true;
        }
    }
    return false;
}

function play(audio, callback) {
    audio.play();
    if (callback) {
        audio.addEventListener('ended', callback);
    }
}

function play_sound_queue(sounds) {
    var index = 0;

    function recursive_play() {
        if (index + 1 === sounds.length) {
            play(sounds[index], null);
        } else {
            play(sounds[index], function () {
                index++;
                recursive_play();
            });
        }
    }

    recursive_play();
}

var voices = {
    "a": new Audio(audioSrc + "a.wav"),
    "i": new Audio(audioSrc + "i.wav"),
    "u": new Audio(audioSrc + "u.wav"),
    "e": new Audio(audioSrc + "e.wav"),
    "o": new Audio(audioSrc + "o.wav"),
    "ka": new Audio(audioSrc + "ka.wav"),
    "ki": new Audio(audioSrc + "ki.wav"),
    "ku": new Audio(audioSrc + "ku.wav"),
    "ke": new Audio(audioSrc + "ke.wav"),
    "ko": new Audio(audioSrc + "ko.wav"),
    "sa": new Audio(audioSrc + "sa.wav"),
    "shi": new Audio(audioSrc + "shi.wav"),
    "su": new Audio(audioSrc + "su.wav"),
    "se": new Audio(audioSrc + "se.wav"),
    "so": new Audio(audioSrc + "so.wav"),
}