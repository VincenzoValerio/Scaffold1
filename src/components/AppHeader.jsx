import Logo from "./Logo";

export default function AppHeader() {

    const LinksLabels = [
        "Home",
        "Prodotti",
        "Chi Siamo",
        "Contatti",
    ]

    const links = LinksLabels.map((elemento, i) => {
        return <li key={i}><a href="#">{elemento}</a></li>
    })

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </header>
    )
}