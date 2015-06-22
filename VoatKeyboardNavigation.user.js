// ==UserScript==
// @name         VoatKeyboardNavigation
// @namespace    http://mehranghamaty.com/
// @version      0.3
// @description  keyboard navigation still very buggy, locks div to top. j goes down, k goes up, x expands the link
// @author       Mehran Ghamaty
// @match        https://voat.co/*
// @grant        none
// ==/UserScript==

//"constants"
var highlighted_style = "thick solid #0000FF"
var move_down = 74 //j
var move_up = 75 //k
var up_voat = 65 //a
var down_voat = 90 //z
var expand = 88 //x
//TODO
var comments = 67 //c
var save = 83 //s

//Global vars
var currently_on = 0;
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

function openCurrentSubmission(){
   var evt = document.createEvent ("HTMLEvents");
   evt.initEvent ("click", true, true);
   submissions[currently_on].getElementsByClassName('expando-button')[0].dispatchEvent(evt);
}

function upVoatCurrentSubmission(){
   var evt = document.createEvent ("HTMLEvents");
   evt.initEvent ("click", true, true);
   submissions[currently_on].getElementsByClassName('arrow-upvote login-require')[0].dispatchEvent(evt);
}

function upVoatCurrentSubmission(){
   var evt = document.createEvent ("HTMLEvents");
   evt.initEvent ("click", true, true);
   submissions[currently_on].getElementsByClassName('arrow-downvote login-required')[0].dispatchEvent(evt);
}

document.addEventListener('keydown', function(event) {

    if(event.keyCode == move_down) {
        moveDown();
    } else if(event.keyCode == move_up) {
        moveUp();
    } else if(event.keyCode == expand) {
        openCurrentSubmission();
    }// else if(event.keyCode == up_voat) {
    //    upVoatCurrentSubmission();
    //} else if(event.keyCode == down_voat) {
    //    downVoatCurrentSubmission();
    //} else if(event.keyCode == comments) {
    //   openCurrentComments();
    //} else if(event.keyCode == save) {
    //    saveCurrentSubmission();
    //}
    
    
});