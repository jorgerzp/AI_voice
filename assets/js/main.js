// Esta función ajusta el scroll para que la cabecera fija no tape el contenido
function alturaCabecera(){
  const header = document.querySelector('.header-fijo');
  return header ? header.offsetHeight + 8 : 72; // 8px extra de margen
}

// Smooth scroll manual para compensar la cabecera fija
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');

    // Evito procesar enlaces que no apuntan a secciones
    if(!href.startsWith('#') || href === '#') return;

    const destino = document.querySelector(href);
    if(!destino) return;

    e.preventDefault(); // Evito salto brusco

    const y = destino.getBoundingClientRect().top + window.pageYOffset - alturaCabecera();

    window.scrollTo({ top: y, behavior: 'smooth' });

    // Si el menú responsive está abierto, lo cierro después del click
    const collapseEl = document.querySelector('.navbar-collapse.show');
    if(collapseEl){
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if(bsCollapse) bsCollapse.hide();
    }
  });
});

// Simulación de envío en formulario
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias, tu mensaje ha sido recibido.');
    form.reset();
  });
}
