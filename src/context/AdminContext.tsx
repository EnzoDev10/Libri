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
import styled from "styled-components";
import { Button } from "../components";

const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;

interface adminProps {
    addProductToDelete: (id: number | undefined) => void;
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
                toast.success("Producto eliminado del catálogo.");
            } else {
                toast.error("No se pudo eliminar el producto.");
            }
        });
    };

    const addProductToDelete = (id: number | undefined) => {
        if (id) {
            setProductIdToDelete(id);
            openModal();
        } else {
            toast.error(
                "El producto que intentas eliminar no tiene un identificador valido(error en mockapi)."
            );
        }
    };

    return (
        <AdminContext.Provider
            value={{ closeModal, openModal, addProductToDelete }}
        >
            <ReusableModal state={modalState} closeModal={closeModal}>
                <Trash2 />
                <div>
                    <h2>Estas seguro de querer borrar este producto?</h2>
                    <p>Esta acción no se puede deshacer</p>
                </div>
                <Controls>
                    <Button parentMethod={closeModal}>cancelar</Button>
                    <Button
                        variant='destructive'
                        parentMethod={() => deleteProduct(productIdToDelete)}
                    >
                        eliminar
                    </Button>
                </Controls>
            </ReusableModal>

            {children}
        </AdminContext.Provider>
    );
}
