import { Link } from "react-router-dom";
import { Button } from "../../index";
import { UseCart } from "../../../context/CartContext";
import { ShoppingCart, User2 } from "lucide-react";
interface Prop {
    className: string;
    variant: "header" | "footer";
    menuToggle?: (bool: boolean) => void;
}

export const NavBar = ({ variant, className, menuToggle }: Prop) => {
    const { cartContent } = UseCart();

    return (
        <nav className={className}>
            {variant == "footer" && <span className='logo'>Libri.</span>}

            <ul>
                <li>
                    <Link
                        to='/'
                        className='hover'
                        onClick={() => (menuToggle ? menuToggle(false) : null)}
                    >
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Button
                        to='/dashboard'
                        parentMethod={() =>
                            menuToggle ? menuToggle(false) : null
                        }
                    >
                        <User2 />
                    </Button>
                </li>
                <li>
                    <Button
                        to='/carrito'
                        parentMethod={() =>
                            menuToggle ? menuToggle(false) : null
                        }
                    >
                        <ShoppingCart />

                        {cartContent.length}
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
