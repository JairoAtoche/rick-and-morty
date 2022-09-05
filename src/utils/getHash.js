const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
/*
  location.hash -> Permite obtener la url del navegador desde el hash // #/1/
  slice(1) -> Permite eliminar el primer elemento (osea el hash) // /1/
  toLocaleLowerCase() -> Convierte en minuscula todo
  split('/') -> Convierte en un arreglo el string separando cada elemento por el / // ['',1,'']
  [1] -> Para obtener el 2do elemento del array // [1]
*/
export default getHash;
