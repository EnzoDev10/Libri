import { Link } from "react-router-dom";
import { Button } from "../../index";
import { UseCart } from "../../../context/CartContext";
import { ShoppingCart, User2 } from "lucide-react";
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
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Button to='/dashboard'>
                        <User2 />
                    </Button>
                </li>
                <li>
                    <Button to='/carrito'>
                        <ShoppingCart />

                        {cartContent.length}
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
