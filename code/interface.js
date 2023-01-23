let playerMaxHealth = 100;
let enemyMaxHealth = 50;
let playerHealth = playerMaxHealth;
let enemyHealth = enemyMaxHealth;
let startingGold = 25;
let playerGold = startingGold;

let playerName = Cookies.get('playerName');
if (playerName == "undefined") {
  playerName = 'Player';
} else {
let playerName = Cookies.get('playerName'); };

playerName = Cookies.get('playerName');
let combatPlayerName = document.getElementById("combatPlayerName");
combatPlayerName.innerHTML = playerName;


let waiting = false;
let day = 1;

let audioMuteFXbool = false;
let audioMuteMusicbool = false;
const soundMuteFXbutton = document.getElementById("soundmuteFXbutton");
const soundMuteMusicbutton = document.getElementById("soundmutemusicbutton");
let player1 = document.getElementById("player1");
let enemy1 = document.getElementById("enemy1");
const attackButton = document.getElementById('attack-button');
const runButton = document.getElementById('run-away-button');
const audioFileDiceRoll = 'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/zapsplat_leisure_board_game_yahtzee_dice_x1_put_in_shaker.mp3?raw=true';
const audioFileRunAway = 'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/zapsplat_running_animals_cat_run_carpet_002_56479.mp3?raw=true';

var interfaceScreenCombat = document.getElementsByClassName("screen-combat");
var interfaceScreenTown = document.getElementsByClassName("screen-town");

var combatPlayerHealth = document.getElementById("combatPlayerHealth");
var combatEnemyHealth = document.getElementById("combatEnemyHealth");

function reloadPage() {
  location.reload(true);
}


//https://www.tutorialspoint.com/javascript/javascript_cookies.htm

function WriteCookiePlayerName() {
  if( document.nameForm.playerNameName.value == "" ) {
     alert("Enter a character name!");
     return;
  }
  playerName = document.nameForm.playerNameName.value;
  logbox('Your new name is ' + playerName + '!');
  combatPlayerName.innerHTML = playerName;
  //use encodeURIComponent rather than escape() because escape() is deprecated
  //we have to use encodeURIComponent to make sure that the cookie value is not corrupted, if it contains special characters like "$"
 cookiesWriteCookies();
}

function cookiesWriteCookies() {
var now = new Date();
now.setMonth(now.getMonth() + 1200);


  cookievalue = encodeURIComponent(document.nameForm.playerNameName.value) + ";";
  //document.cookie = "playerName=" + cookievalue;
  //document.cookie = "expires=" + now.toUTCString() + ";";
  console.log("Setting Cookies : " + "playerName=" + cookievalue );
  Cookies.set('playerName', playerName, { expires: 1200 });
}

function cookiesReadCookies() {
  var allcookies = document.cookie;
  logbox("All Cookies : " + allcookies );
  
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  
  // Now take key value pair out of this array
  for(var i=0; i<cookiearray.length; i++) {
     valueKeyName = cookiearray[i].split('=')[0];
     value = cookiearray[i].split('=')[1];
     console.log("Key: " + valueKeyName + "     Value: " + decodeURIComponent(value));
     logbox("Key: " + valueKeyName + "  " + "  " + "    Value: " + decodeURIComponent(value));
  } }

function cookiesJSCookies() {
var cookieGetter = Cookies.get();
//logbox(cookieGetter.toString()); does not work properly, returns [object Object]
console.log(cookieGetter);
logbox(JSON.stringify(cookieGetter));
}

function cookiesJSClearCookies() {
  Object.keys(Cookies.get()).forEach(function(cookieName) {
    var neededAttributes = {
      // Here you pass the same attributes that were used when the cookie was created
      // and are required when removing the cookie
    };
    Cookies.remove(cookieName, neededAttributes);
  });
//Cookies.remove();
logbox('Cookies cleared, save data deleted.');
}



function interfaceScreenStartGame() {
  logbox ('Welcome to Fantasy Fighter Sim! It is day ' + day + ' of your adventure! You have ' + playerGold + ' gold. You have ' + playerHealth + ' health.');
  interfaceScreenTownShow(); interfaceHideStartButton();
}

function interfaceHideStartButton() {
  document.getElementById("startbutton").style.display = "none";
}

function interfaceScreenCombatShow() {
    interfaceScreenCombat[0].style.display = "block";
    //interfaceScreenCombat[0].style.visibility = "visible";
    console.log('Combat screen shown');
    logbox('Combat Entered! Fight for your life!');
    interfaceScreenTownHide();
    combatEnemyHealthUpdate();
    combatPlayerHealthUpdate();
    startCombat();
}

function startCombat() {
combatEnemyHealthUpdate();
combatPlayerHealthUpdate();
combatPlayerName.innerHTML = playerName;
runButton.innerHTML == "Run Away 🏃‍♂️";

if (enemyHealth < 1) {  // does not work yet
  enemyHealth = enemyMaxHealth;
  combatPlayerName.innerHTML = playerName;
  logbox('You have found a new enemy!')
  runButton.innerHTML == "Run Away 🏃‍♂️";
  enemy1.classList.remove('enemyattacking');
  enemy1.classList.remove('enemydead');
  combatEnemyHealthUpdate();
} }

