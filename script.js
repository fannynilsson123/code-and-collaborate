var answers = [
    'ROLL AGAIN',
    'GIVE AWAY TWO SHOTS',
    'DRINK TWO SHOTS',
    'ALL PLAYERS DRINK 3 SHOTS',
];

var roll = document.getElementById('roll');
var dice1 = document.getElementById('dice-1');
var dice2 = document.getElementById('dice-2');
var text = document.getElementById('text');

roll.onclick = function() {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;

if (d1 == d2) {

    text.innerHTML = answers[0];

} else if ((d1+d2) >= 2 && (d1+d2) < 6) {

    text.innerHTML = answers[1];

} else if ((d1+d2) > 6 && (d1+d2) <= 9) {

    text.innerHTML = answers[2];

} else if ((d1+d2) > 9 && (d1+d2) <= 12) {
    
    text.innerHTML = answers[3];
} 
}
