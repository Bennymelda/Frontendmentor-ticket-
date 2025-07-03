

let uploadedImageData;

const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('.image');
const previewText = document.querySelector('.preview-text');
const uploadedImage = document.querySelector('.uploaded-image');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      uploadedImage.src = uploadedImageData;
      uploadedImage.style.display = 'block';
      previewText.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});

// Handle form submission
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let inputName = document.querySelector('.name').value;
  let inputEmail = document.querySelector('.email').value;
  let inputLink = document.querySelector('.link').value;

  if (uploadedImageData) {
    let object = {
      image: uploadedImageData,
      name: inputName,
      email: inputEmail,
      link: inputLink
    };
    let cart = [];
    cart.push(object);
    localStorage.setItem('save', JSON.stringify(cart));
    alert("Ticket info saved!");
    window.location.href = "Generate.html";
  } else {
    alert("Please upload an image.");
  }
});
