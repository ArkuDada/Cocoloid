var audioSrc = "https://raw.githubusercontent.com/ArkuDada/Cocoroid/main/Asset/Voices/"

var voices = {
    "a": new Audio(audioSrc + "a.wav"),
    "i": new Audio(audioSrc + "i.wav"),
    "u": new Audio(audioSrc + "u.wav"),
    "e": new Audio(audioSrc + "e.wav"),
    "o": new Audio(audioSrc + "o.wav"),
}

function playAudio() {

    var input = document.getElementById("speech").value;
    var splitInput = input.split("");
    translate(splitInput);
    console.log(splitInput);


}

function translate(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = voices[arr[i].toLowerCase()];
    }
}

//This plays a file, and call a callback once it completed (if a callback is set)

// function play(audio, callback) {
//     audio.play();
//     if (callback) {
//         //When the audio object completes it's playback, call the callback
//         //provided
//         audio.addEventListener('ended', callback);
//     }
// }
//
// //Changed the name to better reflect the functionality
// function play_sound_queue(sounds) {
//     var index = 0;
//     function recursive_play() {
//         //If the index is the last of the table, play the sound
//         //without running a callback after
//         if (index + 1 === sounds.length) {
//             play(sounds[index], null);
//         } else {
//             //Else, play the sound, and when the playing is complete
//             //increment index by one and play the sound in the
//             //indexth position of the array
//             play(sounds[index], function() {
//                 index++;
//                 recursive_play();
//             });
//         }
//     }
//
//     //Call the recursive_play for the first time
//     recursive_play();
// }
//
// function play_all() {
//     play_sound_queue([new Audio("http://www.smldesign.com/1.wav"), new Audio("http://www.smldesign.com/2.wav"), new Audio("http://www.smldesign.com/3.wav")]);
// }