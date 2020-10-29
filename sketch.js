var space = 70;
var rSide = [];
var black = [];
var mid = [];
var lSide = [];
var osc;
var envo = [];

var rKee = ['A', null, null, 'F', null, null, null, 'K', null, null];
var blKee = ['W', 'E', null, 'T', 'Y', 'U', null, 'O', 'P', null, null];
var midKee = [null, 'S', null, null, 'G', 'H', null, null, 'L', null];
var lKee = [null, null, 'D', null, null, null, "J", null, null, ';'];

var note = [];
var key_number = 0;
var start_time = 0;
var stop_time = 0;
var delta_time = [];
var counter = 0;
note[counter] = 0;

function setup() {
  let cnv = createCanvas(1000, 300);
  cnv.mousePressed(playOscillator);

  // for (var j = 0; j < 17; j++) {
  //   envo.push(new p5.Env());
  //   envo[j].setADSR(0.1, 0.1, 1, 0.1);
  //   envo[j].setRange(1, 0);
  //   osc.push(new p5.Oscillator());
  //   osc[j].amp(envo[j]);
  // }
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
  playng = true;
  
  for (var i = 0; i < 10; i++) {
    rSide.push(new rSideKey(i, space, rKee[i]));
    black.push(new BlackKey(i + 0.667, space, blKee[i]));
    mid.push(new MidKey(i, space, midKee[i]));
    lSide.push(new lSideKey(i, space, lKee[i]));
  }
}


function draw() {
  background(255);
  for (var i = 0; i < rSide.length; i++) {
    if (i === 0 || i === 3 || i === 7) {
      rSide[i].display();
    }
    if ((i !== 2) && (i !== 6) && (i !== 9) && (i !== 10)) {
      black[i].display();
    }
    if (i === 1 || i === 4 || i === 5 || i === 8) {
      mid[i].display();
    }
    if (i === 2 || i === 6 || i === 9) {
      lSide[i].display();
    }
  }
}

