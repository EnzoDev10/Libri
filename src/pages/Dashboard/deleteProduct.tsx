import styled from "styled-components";
import { AdminProvider } from "../../context/AdminContext";
import { PaginatedItems } from "../../components/Bookshelf/Pagination/Pagination";

const DeleteContainer = styled.div`
    background-color: var(--general-bg);
    border-radius: 0.5rem;
    padding: 2rem;
    width: 100%;
    max-width: 800px;

    ul {
        display: flex;
        justify-content: center;
    }
`;

const DeleteHeader = styled.div`
    margin-bottom: 1.5rem;
`;

const DeleteTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom: 0.5rem;
    margin-top: 0;
`;

const DeleteSubtitle = styled.p`
    font-size: 0.875rem;
    margin: 0;
`;

export const DeleteProduct = () => {
    return (
        <>
            <DeleteContainer>
                <DeleteHeader>
                    <DeleteTitle>Eliminar</DeleteTitle>
                    <DeleteSubtitle>
                        Asegurate de elegir adecuadamente que productos vas a
                        borrar.
                    </DeleteSubtitle>
                </DeleteHeader>
                <AdminProvider>
                    <PaginatedItems variant='admin' />
                </AdminProvider>
            </DeleteContainer>
        </>
    );
};
