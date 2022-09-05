import '@styles/styles.css'
// Importamos las rutas de la carpeta routes/
import router from '@routes';

// DOMContentLoaded solo espera que el contenido del DOM este cargado para mostrarlo
// Mientras que, 'load' espera a q las imagenes, estilos, etc esten completamente cargados para recien mostrarlo
window.addEventListener('DOMContentLoaded', router);
// Va renderizar de nuevo cuando el hash cambie
window.addEventListener('hashchange', router)