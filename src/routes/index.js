// Importamos los elementos que se usarán en las rutas
import Header from '@templates/Header';
import Home from '@pages/Home';
import Character from '@pages/Character';
import Error404 from '@pages/Error404';
import getHash from '@utils/getHash';
import resolveRoutes from '@utils/resolveRoutes';

// Creamos una const routes que almacenara un objeto con todas las rutas
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
}
// Manejador de las rutas
//Se utiliza async await debido a q realizará una petición para obtener los archivos
const router = async() => {
  //creamos una const que se igualará al header del html
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  // Hacemos render del elemento header asignandolo a la const header del html principal
  header.innerHTML = await Header()

  // Agregamos la func getHash al hash
  let hash = getHash();

  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  
  content.innerHTML = await render();
}

export default router;