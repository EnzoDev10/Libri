import { Link } from "react-router-dom";
import { Button } from "../../index";

import { UseCart } from "../../../context/CartContext";
interface Prop {
    className: string;
    variant: "header" | "footer";
}

export const NavBar = ({ variant, className }: Prop) => {
    const { cartContent } = UseCart();

    if (variant == "header") {
        return (
            <nav className={className}>
                <ul>
                    <li>
                        <Link to='/' className='hover'>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className='hover'>
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link to='/carrito'>
                            <Button
                                className='border'
                                Icon='cart'
                                parentMethod={() => {}}
                            >
                                {cartContent.length}
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className={className}>
                <span className='logo'>Libri.</span>
                <ul>
                    <li>
                        <Link to='/' className='hover'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='hover'>
                            Contacto
                        </Link>
                    </li>
                </ul>
                <Link to='/carrito' className='hover'>
                    <Button className='border' Icon='cart'>
                        {cartContent.length}
                    </Button>
                </Link>
            </nav>
        );
    }
};
