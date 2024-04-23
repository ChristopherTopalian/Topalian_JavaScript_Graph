// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInfoDiv.js

function makeInfoDiv()
{
    let infoContainer = ce('textarea');
    infoContainer.id = 'infoContainer';
    infoContainer.style.position = 'relative';
    infoContainer.style.margin = 'auto';
    ge('mainDiv').after(infoContainer);
}

