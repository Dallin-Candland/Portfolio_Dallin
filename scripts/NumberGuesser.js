let max = 750;
let min = 1; 
let guess = 675;
const btnHigher = document.getElementById("btn-higher");
const btnLower = document.getElementById("btn-lower");
const tbTextbox = document.getElementById("textbox").setAttribute('value', guess);
void OnPressHigher();{
    min = guess + 1;
    NextGuess();
}
void OnPressLower();{
    max = guess - 1;
    NextGuess();
}
void NextGuess();{
    guess = Math.floor(Math.random()*max) + min;
    tbTextbox.nodeValue = string(guess);
}
btnHigher.addEventListener('click', OnPressHigher());
btnLower.addEventListener('click', e => {
    OnPressLower();
});