import Logo from "./Logo";

export default function AppHeader() {

    const links = [
        "Nome",
        "Prodotti",
        "Chi Siamo",
        "Contatti",
    ]

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Prodotti</a></li>
                    <li><a href="#">Chi Siamo</a></li>
                    <li><a href="#">Contatti</a></li>
                </ul>
            </nav>
        </header>
    )
}