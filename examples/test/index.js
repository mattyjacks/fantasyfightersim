// Nothing here yet
let player1 = document.getElementById("player1");

function init() {
    let player1 = document.getElementById('player1');
    console.log('log init is '+ player1);
}

window.onload = init();


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






console.log('log35 is '+ player1);

const attackButton = document.getElementById('attack-button');
let playerHealth = 100;
let enemyHealth = 100;

function attackloop() {
  // Generate a random number between 1 and 10 for the attack damage
  const attackDamage = Math.floor(Math.random() * 10) + 1;
  enemyHealth -= attackDamage;
  attackAnim();
  console.log(`Player attacked! ${attackDamage} damage! Enemy health: ${enemyHealth}`);

  if (enemyHealth <= 0) {
    console.log('Enemy defeated!');
  } else {
    enemyTurn();
  }
};



function enemyTurn() {
    const counterAttackDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= counterAttackDamage;
    console.log(`Enemy counter attack! ${counterAttackDamage} damage! Player health: ${playerHealth}`);

    if (playerHealth <= 0) {
      console.log('Game over');
    }


}

function attackAnim() {
  player1.classList.add('attacking');

  // Wait for the attack animation to finish before removing the 'attacking' class
  setTimeout(function() {
    player1.classList.remove('attacking');
  }, 500);
}
