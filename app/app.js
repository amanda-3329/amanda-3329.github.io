// Accordion menu

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// code from w3 schools to learn how menus work


// -----MODAL IMAGE JS CODE below---------------------
// ---obtained from https://www.w3schools.com/howto/howto_css_modal_images.asp
// and Stack Overflow for multiple images: https://stackoverflow.com/questions/41275958/modal-image-galleries-multiple-images

// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = $('.project-pic');
let modalImg = $("#img01");
let captionText = document.getElementById("caption");
$('.project-pic').click(function(){
    modal.style.display = "block";
    let newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}