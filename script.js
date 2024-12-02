document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL actual
    const currentPage = window.location.pathname;

    // Seleccionar los divs del menú
    const inicio = document.getElementById("inicio");
    const nosotros = document.getElementById("nosotros");
    const productos = document.getElementById("productos");
    const contacto = document.getElementById("contacto");

    // Comparar la URL y agregar la clase 'active' al div correcto
    if (currentPage.includes("index.html")) {
        inicio.classList.add("active");
    } else if (currentPage.includes("nosotros.html")) {
        nosotros.classList.add("active");
    } else if (currentPage.includes("productos.html")) {
        productos.classList.add("active");
    } else if (currentPage.includes("contacto.html")) {
        contacto.classList.add("active");
    }
});

let swiper;
const activateSwiper = () => {
    if (window.innerWidth <= 768 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Habilitar bucle
        autoplay: {
            delay: 5000, // Tiempo entre transiciones
            
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
window.addEventListener('resize',activateSwiper);
activateSwiper();

// Selecciona todos los botones de info
const infoButtons = document.querySelectorAll('.info-btn');

// Añade un evento de clic a cada botón
infoButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Selecciona el overlay asociado al producto (el div padre)
    const overlay = this.closest('.producto').querySelector('.overlay');
        
    
    // Alterna la clase 'show' para mostrar/ocultar el overlay
    overlay.classList.toggle('show');
  });
});

document.addEventListener('click', function(event) {
    const overlay = document.querySelector('.overlay.show');
    const clickedInside = event.target.closest('.producto');

    if (overlay && !clickedInside) {
        overlay.classList.remove('show'); // Cierra el overlay
    }
});




document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

const btn = document.getElementById('button');
btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_p4fdnrh';


   const originalText = btn.innerHTML; // Guardamos el texto original del botón

   // Agregamos el spinner y el texto "Enviando..."
btn.innerHTML = '<div class="spinner"></div> Enviando...';
   btn.disabled = true; // Desactivamos el botón para evitar múltiples envíos

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
      btn.innerHTML = originalText; // Restauramos el texto original del botón
      btn.disabled = false; // Reactivamos el botón


    Swal.fire({
        title: "Formulario enviado!",
        icon: "success",
        showConfirmButton: true, // Mostrar botón para confirmar
        allowOutsideClick: false, // Evita cerrar el alert haciendo clic fuera
        allowEscapeKey: false // Evita cerrar con la tecla Escape
    }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario cierra el modal, recargamos la página
        location.reload();
        }
    });
    
    }, (err) => {
        btn.innerHTML = originalText; // Restauramos el texto original del botón
        btn.disabled = false; // Reactivamos el botón
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});