const slogan = "Molisana, pasta sana!"

export default function AppHeader() {
    return (
        <header>
            <figure>
                <img src="/logo.png" alt="Logo" />
                <p>{slogan}</p>
            </figure>
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
        </header>
    )
}