// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeGraphTitle.js

function makeGraphTitle()
{
    let graphTitle = ce('div');
    graphTitle.id = 'graphTitle';
    graphTitle.innerHTML = 'Graph Title';
    graphTitle.style.marginBottom = '7px';
    graphTitle.style.fontSize = '30px';
    graphTitle.style.fontWeight = 'bold';
    graphTitle.style.color = 'rgb(255, 255, 255)';
    graphTitle.style.textAlign = 'center';
    ge('mainDiv').before(graphTitle);
}

