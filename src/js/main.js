const images = document.querySelectorAll('.card-img-top');

images.forEach((image) => {
    image.addEventListener('mouseover', function () {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseleave', function () {
        image.style.transform = 'scale(1)'
    });
});

const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.addEventListener('mouseover', function () {
      button.style.transform = 'scale(1.2)';
      button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', function () {
      button.style.transform = 'scale(1)';
    });
  });



const topButton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
topButton.addEventListener("click", topFunction);