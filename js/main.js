
var counter=0;

function fct_bt_plus1()
{
    counter++;
    document.getElementById('counting_text').innerText = counter;
}

function fct_bt_reset()
{
    counter = 0;
    document.getElementById('counting_text').innerText = counter;
}


document.addEventListener("DOMContentLoaded", function(){

    document.getElementById('bt_plus1').onclick = fct_bt_plus1;  // define funcao a ser chamada pelo botao bt_plus1
    document.getElementById('bt_reset').onclick = fct_bt_reset;  // define funcao a ser chamada pelo botao bt_reset
});