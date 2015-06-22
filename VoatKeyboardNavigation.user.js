// ==UserScript==
// @name         VoatKeyboardNavigation
// @namespace    http://mehranghamaty.com/
// @version      0.1
// @description  keyboard navigation still very buggy
// @author       Mehran Ghamaty
// @match        https://voat.co/*
// @grant        none
// ==/UserScript==

var currently_on = 0;
var highlighted_style = "thick solid #0000FF"
var submissions = document.getElementsByClassName('submission');

submissions[currently_on].style.border = highlighted_style;

function moveDown(){
    
  submissions[currently_on].style.border = "";
  
  if(currently_on < submissions.length)
    currently_on++;
    
    
  submissions[currently_on].style.border = highlighted_style;
  submissions[currently_on].scrollIntoView();
    
    
}

function moveUp(){
        
  submissions[currently_on].style.border = "";
    
  if(currently_on > 0)
    currently_on--;
    
  submissions[currently_on].style.border = highlighted_style;
  submissions[currently_on].scrollIntoView();
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 74) {
        //alert('J was pressed');
        moveDown();
    } else if(event.keyCode == 75) {
        //alert('K was pressed');
        moveUp();
    }
});