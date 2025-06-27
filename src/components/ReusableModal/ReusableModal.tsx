import Modal from "react-modal";
import styled from "styled-components";
import { Button } from "..";
import type React from "react";

const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;

interface Props {
    state: boolean;
    closeModal: () => void;
    icon: React.JSX.Element;
    parentMethod: () => void;
    text: {
        title: string;
        subtitle: string;
        buttonLabel: string;
    };
}
export const ReusableModal = ({
    state,
    icon,
    closeModal,
    parentMethod,
    text,
}: Props) => {
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

            maxWidth: "400px",
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
            {icon}
            <div>
                <h2>{text.title}</h2>
                <p>{text.subtitle}</p>
            </div>
            <Controls>
                <Button parentMethod={closeModal}>cancelar</Button>
                <Button variant='destructive' parentMethod={parentMethod}>
                    {text.buttonLabel}
                </Button>
            </Controls>
        </Modal>
    );
};
