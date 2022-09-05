const Header = () => {
  const view = /*html*/`
    <header class="header">
      <div class="header__logo">
        <h1>
          <a href="/">
            Rick & Morty
          </a>
        </h1>
      </div>
      <nav class="header__nav">
        <a href="#/about/">About</a>
      </nav>
    </header>
  `;
  return view;
}

export default Header;
