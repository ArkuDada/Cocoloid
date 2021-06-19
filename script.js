function playAudio() {

    let input = document.getElementById("speech").value;
    let constructInput = translate(input.split(""));
    let soundQueue = toSound(constructInput);
    console.log(constructInput , soundQueue);
    play_sound_queue(soundQueue);

}

function translate(arr) {
    const vowel = ["a", "i", "u", "e", "o"];
    let tempNewArr = [];
    let tempItem = "";
    for (let index = 0; index < arr.length; index++) {
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

function soundButton(value) {
    console.log(value)
    let tempNewArr = [];
    let tempItem = "";
    tempItem += value;
    tempNewArr.push(tempItem);
    let constructInput = translate(value.split(""));
    let soundQueue = toSound(constructInput);
    play_sound_queue(soundQueue);
}

function toSound(arr) {
    let temp = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length !== 0) {
            if (voices[arr[index]] !== undefined) {
                temp.push(voices[arr[index]]);
            }
        }
    }
    return temp;
}

function switchMode(b) {
    document.getElementById("switchLabel").innerHTML = b ? "To Text Mode" : "To Buttons Mode";
    document.getElementById("text-mode").hidden = b;
    document.getElementById("button-mode").hidden = !b;
}

function play(audio, callback) {

    const audioToPlay = audio;
    audioToPlay.play();
    if (callback) {
        audioToPlay.addEventListener('ended', callback);
    }


}

function play_sound_queue(sounds) {
    let index = 0;

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

