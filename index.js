const rangeInput = document.querySelector(".pad-range>input");
const rangeValue = document.getElementById("rangeValue");
const containerGrid = document.querySelector('.pad-container');
const clearButton = document.querySelector('.clear');

/**
 * The function generates a grid of div elements with a specified number of rows and columns.
 * @param num - The parameter "num" represents the number of rows and columns in the grid.
 * @returns If the input `num` is greater than or equal to 100, the function will return nothing
 * (undefined). Otherwise, it will generate a grid of div elements and append them to a container
 * element.
 */
const generateDivs = (num) => {
    if (num >= 100) return;
    for (let i = 0; i < num * num; i++) {
        const divGrid = document.createElement('div');
        divGrid.className = `grid-item`;
        divGrid.style.flexBasis = `${100 / num}%`;
        containerGrid.appendChild(divGrid);
    }

    const divGrids = document.querySelectorAll('.grid-item');

    divGrids.forEach((divGrid) => {
        divGrid.addEventListener('mouseover', () => {
            divGrid.style.backgroundColor = 'blue';
        })
    
        divGrid.addEventListener('click', () => {
            divGrid.style.backgroundColor = 'green';
        })        
    })
}

/**
 * The function removes all child div elements from the containerGrid element.
 */
const removeDivs = () => {
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    }
}

/**
 * The function `clearCanvas` clears the background color of all elements with the class name
 * 'grid-item' when a click event occurs.
 */
const clearCanvas = () => {
    const divGrids = document.querySelectorAll('.grid-item');
    this.addEventListener('click', () => {
        divGrids.forEach((divGrid) => {
            divGrid.style.backgroundColor = '';
        })
    })
}

/* The code is adding an event listener to the `rangeInput` element for the "input" event. When the
user changes the value of the range input, the function inside the event listener is executed. */
rangeInput.addEventListener("input", () => {
    let rangeInputValue = rangeInput.value;
    rangeValue.textContent = "Value: " + rangeInputValue;

    removeDivs();
    generateDivs(rangeInputValue);
});

generateDivs(16);