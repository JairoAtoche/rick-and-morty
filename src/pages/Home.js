import getData from '@utils/getData'

const Home = async () => {
  //Esperamos q getData retorne los datos y se guarden en la const
  const characters = await getData();

  const view = /*html*/`
    <div class='Characters'>
    <!-- iteramos el resultado para crear un bloque de codigo por cada personaje de la API, luego usamos join para crear un solo string -->
    ${characters.results.map((character)=>`
      <article class='Character-item'>
        <a href='#/${character.id}'>
          <img src='${character.image}' alt='${character.name}'>
          <h2>${character.name}</h2>
        </a>
      </article>
    `).join('')}
    </div>
  `;
  return view;
}

export default Home;