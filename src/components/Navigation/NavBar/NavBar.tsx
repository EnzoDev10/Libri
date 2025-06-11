import { Link } from "react-router-dom";
import { Button } from "../../index";
import { UseCart } from "../../../context/CartContext";
import { ShoppingCart } from "lucide-react";
interface Prop {
    className: string;
    variant: "header" | "footer";
}

export const NavBar = ({ variant, className }: Prop) => {
    const { cartContent } = UseCart();

    return (
        <nav className={className}>
            {variant == "footer" && <span className='logo'>Libri.</span>}

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
                        <Button className='border' parentMethod={() => {}}>
                            <ShoppingCart />

                            {cartContent.length}
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
