// import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Books } from "../../Books/Books";
import type { Book } from "../../../interfaces";
import { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseProducts } from "../../../context/productsContext";

const PaginationBar = styled.div`
    ul {
        display: flex;
        gap: 10px;
        font-size: 1.3rem;
    }

    a {
        cursor: pointer;
        color: var(--text-light);
    }
`;

interface PaginatedItemsProps {
    variant: "bookshelf" | "admin";
}
const chunks = (arr: Book[]) =>
    Array.from(new Array(Math.ceil(arr.length / 10)), (_, i) =>
        arr.slice(i * 10, i * 10 + 10)
    );

export function PaginatedItems({ variant }: PaginatedItemsProps) {
    const { productsContent } = UseProducts();
    const [currentPage, setCurrentPage] = useState<Book[] | []>(
        productsContent.slice(0, 10)
    );

    const newProducts = chunks(productsContent);
    const handlePageClick = (event: { selected: number }) => {
        const newPage = newProducts[event.selected];
        setCurrentPage(newPage);
    };

    return (
        <>
            <Books variant={variant} arrayOfBooks={currentPage} />
            <PaginationBar>
                <ReactPaginate
                    breakLabel='...'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={newProducts.length}
                    nextLabel={<ArrowRight color='var(--text-light)' />}
                    previousLabel={<ArrowLeft color='var(--text-light)' />}
                    renderOnZeroPageCount={null}
                />
            </PaginationBar>
        </>
    );
}
