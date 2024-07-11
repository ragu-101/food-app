import logo from '../assets/logo.jpg'
import Button from '../UI/Button'

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="Logo" />
            <h1>Food App</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button> {/* by leaving empty prop it consider as true */}
        </nav>
    </header>
}