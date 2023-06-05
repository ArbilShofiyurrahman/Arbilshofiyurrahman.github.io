// CSS classes
const zoomedClass = 'zoomed';
const popupClass = 'popup-container';
const popupImageClass = 'popup-image';
const closeBtnClass = 'close-button';
const prevBtnClass = 'prev-button';
const nextBtnClass = 'next-button';

// Image data
const galleryImages = [
  'Asset/foto/cf.png',
  'Asset/foto/cf1.png',
  'Asset/foto/pc1.jpg',
  'Asset/foto/pc3.jpg',
  'Asset/foto/pc4.jpg',
  'Asset/foto/tk.jpg',
  'Asset/foto/pc5.jpg',
  'Asset/foto/pc6.webp',
  'Asset/foto/pc7.webp',
  'Asset/foto/pc8.jpg',
];



// Show image popup with navigation arrows
function showImagePopup(imgSrc) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add(popupClass);

  const popupImage = document.createElement('img');
  popupImage.classList.add(popupImageClass);
  popupImage.src = imgSrc;
  popupImage.addEventListener('click', function () {
    popupImage.style.width = '700px';
    popupImage.style.height = '500px';
    popupImage.style.cursor = 'zoom-out';
    popupImage.style.position = 'fixed';
    popupImage.style.top = '50%';
    popupImage.style.left = '50%';
    popupImage.style.transform = 'translate(-50%, -50%)';
  });

  const closeButton = document.createElement('span');
  closeButton.classList.add(closeBtnClass);
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', function () {
    popupContainer.remove();
  });

  const prevButton = document.createElement('span');
  prevButton.classList.add(prevBtnClass);
  prevButton.innerHTML = '&#10094;';
  prevButton.addEventListener('click', showPreviousImage);

  const nextButton = document.createElement('span');
  nextButton.classList.add(nextBtnClass);
  nextButton.innerHTML = '&#10095;';
  nextButton.addEventListener('click', showNextImage);

  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(prevButton);
  popupContainer.appendChild(popupImage);
  popupContainer.appendChild(nextButton);

  document.body.appendChild(popupContainer);
}

// Show previous image in the popup
function showPreviousImage() {
  const currentImage = document.querySelector(`.${popupImageClass}`);
  const currentImageSrc = currentImage.getAttribute('src');
  const currentImageIndex = galleryImages.indexOf(currentImageSrc);
  const previousImageIndex =
    currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
  const previousImageSrc = galleryImages[previousImageIndex];
  currentImage.src = previousImageSrc;
}

// Show next image in the popup
function showNextImage() {
  const currentImage = document.querySelector(`.${popupImageClass}`);
  const currentImageSrc = currentImage.getAttribute('src');
  const currentImageIndex = galleryImages.indexOf(currentImageSrc);
  const nextImageIndex =
    currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
  const nextImageSrc = galleryImages[nextImageIndex];
  currentImage.src = nextImageSrc;
}

// Apply zoom-in effect to all images
const galeryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(function (image) {
  addZoomEffect(image);

  // Example usage: show image popup on click
  image.addEventListener('click', function () {
    showImagePopup(image.src);
  });
});
// Zoom-in effect on mouse hover
function addZoomEffect(img) {
    img.addEventListener('mouseover', function () {
      img.style.transform = 'scale(1.5)';
      img.style.transition = 'transform 0.3s ease-in-out';
    });
  
    img.addEventListener('mouseout', function () {
      img.style.transform = 'scale(1)';
    });
  }
  
  
  