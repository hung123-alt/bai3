/* Name this external file gallery.js */

/**
 * Function to update the main display when hovering over a preview image
 * @param {HTMLElement} previewPic - The image element being hovered over
 */
function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     
     2) Change the text of the div with the id = "image" 
     to the alt text of the preview image 
  */
  
  // Step 1: Log to console to check if event is triggering
  console.log("upDate function called!");
  
  // Step 2: Log information about the previewPic
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);
  
  // Step 3: Get the element with id "image"
  const imageDiv = document.getElementById('image');
  
  // Step 4: Change the text to the alt text of the preview image
  imageDiv.innerHTML = previewPic.alt;
  
  // Step 5: Change the background image to the source of the preview image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  
  // Alternative way using template literals (modern JavaScript):
  // imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  
  console.log("Updated background image to:", previewPic.src);
}

/**
 * Function to undo changes when mouse leaves the preview image
 */
function unDo() {
  /* In this function you should 
     1) Update the url for the background image of the div with the id = "image" 
     back to the original-image. You can use the css code to see what that original URL was
     
     2) Change the text of the div with the id = "image" 
     back to the original text. You can use the html code to see what that original text was
  */
  
  // Log to console to check if event is triggering
  console.log("unDo function called!");
  
  // Get the element with id "image"
  const imageDiv = document.getElementById('image');
  
  // Reset the background image to empty (original state from CSS)
  imageDiv.style.backgroundImage = "url('')";
  
  // Reset the text to the original text
  imageDiv.innerHTML = "Hover over an image below to display here.";
  
  console.log("Reset to original state");
}