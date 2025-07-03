/*
document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    let inputImage = document.querySelector('.image')
    let inputName=document.querySelector('.name').value
    let inputEmail = document.querySelector('.email').value
    let inputLink = document.querySelector('.link').value
    let image= inputImage.files[0]
    if(image){
      const reader = new FileReader()
      reader.onload= ()=>{
        const imageData =reader.result;
        let object={
          image:imageData,
          name:inputName,
          email:inputEmail,
          link:inputLink
        }
        
      let cart =  []
      cart.push(object)
      localStorage.setItem('save', JSON.stringify(cart))
      alert(cart)
         window.location.href="Generate.html"
      }
      
      reader.readAsDataURL(image)
      
    }
    

  })

//selects one
    const uploadBox = document.querySelector('.upload-box');
    const fileInput = document.querySelector('.image');
    const previewImage = document.querySelector('.preview-image');
    const previewText = document.querySelector('.preview-text');

    uploadBox.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          previewImage.src = reader.result;
          previewImage.style.display = 'block';
          previewText.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });

    // Handle form submission
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();

      let inputImage = document.querySelector('.image');
      let inputName = document.querySelector('.name').value;
      let inputEmail = document.querySelector('.email').value;
      let inputLink = document.querySelector('.link').value;
      let image = inputImage.files[0];

      if (image) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageData = reader.result;
          let object = {
            image: imageData,
            name: inputName,
            email: inputEmail,
            link: inputLink
          };

          let cart = [];
          cart.push(object);
          localStorage.setItem('save', JSON.stringify(cart));

          alert("Ticket info saved!");
          window.location.href = "Generate.html";
        };

        reader.readAsDataURL(image);
      } else {
        alert("Please upload an image.");
      }
    });
    */
   /*
   
    let uploadedImageData;

const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('.image');
const previewImage = document.querySelector('.preview-image');
const previewText = document.querySelector('.preview-text');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result; // Store the uploaded image data
      previewImage.src = reader.result;
      previewImage.style.display = 'block';
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


let uploadedImageData;

const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('.image');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      console.log('Image uploaded!');
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

const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('.image');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      document.querySelector('.upload-content').innerHTML = `<img src="${uploadedImageData}" style="max-width:100px; border-radius: 5px;">`;
    };
    reader.readAsDataURL(file);
  }
});



let uploadedImageData;

const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('.image');
const previewText = document.querySelector('.preview-text');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      previewText.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Image Uploaded';
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

*/



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