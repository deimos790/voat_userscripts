// ==UserScript==
// @name         VoatImageOpener
// @namespace    http://mehranghamaty.com/
// @version      0.2
// @description  Open all images/text in voat.co
// @author       Mehran Ghamaty
// @match        https://voat.co/*
// @grant        none
// ==/UserScript==

var currently_expanded = false

//exapands the links
function expandLinks(){
    var evt = document.createEvent ("HTMLEvents");
    evt.initEvent ("click", true, true);
    var to_open = document.getElementsByClassName('expando-button selftext collapsed');
    
    while(to_open[0]){
        to_open[0].dispatchEvent (evt);
    }
}


//hides all the links
function hideLinks(){
    var evt = document.createEvent ("HTMLEvents");
    evt.initEvent ("click", true, true);
    var to_close = document.getElementsByClassName('expando-button selftext expanded');
    
    while(to_close[0]){
        to_close[0].dispatchEvent (evt);
    }
}

//handles the click
function viewHideLinks(){
    //pictures are expanded (show View button)
    if(currently_expanded){
        p.nodeValue="View Images";
        hideLinks();
    //pictures are hidden (show Hide button)
    } else {
        p.nodeValue="Hide Images";
        expandLinks();
    }
    currently_expanded = !(currently_expanded);
    
}

//gets the list at the top so we can add stuff to it
var ul = document.getElementById("header-banner").getElementsByTagName('ul')[0];

//Create the list items we want to add
var li = document.createElement("li");
li.setAttribute("class", "disabled");

//Create the links to put into the list items and give them attributes and a click listener
var a = document.createElement('a');
a.setAttribute('id', 'view-images');
a.addEventListener ("click", viewHideLinks, false);

//Text node to go inside the 
var p = document.createTextNode("View Images");

//Adds the p tag into the a tag into the li tag into the ul tag
a.appendChild(p);
li.appendChild(a);
ul.appendChild(li);


