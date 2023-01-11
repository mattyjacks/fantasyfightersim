let audioMuteFXbool = false;
let audioMuteMusicbool = false;
const soundMuteFXbutton = document.getElementById("soundmuteFXbutton");
const soundMuteMusicbutton = document.getElementById("soundmutemusicbutton");
let player1 = document.getElementById("player1");
let enemy1 = document.getElementById("enemy1");
const attackButton = document.getElementById('attack-button');

// Nothing here yet

//declares variables like player1

function Geeks() {
    var myDiv = document.getElementById("GFG");
     
    // creating button element
    var button = document.createElement('BUTTON');
     
    // creating text to be
    //displayed on button
    var text = document.createTextNode("Button");
     
    // appending text to button
    button.appendChild(text);
     
    // appending button to div
    myDiv.appendChild(button);

    console.log('Added to button!');
}


//rolls a d20 and logs the result to the logbox, controlled by button
function rollD20free() {
    let d20 = Math.floor(Math.random() * 20) + 1;
    console.log(d20);
    logbox(`You rolled a ${d20}!`);
}
 //rolls a d20 and does not log the result to the logbox
function rD20() {let d20 = Math.floor(Math.random() * 20) + 1; console.log(d20);}

let playerHealth = 100;
let enemyHealth = 100;

function attackloop() {
    if (enemyHealth <= 0) {
        logbox('Enemy already defeated!');
        return;}
  // Generate a random number between 1 and 10 for the attack damage
  const attackDamage = Math.floor(Math.random() * 10) + 1; 
  audioSwoosh();
  enemyHealth -= attackDamage;
  attackAnimPlayer();
 //console.log(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
logbox(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
  if (enemyHealth <= 0) {
    console.log('Enemy defeated!');
  } else {
    setTimeout(() => {  enemyTurn(); }, 700);
  }
};



function enemyTurn() {
    const counterAttackDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= counterAttackDamage;
    enemy1.classList.add('enemyattacking');
    audioSwoosh();
   // console.log(`Enemy counter attack! ${counterAttackDamage} damage! Player health: ${playerHealth}`);
logbox(`Enemy counter attacked! ${counterAttackDamage} damage! Player health: ${playerHealth}`);
    // Wait for the attack animation to finish before removing the 'attacking' class
    setTimeout(function() {
        enemy1.classList.remove('enemyattacking');
      }, 1000);
    if (playerHealth <= 0) {
      console.log('Game over');
    }


}

function attackAnimPlayer() {
  player1.classList.add('attacking');

  // Wait for the attack animation to finish before removing the 'attacking' class
  setTimeout(function() {
    player1.classList.remove('attacking');
  }, 1000);
}


//below controls logging to the logbox
const logElement = document.getElementById('logbox');

// Print a log message to the console
console.log('Hello, world!');

// Append the log message to the log element
function logtest() {
    logElement.innerHTML += 'Hello, world!<br>';
}
function logbox(logString) {
    logElement.innerHTML += logString + '<br>';
    updateScroll();
}
function updateScroll() {
    // Set the scrollTop to the scrollHeight to scroll to the bottom
    logElement.scrollTop = logElement.scrollHeight;
  }
  

//This handles audio
const audioFileSwoosh = [
    'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_001_26718.mp3?raw=true',
 'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_001_26718.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_002_26719.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_003_26720.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_bambo_stick_swing_whoosh_air_001_17291.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_bambo_stick_swing_whoosh_air_002_17292.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_001_20195.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_002_20196.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_003_20197.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_001_11671.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_002_11672.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_003_11673.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_004_11674.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_001_65220.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_002_65221.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_003_65222.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_004_65223.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_001_89430.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_002_89431.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_003_89432.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_004_89433.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_005_89434.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_001_30568.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_002_30569.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_003_30570.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_004_30571.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_pole_swing_in_air_whoosh_001_28122.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_pole_swing_in_air_whoosh_002_28123.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_or_cable_whip_swish_through_air_short_spin_11946.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_1.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_2.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_3.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_4.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_swinging_swish_air.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_001_22026.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_002_22027.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_003_22028.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_001_12681.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_002_12682.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_003_12683.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_001_90352.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_002_90353.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_003_90354.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_swish_swoosh_air_001.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_swish_swoosh_air_002.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_69680.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_fast_001_69681.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_fast_002_69682.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_plastic_swipe_swing_through_air_whip_001_16839.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_plastic_swipe_swing_through_air_whip_002_16840.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_001_26787.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_002_26788.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_003_26789.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_001_90355.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_002_90356.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_003_90357.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_004_90358.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_twig_swish_air_fast.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_001_89264.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_002_89265.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_003_89266.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_004_89267.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_001_90359.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_002_90360.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_003_90361.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_004_90362.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_001_28132.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_002_28133.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_003_28134.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_usb_cable_spin_swish.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_001_55829.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_002_55797.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_spinning_55802.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_001_74987.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_002_74988.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_003_74989.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_004_74990.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_toy_rubber_spin_swish_through_air.mp3?raw=true'
  ];
  
  function audioSwoosh() { if(audioMuteFXbool===false) {
    // Choose a random audio file
    const audioFile = audioFileSwoosh[Math.floor(Math.random() * audioFileSwoosh.length)];
  
    // Create an audio object
    const audio = new Audio(audioFile);
  
    // Play the audio
    audio.play();

    setTimeout(() => {
        audio.pause();
      }, 700); // stop audio after 1 second (1000 milliseconds)
  }
}
  
  // Play a random audio file
 // audioSwoosh();

function audioTest() {
    let audioTestSound = new Audio('https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_001_26718.mp3?raw=true');
audioTestSound.play();
}

//handles muting of audio
function audioMuteFX() {
    if(audioMuteFXbool===true) {audioMuteFXbool = false; soundMuteFXbutton.innerText = 'Mute Sound Effects'; soundMuteFXbutton.classList.remove('pressedbutton')}
else { audioMuteFXbool = true;  soundMuteFXbutton.innerText = 'Unmute Sound Effects'; soundMuteFXbutton.classList.add('pressedbutton')}
    console.log('audioMuteFXbool = ' + audioMuteFXbool);
}

function audioMuteMusic() {
    if(audioMuteMusicbool===false) {audioMuteMusicbool = true;} else { audioMuteMusicbool = false;}
     console.log('audioMuteMusicbool = ' + audioMuteMusicbool);}

  console.log('Logging is working!');
    // Print a log message to the console