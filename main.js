const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

/* SHOW */
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

/* HIDDEN */
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/* ======= ACTIVE AND REMOVE MENU ======= */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


//typing text

const typingText = document.querySelector(".typing-text");
const texts = ["front end developer", "driver", "3D designer", "graphic designer"];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
  if (isDeleting) {
    typingText.textContent = texts[index].substring(0, textIndex--);
    if (textIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      textIndex = 0;
    }
  } else {
    typingText.textContent = texts[index].substring(0, textIndex++);
    if (textIndex > texts[index].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}

type();

//text gelombang

window.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('wave-text');
  let text = textElement.textContent.toLowerCase(); // Convert all to lowercase first
  
  // Capitalize the first letter of each word
  text = text.replace(/\b\w/g, char => char.toUpperCase());
  
  textElement.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
      const div = document.createElement('div');
      div.textContent = text[i];
      div.style.setProperty('--i', i);

      // Adjust for spaces to maintain the wave effect
      if (text[i] === ' ') {
          div.style.width = '15px'; // Adjust the width of the space as needed
      }

      textElement.appendChild(div);
  }
});


//api services

document.addEventListener('DOMContentLoaded', function() {
  const phoneNumber = '6283895775553'; // Ganti dengan nomor WhatsApp Anda
  
  // Menangani klik pada setiap tombol
  document.getElementById('contact-web').addEventListener('click', function() {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello%20I%27m%20interested%20in%20your%20Web%20Development%20services.`;
  });
  
  document.getElementById('contact-3d').addEventListener('click', function() {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello%20I%27m%20interested%20in%20your%203D%20Design%20services.`;
  });
  
  document.getElementById('contact-graphic').addEventListener('click', function() {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello%20I%27m%20interested%20in%20your%20Graphic%20Design%20services.`;
  });
  
  document.getElementById('contact-driver').addEventListener('click', function() {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello%20I%27m%20interested%20in%20your%20Driver%20services.`;
  });
});




//contact

function sendToWhatsApp(event) {
  event.preventDefault(); // Mencegah form dari submit default

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "083895775553"; // Ganti dengan nomor WhatsApp Anda
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" 
                    + "Name: " + name + "%0A" 
                    + "Email: " + email + "%0A" 
                    + "Message: " + message;

  window.open(whatsappURL, "_blank"); // Membuka URL WhatsApp di tab baru
}










//portfolio
document.getElementById("project1-button").onclick = function() {
  window.open('https://wa.me/6283895775553?text=Hello,%20I%20am%20interested%20in%20the%20graphic%20design%20you%20created.');
};


document.getElementById("project2-button").onclick = function() {
  window.open('https://wa.me/6283895775553?text=Hello,%20I%20am%20interested%20in%20the%203D%20design%20you%20created.');
};


