var audioSrc = "https://raw.githubusercontent.com/ArkuDada/Cocoroid/main/Asset/Voices/"

function playAudio() {

    var input = document.getElementById("speech").value;
    var constructInput = translate(input.split(""));
    var soundQueue = toSound(constructInput);
    console.log(constructInput);
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
        if (arr[i].length !== 0) {
            temp.push(voices[arr[i]]);
        }
    }
    return temp;
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
    "a": a = new Audio(audioSrc + "a.wav"),
    "i": i = new Audio(audioSrc + "i.wav"),
    "u": u = new Audio(audioSrc + "u.wav"),
    "e": e =new Audio(audioSrc + "e.wav"),
    "o": o = new Audio(audioSrc + "o.wav"),
    "ka": ka = new Audio(audioSrc + "ka.wav"),
    "ki": ki = new Audio(audioSrc + "ki.wav"),
    "ku": ku = new Audio(audioSrc + "ku.wav"),
    "ke": ke = new Audio(audioSrc + "ke.wav"),
    "ko": ko = new Audio(audioSrc + "ko.wav"),
    "sa": sa = new Audio(audioSrc + "sa.wav"),
    "shi": shi = new Audio(audioSrc + "shi.wav"),
    "su": su = new Audio(audioSrc + "su.wav"),
    "se": se = new Audio(audioSrc + "se.wav"),
    "so": so = new Audio(audioSrc + "so.wav"),
    "ta": ta = new Audio(audioSrc + "ta.wav"),
    "chi": chi = new Audio(audioSrc + "chi.wav"),
    "ti" : chi,
    "tu": tu = new Audio(audioSrc + "tu.wav"),
    "te": te =new Audio(audioSrc + "te.wav"),
    "to": to = new Audio(audioSrc + "to.wav"),
}