let data;
let file;
let x = 0;
let music;
let check;
let flag = 0;
let dur;
let first = 0;
let song = [];
let y;
// let serial;
// let char;

function preload() {
  file = loadJSON('./file.json', loadMySound);
}

function setup() {
  // serial = new p5.SerialPort();
  // serial.on('list', gotList);
  // serial.open("COM4");
  // serial.on('open', gotOpen);
  // serial.on('error', gotError);
  // serial.on('data', gotData);
  let command = Object.keys(file);
  let i = command.length; //number of keys
  let response = Object.values(file);
  let j = response.length; //number of values
  noCanvas();
  let lang = navigator.language || 'en-UK';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continous = true;
  let interim = false;
  speechRec.start(continous, interim);
  speech = new p5.Speech(voiceReady);
  speech.onLoad = voiceReady;
  speech.ended(Voicend);
  // speech.setRate(0.8);

  function voiceReady() {}
  speech.setVoice('Google हिन्दी');

  function gotSpeech() {

      if (speechRec.resultValue) {
        createP(speechRec.resultString);
        check = speechRec.resultString;
      }
      for (x = 0; x < i; x = x + 1) {
        let finalcheck = check.includes(command[x]);
        if (finalcheck == true) {
          if (flag == 1 && !song[x].isPlaying()) {
            if (x == 1 || x == 0) {
              if (first == 0) {
                y = x;
                speech.setRate(0.9);
                speech.setVoice('Google हिन्दी');
                speech.speak('Hey, my name is Bee. I am your virtual assistant. I like to sing and am a bit weird cuz I sing more than I talk. Like this');
                // speech.ended(Voicend);
                first = first + 1;
              } else {
                dur = song[0].duration();
                song[0].play();
                song[0].stop([dur]);
                dur = song[1].duration();
                song[1].play();
                song[1].stop([dur]);
              }
            } else if (x == 2) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('ok,so');
              // speech.ended(Voicend);

            } else if (x == 3) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('And');
              // speech.ended(Voicend);
            } else if (x == 11) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('Oh ok good. So');
              // speech.ended(Voicend);
            } else if (x == 12) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('Then');
              // speech.ended(Voicend);
            } else if (x == 13) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('Well');
              // speech.ended(Voicend);
            } else if (x == 14) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('No');
              // speech.ended(Voicend);
            } else if ((x == 16) || (x == 17)) {
              y = x;
              speech.setVoice('Google हिन्दी');
              speech.setRate(0.5);
              speech.speak('Yes');
              // speech.ended(Voicend);
            } else {
              dur = song[x].duration();
              song[x].play();
              song[x].stop([dur]);
            }
          }

        }
      }
    }
  }



function loadMySound(data) {
  for (d in data) {
    // loadSound(data[d])  ;
    let temp = loadSound(data[d]);
    song.push(temp);
  }

}

function Voicend() {
  dur = song[y].duration();
  song[y].play();
  song[y].stop([dur]);
}
//function draw() {


//}

function mousePressed() {
  flag = 1;
}

// function gotList(thelist) {
//   console.log(thelist);
// }
//
// function gotOpen() {
//   console.log('connection is open');
// }
//
// function gotError(err) {
//   console.log('there is an error');
//   console.log(err);
// }
//
// function gotData() {
//   temp = serial.readChar();
//   // console.log(char);
//   if (temp === "a" || temp === "b") {
//     char = temp;
//   }
// }

/*let voice;
let flag = 0;
function setup(){
noCanvas();
speech = new p5.Speech(voiceReady);
speech.onLoad = voiceReady;
function voiceReady(){
console.log(speech.voices);
}
}

function mousePressed(){
flag = 1;
speech.setVoice('Google हिन्दी');
speech.speak('let me speak');
}*/
