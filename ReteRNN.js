var music_rnn, rnnPlayer;
var melody1;
var start_time;
var end_time = [];

Players();
inizializzamodello();


function Players() {
  MagentaPlayer = new mm.Player();
  MagentaPlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
 
}

function melodysequence() {

  melody1 = {
    notes: [
      {pitch: note[1], startTime: 0, endTime: end_time[1] = 0 + delta_time[1]},
      {pitch: note[2], startTime: end_time[1], endTime: end_time[2] = end_time[1]+ delta_time[2]},
      {pitch: note[3], startTime: end_time[2], endTime: end_time[3] = end_time[2]+ delta_time[3]},
      {pitch: note[4], startTime: end_time[3], endTime: end_time[4] = end_time[3]+ delta_time[4]},
      {pitch: note[5], startTime: end_time[4], endTime: end_time[5] = end_time[4]+ delta_time[5]},
      {pitch: note[6], startTime: end_time[5], endTime: end_time[6] = end_time[5]+ delta_time[6]},
      {pitch: note[7], startTime: end_time[6], endTime: end_time[7] = end_time[6]+ delta_time[7]},
      {pitch: note[8], startTime: end_time[7], endTime: end_time[8] = end_time[7]+ delta_time[8]},
      {pitch: note[9], startTime: end_time[8], endTime: end_time[9] = end_time[8]+ delta_time[9]},
      {pitch: note[10], startTime: end_time[9], endTime: end_time[10] = end_time[9]+ delta_time[10]},



    ],
    tempos: [{
      time: 0, 
      qpm: 120
    }],
    totalTime: 10
    };
    
    playRNN();
  }

function inizializzamodello(){
     // Initialize model
     music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
     music_rnn.initialize();
   
}


var rnn_steps = 20;
var rnn_temperature = 1.5;

function playRNN() {

  const qns = mm.sequences.quantizeNoteSequence(melody1, 2);
  music_rnn
  .continueSequence(qns, rnn_steps, rnn_temperature)
  .then((sample) => MagentaPlayer.start(sample))
}
