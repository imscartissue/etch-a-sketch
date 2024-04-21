// reference to big container
const bigContainer = document.querySelector("#big-container");
const size = 32;

// IMPORTANT: number of squares
// let numberOfSquares = 16;

// setting the big container's height
// bigContainer.setAttribute("style", `height: ${window.innerHeight - 15}px`);

function update(numberOfSquares = 16) {

    if (document.querySelector("#container") != undefined) {
        let element = document.querySelector("#container");
        element.parentNode.removeChild(element);
    }

    // creating the mega container
    const container = document.createElement("div");
    container.id = "container";
    container.setAttribute("style", `width: ${512}px; height: ${512}px;`);

    // an array to hold 16 half containers
    const halfContainers = new Array();

    // 16 divs created and kept inside the halfContainers array
    for (let i = 0; i < numberOfSquares; i++) {
        const halfContainer = document.createElement("div");
        halfContainer.id = "half-container";
        halfContainer.setAttribute("style", `width: ${512}px; height: ${512 / numberOfSquares}px;`);
        halfContainers.push(halfContainer);
    }

    // appending the 16 half containers into the mega container
    for (let i = 0; i < halfContainers.length; i++) {
        const halfContainer = halfContainers[i];
        container.appendChild(halfContainer);
    }

    // an array to hold 16 quarter containers
    const quarterContainers = new Array();

    // 16 divs created and kept inside the quarterContainers array
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const quarterContainer = document.createElement("div");
        quarterContainer.id = "quarter-container";
        quarterContainer.setAttribute("style", `width: ${512 / numberOfSquares}px; height: ${512 / numberOfSquares}px;`);
        quarterContainers.push(quarterContainer);
    }

    let counter = 0;

    // appending the 16 quarter containers into each halfContainer
    for (let i = 0; i < halfContainers.length; i++) {
        for (let j = 0; j < halfContainers.length; j++) {
            halfContainers[i].append(quarterContainers[counter]);
            counter++;
        }
    }

    // hover event
    bigContainer.addEventListener('mouseover', (event) => {
        if (event.target.matches('#quarter-container')) {
            event.target.style.backgroundColor = '#4f4f4f';
        }
    });
    
    bigContainer.addEventListener('mouseout', (event) => {
        if (event.target.matches('#quarter-container')) {
            event.target.style.backgroundColor = '';
        }
    });

    bigContainer.append(container);
}

update(16);

// refernce to the button
const button = document.querySelector("button");

// button event
button.addEventListener('click', () => {
    const grid = prompt("Enter the number of squares");
    numberOfSquares = parseInt(grid);
    update(numberOfSquares);
});