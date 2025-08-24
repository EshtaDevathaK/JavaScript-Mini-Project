// Step 1: Select the slider container (the row of slides) //
// Slider Wrapper 
const slider = document.getElementById("slider");

// Step 2: Select all individual slides (each image block)
const slide = document.querySelectorAll(".slide");
// querySelectorAll so it doesn't matter even if it is class="slide"


// Step 3: Select navigation buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Step 4: Keep track of which slide is active (starting with 0 - the first one)
let currentIndex = 0;

/**
 * Step 5: Show the current slide based on index
 * - Moves the slider to the correct position by shifting it left using transform
 */
function showSlide() {
  const slideWidthPercent = 100; // Each slide takes 100% width

  const offset = currentIndex * slideWidthPercent; // ** important Point This currndex value comes from  goToPreviousSlide() or goToNextSlide()

  slider.style.transform = `translateX(-${offset}%)`;
}
//   2. translateX:
//   translateX() is one of the transform functions. It moves an element horizontally along the X-axis (left or right) by the number of pixels or percentage you specify.
// translateX(50%) moves the element to the right by 50% of its width.

// translateX(-50%) moves it to the left by 50% of its width.


// The ${offset} is a JavaScript template literal. In simple terms:
// ${offset} will be replaced with the current value of the offset variable when this line of code runs.






/**
 * Step 6: Go to previous slide
 * - If on first slide, wrap to last
 * - Otherwise, move one step left
 */
function goToPreviousSlide() {
  if (currentIndex === 0) {
    currentIndex = slide.length - 1; // Wrap to last slide
  } else {
    currentIndex -= 1; //the currentIndex will decrease by 1, showing the previous slide.
  }
  showSlide(); // Update the slider view with currentIndex
}


/**
 * Step 7: Go to next slide
 * - If on last slide, wrap to first
 * - Otherwise, move one step right
 */
function goToNextSlide() {
  if (currentIndex === slide.length - 1) {
    currentIndex = 0; // Wrap to first slide
  } else {
    currentIndex += 1;  // increment the currentIndex by 1, moving the slider to the next slide.
  }
  showSlide(); // Update the slider view
}

// Step 8: Add click listeners to navigation buttons
prevButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);




// NEXT
// Key Points:
// If you are on the last slide (currentIndex === slides.length - 1), the if block will wrap around and set the currentIndex to 0, showing the first slide.

// If you're not on the last slide (currentIndex !== slides.length - 1), the else block will increment the currentIndex by 1, moving the slider to the next slide.



// PREVIOUS :
// 1. In goToPreviousSlide():
// if (currentIndex === 0): If you're on the first slide, the currentIndex will wrap around and move to the last slide.

// else: If you're not on the first slide, the currentIndex will decrease by 1, showing the previous slide.





// SLIDE MOVE :
// So, GoToPreviousSlideFunction is a function that does two functionalities, if else case, if condition is, if condition is, 
// GoToPreviousSlideFunction, okay, if it is in the first slide, wrap it to the last, wrap it to the last slide, basically that's what it says, 
// and then else condition, if it's, whatever its position is, basically decrement it, that's what it says, 
// and then all these functionalities are updated to ShowSlideFunction.



// so the same for go to next slide function if the current index equal to equal to slides.
// length minus 1 so current index is the if the it is the last index so shuffle it to the first index so that's what go to the next slide means 
// so it basically increments next next slide so all these things are updated to show slide function so show slide function does like slide width percent equal to 100 
// and current index into slide width percent into 100 so this current index value is came from the go to previous slide or the go to next slide function








// Why Split the Logic?
// Separation of Concerns:

// showSlide() only handles the visual aspect—moving the slides based on the currentIndex.

// goToPreviousSlide() and goToNextSlide() handle the logic of determining the current slide based on user input. They adjust the currentIndex (either increase or decrease) based on whether the user clicks "Previous" or "Next."

// Navigation Control:

// The goToPreviousSlide() and goToNextSlide() functions help you change the currentIndex to move to the correct slide.

// showSlide() doesn't know whether the user clicked "Next" or "Previous"; it simply moves the slides based on the current index. It doesn't know whether to move forward or backward—that's what the goToPreviousSlide() and goToNextSlide() functions do.


