function keyPressed() {
  var root = 60;
  
  if (keyCode === 65) {
    rSide[0].red();
    osc.freq(midiToFreq(root, 0.1));
    osc.amp(1, 0.1);

    counter = counter + 1;
    note[counter] = 60;
    start_time = Math.floor(Date.now());
    key_number = 1;

  } else if (keyCode === 87) {
    black[0].red();
    osc.freq(midiToFreq(root+1,0.1));
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 62;
    start_time = Math.floor(Date.now());
    key_number = 1;

  } else if (keyCode === 83) {
    mid[1].red();
    osc.freq(midiToFreq(root+2, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 64;
    start_time = Math.floor(Date.now());
    key_number = 3;

  } else if (keyCode === 69) {
    black[1].red();
    osc.freq(midiToFreq(root+3, 0,1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 65;
    start_time = Math.floor(Date.now());
    key_number = 4;

  } else if (keyCode === 68) {
    lSide[2].red();
    osc.freq(midiToFreq(root+4, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 67;
    start_time = Math.floor(Date.now());
    key_number = 5;

  } else if (keyCode === 70) {
    rSide[3].red();
    osc.freq(midiToFreq(root+5, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 69;
    start_time = Math.floor(Date.now());
    key_number = 6;

  } else if (keyCode === 84) {
    black[3].red();
    osc.freq(midiToFreq(root+6, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 60;
    start_time = Math.floor(Date.now());
    key_number = 7;

  } else if (keyCode === 71) {
    mid[4].red();
    osc.freq(midiToFreq(root+7, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 72;
    start_time = Math.floor(Date.now());
    key_number = 8;

  } else if (keyCode === 89) {
    black[4].red();
    osc.freq(midiToFreq(root+8, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 74;
    start_time = Math.floor(Date.now());
    key_number = 9;

  } else if (keyCode === 72) {
    mid[5].red();
    osc.freq(midiToFreq(root+9, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 76;
    start_time = Math.floor(Date.now());
    key_number = 10;

  } else if (keyCode === 85) {
    black[5].red();
    osc.freq(midiToFreq(root+10, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 77;
    start_time = Math.floor(Date.now());
    key_number = 11;

  } else if (keyCode === 74) {
    lSide[6].red();
    osc.freq(midiToFreq(root+11, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 79;
    start_time = Math.floor(Date.now());
    key_number = 12;

  } else if (keyCode === 75) {
    rSide[7].red();
    osc.freq(midiToFreq(root+12, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 81;
    start_time = Math.floor(Date.now());
    key_number = 13;

  } else if (keyCode === 79) {
    black[7].red();
    osc.freq(midiToFreq(root+13, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 83;
    start_time = Math.floor(Date.now());
    key_number = 14;

  } else if (keyCode === 76) {
    mid[8].red();
    osc.freq(midiToFreq(root+14, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 85;
    start_time = Math.floor(Date.now());
    key_number = 15;

  } else if (keyCode === 80) {
    black[8].red();
    osc.freq(midiToFreq(root+15, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 87;
    start_time = Math.floor(Date.now());
    key_number = 16;

  } else if (keyCode === 186) {
    lSide[9].red();
    osc.freq(midiToFreq(root+16, 0.1))
    osc.amp(1, 0.1);
    counter = counter + 1;
    note[counter] = 89;
    start_time = Math.floor(Date.now());
    key_number = 17;
  }
}


function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  osc.start();
  playing = true;
}

function keyReleased() {
  osc.amp(0, 0.5);
  playing = false;

  stop_time = Math.floor(Date.now());
  delta_time[counter] = stop_time - start_time;
  console.log(delta_time[counter])

  if (counter == 5){
    counter = 0;
    console.log(note);
    delta_time[0] = 0;
    delta_time = delta_time.map(function(item) {return (item /1000)});
    console.log(delta_time);
    
    alert("Preparo la risposta per te...:)")
    melodysequence();
  }
 

  for (var i = 0; i < 10; i++) {
    rSide[i].white();
    black[i].white();
    mid[i].white();
    lSide[i].white();
  }
}

function rSideKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x, 0);
    vertex(this.x, height);
    vertex(this.x + this.keyWidth, height);
    vertex(this.x + this.keyWidth, height * 0.6)
    vertex(this.x + (this.keyWidth * 0.667), height * 0.6)
    vertex(this.x + (this.keyWidth * 0.667), 0);
    endShape();
    
    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), height - this.size);
  }
  
  this.red = function() {
    this.col = color(255, 0, 0);
  }
  
  this.white = function() {
    this.col = color(255);
  }
}

function BlackKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(0);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    rect(this.x, 0, (this.keyWidth * 0.667), height * 0.6);
    
    fill(255, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.2), (height * 0.6)  - this.size);
  }
  
   this.red = function() {
    this.col = color(255, 0, 0);
  }
  
  this.white = function() {
    this.col = color(0);
  }
}

function MidKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x + (this.keyWidth * 0.333), 0);
    vertex(this.x + (this.keyWidth * 0.333), height * 0.6);
    vertex(this.x, height * 0.6);
    vertex(this.x, height);
    vertex(this.x + this.keyWidth, height);
    vertex(this.x + this.keyWidth, height * 0.6);
    vertex(this.x + (this.keyWidth * 0.667), height * 0.6);
    vertex(this.x + (this.keyWidth * 0.667), 0);
    endShape();
    
    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), height - this.size);
  }
  
   this.red = function() {
    this.col = color(255, 0, 0);
  }
  
  this.white = function() {
    this.col = color(255);
  }
}

function lSideKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x + (this.keyWidth * 0.333), 0);
    vertex(this.x + (this.keyWidth * 0.333), height * 0.6);
    vertex(this.x, height * 0.6);
    vertex(this.x, height);
    vertex(this.x + this.keyWidth, height);
    vertex(this.x + this.keyWidth, 0);
    endShape();
    
    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), height - this.size);
  }
  
   this.red = function() {
    this.col = color(255, 0, 0);
  }
  
  this.white = function() {
    this.col = color(255);
  }
}