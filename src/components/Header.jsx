
import Logo from "../assets/earth.png"
export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <p>my travel journal.</p>
        </header>
    )
}