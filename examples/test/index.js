// Nothing here yet
let player1 = document.getElementById("player1");

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

const attackButton = document.getElementById('attack-button');
let playerHealth = 100;
let enemyHealth = 100;

function attackloop() {
  // Generate a random number between 1 and 10 for the attack damage
  const attackDamage = Math.floor(Math.random() * 10) + 1;
  enemyHealth -= attackDamage;
  attackAnimPlayer();
 //console.log(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
logbox(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);
  if (enemyHealth <= 0) {
    console.log('Enemy defeated!');
  } else {
    enemyTurn();
  }
};



function enemyTurn() {
    const counterAttackDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= counterAttackDamage;
   // console.log(`Enemy counter attack! ${counterAttackDamage} damage! Player health: ${playerHealth}`);
logbox(`Enemy counter attacked! ${counterAttackDamage} damage! Player health: ${playerHealth}`);

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
  







  console.log('Logging is working!');
    // Print a log message to the console