// Nothing here yet



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








const attackButton = document.getElementById('attack-button');
let playerHealth = 100;
let enemyHealth = 100;

function attackloop() {
  // Generate a random number between 1 and 10 for the attack damage
  const attackDamage = Math.floor(Math.random() * 10) + 1;
  enemyHealth -= attackDamage;
  console.log(`Player attacked! Enemy health: ${enemyHealth}`);

  if (enemyHealth <= 0) {
    console.log('Enemy defeated!');
  } else {
    // Generate a random number between 1 and 10 for the enemy's counter attack
    const counterAttackDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= counterAttackDamage;
    console.log(`Enemy counter attack! Player health: ${playerHealth}`);

    if (playerHealth <= 0) {
      console.log('Game over');
    }
  }
};