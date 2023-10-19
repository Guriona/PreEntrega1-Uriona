import "./style.css"
import { CartWidget } from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <h2>MyNewShirt</h2>
            </div>
            <div>
                <ul className="list-items">
                    <li>
                        <button className="list-button">Clasicas</button>
                    </li>
                    <li>
                        <button className="list-button">Personalizadas</button>
                    </li>
                    <li>
                        <button className="list-button">Ofertas</button>
                    </li>
                    <CartWidget />
                </ul>
            </div>
            
        </div>
    )
};

export default Navbar;
