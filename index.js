const rangeInput = document.querySelector(".pad-range>input");
const rangeValue = document.getElementById("rangeValue");
const containerGrid = document.querySelector(".pad-container");
const clearButton = document.querySelector(".clear");
const darkModeCheckbox = document.getElementById("darkMode");

/**
 * Generates a grid of div elements based on the given number.
 *
 * @param {number} num - The number used to determine the size of the grid.
 * @return {undefined} This function does not return a value.
 */
const generateDivs = (num) => {
  if (num >= 100) return;
  for (let i = 0; i < num * num; i++) {
    const divGrid = document.createElement("div");
    divGrid.className = `grid-item`;
    divGrid.style.flexBasis = `${100 / num}%`;
    containerGrid.appendChild(divGrid);
  }

  const divGrids = document.querySelectorAll(".grid-item");
  let isMouseActive = false;

  containerGrid.addEventListener("mousedown", () => {
    isMouseActive = !isMouseActive;
    if (isMouseActive) {
      divGrids.forEach((divGrid) => {
        divGrid.addEventListener("mouseover", handleMouseOver);
      });
    } else {
      divGrids.forEach((divGrid) => {
        divGrid.removeEventListener("mouseover", handleMouseOver);
      });
    }
  });

  /**
   * Handles the mouse over event.
   *
   * @param {Event} event - The mouse over event object.
   */
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "yellow";
  };
};

/**
 * The function removes all child div elements from the containerGrid element.
 */
const removeDivs = () => {
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }
};

/**
 * The function `clearCanvas` clears the background color of all elements with the class name
 * 'grid-item' when a click event occurs.
 */
const clearCanvas = () => {
  const divGrids = document.querySelectorAll(".grid-item");
  this.addEventListener("click", () => {
    divGrids.forEach((divGrid) => {
      divGrid.style.backgroundColor = "";
    });
  });
};

/* The code is adding an event listener to the `rangeInput` element for the "input" event. When the
user changes the value of the range input, the function inside the event listener is executed. */
rangeInput.addEventListener("input", () => {
  let rangeInputValue = rangeInput.value;
  rangeValue.textContent = "Value: " + rangeInputValue;

  removeDivs();
  generateDivs(rangeInputValue);
});

window.onload = () => {
  generateDivs(16);
};
