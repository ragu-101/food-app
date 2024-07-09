import logo from '../assets/logo.jpg'

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="Logo" />
            <h1>Food App</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
    </header>
}