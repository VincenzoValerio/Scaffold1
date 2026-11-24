import Logo from "./Logo";

export default function AppHeader() {

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <a href="#">Prodotti</a>
                        <a href="#">Chi Siamo</a>
                        <a href="#">Contatti</a>
                    </li>
                </ul>
            </nav>
        </header >
    )
}