function interfaceScreenTownShow() {
    interfaceScreenTown[0].style.display = "block";
    //interfaceScreenTown[0].style.visibility = "visible";
    console.log('Town screen shown');
    logbox('Town Entered! You are safe here.');
    interfaceScreenCombatHide();
}

function interfaceScreenCombatHide() {
interfaceScreenCombat[0].style.display = "none";
console.log('Combat screen hidden');
}

function interfaceScreenTownHide() {
interfaceScreenTown[0].style.display = "none";
console.log('Town screen hidden');
}

function runAway() {
  logbox('You ran away!');
  interfaceScreenTownShow();
  audioRunAway();
}

function myForm() {
  var inputValue = '';
  var inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = inputValue;
  var divEl = document.createElement('div');
  divEl.innerHTML = 'Hello, ' + inputValue;

  inputEl.addEventListener('input', function(e) {
    inputValue = e.target.value;
    divEl.innerHTML = 'Hello, ' + inputValue;
  });
  document.body.appendChild(inputEl);
  document.body.appendChild(divEl);
}




/* this is from chatgpt
import React, { useState } from 'react';

function playerNameForm() {
const [playerNameInputValue, setPlayerNameInputValue] = useState('');
function handlePlayerNameInputChange(event) {
    setPlayerNameInputValue(event.target.value);
}
    return (
      <form>
        <label>
          Name Character:
          <input type="text" value={playerNameInputValue} onChange={handlePlayerNameInputChange} />
        </label>
        <br />
        <br />
        <div>Hello, {inputValue}</div>
      </form>
    );
  } */

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


// this controls resting

function rest() {

if (playerHealth == playerMaxHealth) {
logbox('You are already at full health! You do not need to rest!');
return;

}

 else if (playerGold >= 10) {
    playerGold -= 10;
  playerHealth = playerMaxHealth;
  enemyHealth = enemyMaxHealth;
  audioCoins();

  day += 1;
  logbox('You rested and healed to full health! Remaining gold: ' + playerGold + '. It is now the morning of day ' + day + ' of your adventure.');

  setTimeout(() => {console.log("Playing Yawn"); audioYawn();}, 500);
  enemy1.classList.remove('enemyattacking');
  enemy1.classList.remove('enemydead');
  console.log('Resting'); } else {
  logbox('You do not have enough gold to rest!');
  }
}

//rolls a d20 and logs the result to the logbox, controlled by button
function rollD20free() {
  
    let d20 = Math.floor(Math.random() * 20) + 1;
    console.log('Rolled ' + d20);
    logbox(`You rolled a ${d20}!`);
    audioDiceRoll();
}
 //rolls a d20 and does not log the result to the logbox
// function rD20() {let d20 = Math.floor(Math.random() * 20) + 1; console.log(d20);}



function combatPlayerHealthUpdate() { combatPlayerHealth.innerHTML = "<span style='background-color: rgb(0, 225, 255);'>"+ playerHealth + " Health </span>"; }
function combatEnemyHealthUpdate() { combatEnemyHealth.innerHTML = "<span style='background-color: pink'>" + enemyHealth + " Health"; }



