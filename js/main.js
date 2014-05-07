
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

function fct_show_settings()
{
    classie.toggle(settings_ico, 'active');
    classie.toggle(menu_bottom, 'menu_bottom_show');
    //disableOther('settings');
}

function disableOther( button ) {
    if( button === 'settings' ) {
        classie.toggle( settings, 'active' );
    }
}

document.addEventListener("DOMContentLoaded", function(){

    /*var icone_menu=document.getElementById("menu_icon");    //drawing menu icon
    var icone=icone_menu.getContext("2d");
    icone.fillStyle="#0d77b6";
    icone.fillRect(0,0,300,300);
    icone.fillStyle="#ffffff";
    icone.fillRect(10,10,30,30);
    icone.fillStyle="#0d77b6";
    icone.fillRect(10,16,30,6);
    icone.fillStyle="#0d77b6";
    icone.fillRect(10,28,30,6); */    // end menu icon drawing


    document.getElementById('bt_plus1').onclick = fct_bt_plus1;  // defines function to be called by button bt_plus1
    document.getElementById('bt_plus1').ontouchstart = fct_bt_plus1;  // defines function to be called by button bt_plus1
    document.getElementById('bt_reset').onclick = fct_bt_reset;  // defines function to be called by button bt_reset
    document.getElementById('bt_reset').ontouchstart = fct_bt_reset;  // defines function to be called by button bt_reset
    document.getElementById('settings').onclick = fct_show_settings;  // defines function to be called by button bt_reset
    document.getElementById('settings').ontouchstart = fct_show_settings;  // defines function to be called by button bt_reset
});