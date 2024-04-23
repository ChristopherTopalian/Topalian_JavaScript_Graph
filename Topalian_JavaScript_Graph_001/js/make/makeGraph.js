// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeGraph.js

function makeGraph(whichArray)
{
    let xPos = 15;
    let yPos = 195;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let dataPoint = ce("div");
        dataPoint.id = 'dataPoint' + x;
        dataPoint.className = "dataPoint";
        dataPoint.style.position = 'absolute';
        dataPoint.style.left = xPos + "px";
        dataPoint.style.top = yPos - whichArray[x] + "px";
        dataPoint.style.height = whichArray[x] + "px";
        dataPoint.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);

            ge('temperature' + x).style.color = 'rgb(0, 255, 255)';

            ge('dataPoint' + x).style.borderColor = 'rgb(0, 255, 255)';

            ge('infoContainer').value = whichArray[x];

            ge('infoContainer').style.borderColor = 'rgb(0, 255, 255)';

            ge('infoContainer').style.color = 'rgb(0, 255, 255)';
        };

        dataPoint.onmouseleave = function()
        {
            ge('temperature' + x).style.color = 'rgb(255, 255, 255)';

            ge('dataPoint' + x).style.borderColor = 'rgb(255, 255, 255)';

            ge('infoContainer').style.borderColor = 'rgb(255, 255, 255)';

            ge('infoContainer').style.color = 'rgb(255, 255, 255)';
        };

        dataPoint.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('temperature' + x).style.color = 'rgb(255, 0, 255)';

            ge('dataPoint' + x).style.borderColor = 'rgb(255, 0, 255)';

            ge('infoContainer').style.borderColor = 'rgb(255, 0, 255)';

            ge('infoContainer').style.color = 'rgb(255, 0, 255)';
        };
        mainDiv.append(dataPoint);

        //-//

        let temperatureText = ce("div");
        temperatureText.id = 'temperature' + x;
        temperatureText.className = "temperatureText";
        temperatureText.textContent = whichArray[x];
        dataPoint.append(temperatureText);

        //-//

        let yearLabel = document.createElement("div");
        yearLabel.className = "yearLabel";
        yearLabel.textContent = 1990 + x;
        dataPoint.append(yearLabel);

        //-//

        xPos += 50;
    }

    //-//

    let infoContainer = ce('textarea');
    infoContainer.id = 'infoContainer';
    mainDiv.insertAdjacentElement("afterend", infoContainer);
}