function attackloop() {

  if (waiting == false) {
    if (enemyHealth <= 0) {
        logbox('Enemy already defeated!');
        return;}

        //first set waiting to true so that the player can't spam the attack button
  waiting = true;
  // Generate a random number between 1 and 10 for the attack damage
  const attackDamage = Math.floor(Math.random() * 10) + 1; 
  audioSwoosh();
  enemyHealth -= attackDamage;
  attackAnimPlayer();
 //console.log(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
logbox(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
combatEnemyHealthUpdate();
  if (enemyHealth <= 0) {
    console.log('Enemy defeated!'); logbox("Enemy is now dead. Congrats!"); enemy1.classList.add('enemydead');
    runButton.innerHTML = "Leave 🏃‍♂️";
tempGold = Math.floor(Math.random() * 20) + 10;
audioCoins();
playerGold += tempGold;
logbox(`You found ${tempGold} gold! Total gold: ${playerGold}`);
waiting = false;
return;


  } else {
    setTimeout(() => {  enemyTurn(); }, 700);
  }
};
};


function enemyTurn() {
    const counterAttackDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= counterAttackDamage;
    combatPlayerHealthUpdate();
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
      logbox('Game over! You died!');
    }
//set waiting to false so that the player can attack again
    waiting = false;


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

const audioFileYawn = [
  'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_001_77359.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_002_77360.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_003_77361.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_004_77362.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_005_77363.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_006_77364.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_007_77365.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/zapsplat_human_male_man_yawn_008_77366.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/yawn/?raw=true'
]

const audioFileCoins = [
  'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/foley_cloth_money_pouch_with_coins_in_catch_in_hand.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/foley_money_coin_drop_coins.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coin_20p_set_down_on_other_coins_in_hand_change_001_90492.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coin_20p_set_down_on_other_coins_in_hand_change_002_90493.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coin_20p_set_down_on_other_coins_in_hand_change_004_90495.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coin_50p_set_down_on_other_coins_in_hand_change_90501.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coin_pick_up_from_other_coins_in_hand_004_90509.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coins_handful_set_down_soft_furnishing_001_90518.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coins_handful_set_down_soft_furnishing_004_90521.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_british_coins_handful_set_down_soft_furnishing_005_90522.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_coins_british_handful_set_down_on_car_seat_001_90985.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_coins_british_handful_set_down_on_car_seat_002_90986.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_coins_british_handful_set_down_on_car_seat_003_90987.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_coins_british_handful_set_down_on_car_seat_004_90988.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/coins/zapsplat_foley_money_coins_british_handful_set_down_on_car_seat_005_90989.mp3?raw=true'
]


const audioFileSwoosh = [
    'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_001_26718.mp3?raw=true',
 'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_001_26718.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_002_26719.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cable_whoosh_air_003_26720.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_bambo_stick_swing_whoosh_air_001_17291.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_bambo_stick_swing_whoosh_air_002_17292.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_001_20195.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_002_20196.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whip_swish_through_air_003_20197.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_001_11671.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_002_11672.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_003_11673.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_cane_whoosh_through_air_whip_004_11674.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_001_65220.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_002_65221.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_003_65222.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_stick_bambo_swing_swipe_whoosh_air_004_65223.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_001_89430.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_002_89431.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_003_89432.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_004_89433.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_large_wooden_pole_swing_air_whoosh_swoosh_heavy_005_89434.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_001_30568.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_002_30569.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_003_30570.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_crowbar_swing_in_air_whoosh_004_30571.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_pole_swing_in_air_whoosh_001_28122.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_metal_pole_swing_in_air_whoosh_002_28123.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_or_cable_whip_swish_through_air_short_spin_11946.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_1.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_2.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_3.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_spin_in_air_like_lasso_4.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rope_swinging_swish_air.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_001_22026.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_002_22027.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_rubber_cord_whip_through_air_whoosh_003_22028.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_001_12681.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_002_12682.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_bendy_whoosh_air_fast_003_12683.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_001_90352.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_002_90353.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_medium_sized_swing_whoosh_swoosh_through_air_003_90354.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_swish_swoosh_air_001.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_branch_swish_swoosh_air_002.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_69680.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_fast_001_69681.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_or_thin_object_swipe_swoosh_whip_through_air_fast_002_69682.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_plastic_swipe_swing_through_air_whip_001_16839.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_plastic_swipe_swing_through_air_whip_002_16840.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_001_26787.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_002_26788.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_snooker_cue_swing_air_whoosh_003_26789.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_001_90355.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_002_90356.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_003_90357.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_thin_object_very_fast_whoosh_swoosh_whip_through_air_004_90358.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_twig_swish_air_fast.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_001_89264.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_002_89265.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_003_89266.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_stick_whoosh_swish_air_short_004_89267.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_001_90359.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_002_90360.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_003_90361.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_thin_stick_swing_swipe_swoosh_whoosh_through_air_004_90362.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_001_28132.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_002_28133.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_throw_object_spin_whoosh_air_003_28134.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_usb_cable_spin_swish.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_001_55829.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_002_55797.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_whoosh_whip_swoosh_fast_spinning_55802.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_001_74987.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_002_74988.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_003_74989.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_foley_wooden_tube_swing_in_air_swoosh_whoosh_single_004_74990.mp3?raw=true',	'https://github.com/mattyjacks/fantasyfightersim/blob/main/assets/sounds/swooshes/zapsplat_toy_rubber_spin_swish_through_air.mp3?raw=true'
  ];


  function audioDiceRoll() { if(audioMuteFXbool===false) {
    const audio = new Audio(audioFileDiceRoll);
    console.log('audioDiceRoll() called');
    audio.play();} }

    function audioRunAway() { if(audioMuteFXbool===false) {

    const audio = new Audio(audioFileRunAway);
    console.log('audioRunAway() called');
    audio.play();}
    }

  function audioSwoosh() { if(audioMuteFXbool===false) {
    // Choose a random audio file
    const audioFile = audioFileSwoosh[Math.floor(Math.random() * (audioFileSwoosh.length -1))];
  
    // Create an audio object
    const audio = new Audio(audioFile);
  
    // Play the audio
    audio.play();

    setTimeout(() => {
        audio.pause();
      }, 700); // stop audio after 1 second (1000 milliseconds)
  }
}

function audioYawn() { if(audioMuteFXbool===false) {
  // Choose a random audio file
  tempRandomYawn = Math.floor(Math.random() * (audioFileYawn.length -1)); 
  const audioFile = audioFileYawn[tempRandomYawn];
console.log('tempRandomYawn = ' + tempRandomYawn);
  // Create an audio object
  const audio = new Audio(audioFile);

  // Play the audio
  audio.play();

}
}

function audioCoins () { if(audioMuteFXbool===false) {
  // Choose a random audio file
  const audioFile = audioFileCoins[Math.floor(Math.random() * (audioFileCoins.length - 1))]; 

  // Create an audio object
  const audio = new Audio(audioFile);

  // Play the audio
  audio.play();

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