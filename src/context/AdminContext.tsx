import {
    createContext,
    useContext,
    useState,
    type PropsWithChildren,
} from "react";

import toast from "react-hot-toast";
import { UseProducts } from "./productsContext";
import { ReusableModal } from "../components/ReusableModal/ReusableModal";
import { Trash2 } from "lucide-react";

interface adminProps {
    addProductToDelete: (id: number) => void;
    closeModal: () => void;
    openModal: () => void;
}

const AdminContext = createContext<adminProps | null>(null);

export const UseAdminContext = () => {
    const content = useContext(AdminContext);

    if (!content) {
        throw new Error(
            "UseAdminContext has to be used within <AdminContext.Provider>"
        );
    }

    return content;
};

export function AdminProvider({ children }: PropsWithChildren) {
    const [modalState, setModalState] = useState(false);
    // se le da un numero muy alto para que no se elimine por accidente un producto real
    const [productIdToDelete, setProductIdToDelete] = useState(9999);

    const { setNeedToFetch } = UseProducts();

    function openModal() {
        setModalState(true);
    }

    function closeModal() {
        setModalState(false);
    }

    const deleteProduct = (id: number) => {
        fetch(
            `https://6850a235e7c42cfd17992d31.mockapi.io/libri-api/productos/${id}`,
            {
                method: "DELETE",
            }
        ).then((res) => {
            if (res.ok) {
                setNeedToFetch(true);
                closeModal();
                toast.success("Producto eliminado del catalogo.");
            } else {
                toast.error("No se pudo eliminar el producto.");
            }
        });
    };

    const addProductToDelete = (id: number) => {
        setProductIdToDelete(id);
        openModal();
    };

    return (
        <AdminContext.Provider
            value={{ closeModal, openModal, addProductToDelete }}
        >
            <ReusableModal
                state={modalState}
                closeModal={closeModal}
                icon={<Trash2 />}
                text={{
                    title: "Estas seguro de querer borrar este producto?",
                    subtitle: "Esta acción no se puede deshacer",
                    buttonLabel: "eliminar",
                }}
                parentMethod={() => deleteProduct(productIdToDelete)}
            />

            {children}
        </AdminContext.Provider>
    );
}
