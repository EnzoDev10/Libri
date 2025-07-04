import Modal from "react-modal";

import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    state: boolean;
    closeModal: () => void;
}
export const ReusableModal = ({ state, closeModal, children }: Props) => {
    Modal.setAppElement("#root");

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            display: "flex",

            flexDirection: "column" as const,
            gap: "25px",

            maxWidth: "350px",
            minWidth: "300px",
            backgroundColor: "var(--general-bg)",
            opacity: "1",
            borderRadius: "var(--radius-small)",
            border: "1px solid lightblue",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
    };

    return (
        <Modal
            isOpen={state}
            onRequestClose={closeModal}
            contentLabel='Modal'
            style={customStyles}
            closeTimeoutMS={400}
        >
            {children}
        </Modal>
    );
};
