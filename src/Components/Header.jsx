 /**
 * Component for header with navigation.
 *
 * @component
 */

function Header() {
    return (<header className="header">
        <img src={`${process.env.PUBLIC_URL}/pictures/logo.png`} alt="SportSee" />
        <nav>
            <a href="/#">Accueil</a>
            <a href="/#">Profil</a>
            <a href="/#">Réglage</a>
            <a href="/#">Communauté</a>
        </nav>
  </header>)
}

export default Header