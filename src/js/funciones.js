document.getElementById('web').addEventListener('click', () => {
    document.getElementById('titulo_stat').textContent = "Experiencia con Programacion web";
    document.getElementById('texto').textContent = "He trabajado en aplicaciones web profesionales utilizando HTML, SCSS y JavaScript como la base de mis paginas web. Para el desarrollo del frontend me especializo en el uso de Angular y React, mientras que para el backend uso principalmente Java.";

});

document.getElementById('python').addEventListener('click', () => {
    document.getElementById('titulo_stat').textContent = "Experiencia con Programacion con Python";
    document.getElementById('texto').textContent = "Con Python trabajo con una filosofia mas enfocada a la investigacion y la automatizacion de tareas. Las tareas mas comunes que realizo son la prediccion de escenarios usando las librerias disponibles de Machine Learning, el analisis y tratado de datos y la resolucion de formulas matematicas repetitivas.";
});

document.getElementById('datos').addEventListener('click', () => {
    document.getElementById('titulo_stat').textContent = "Experiencia con Ciencias de Datos";
    document.getElementById('texto').textContent = "Mis principales herramientas para el analisis de datos son Python y R, aunque tambien tengo experiencia con SQL. Para la visualizacion de datos uso principalmente Matplotlib, Seaborn y Plotly. Ademas, tengo experiencia en la limpieza y preparacion de datos para su analisis, asi como en la interpretacion de resultados y la comunicacion de hallazgos a audiencias no tecnicas.";    
});

document.getElementById('linux').addEventListener('click', () => {
    document.getElementById('titulo_stat').textContent = "Experiencia con Configuracion de servidores Linux";
    document.getElementById('texto').textContent = "He estado en las distribuciones mas usadas de Linux, como Ubuntu, Debian, CentOS, NixOS, Fedora, Arch. He configurado servidores web con Apache y Nginx, servidores de bases de datos con MySQL y PostgreSQL, y servidores de aplicaciones con Tomcat. Ademas, tengo experiencia en la gestion de usuarios, permisos y seguridad en sistemas Linux.";
});

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Inicializar navegación suave
scrollNav();



 
