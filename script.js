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
    for (var index = 0; index < arr.length; index++) {
        arr[index] = arr[index].toLowerCase();
        tempItem += arr[index].toString();
        if (vowel.includes(arr[index])) {
            tempNewArr.push(tempItem);
            tempItem = "";
        } else if (arr[index] === "n") {
            if (!vowel.includes(arr[index + 1])) {
                tempNewArr.push(tempItem);
                tempItem = "";
            }
        }
    }
    return tempNewArr;
}

function toSound(arr) {
    var temp = [];
    for (var index = 0; index < arr.length; index++) {
        if (arr[index].length !== 0) {
            if (voices[arr[index]] !== undefined) {
                temp.push(voices[arr[index]]);
            }
        }
    }
    return temp;
}

function switchMode(b) {
    console.log("button mode = " + b);
    document.getElementById("text-mode").hidden = b;
}

function play(audio, callback) {
    try {
        audio.play();
        if (callback) {
            audio.addEventListener('ended', callback);
        }
    } catch {
        //I'm dumb
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

