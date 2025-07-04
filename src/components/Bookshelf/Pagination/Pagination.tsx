// import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Books } from "../../Books/Books";
import type { Book } from "../../../interfaces";
import { useEffect, useState } from "react";
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
    content?: Book[] | [];
}
const chunks = (arr: Book[]) =>
    Array.from(new Array(Math.ceil(arr.length / 10)), (_, i) =>
        arr.slice(i * 10, i * 10 + 10)
    );

export function PaginatedItems({ variant, content = [] }: PaginatedItemsProps) {
    const { productsContent } = UseProducts();
    const arrayOfBooks = content.length === 0 ? productsContent : content;
    const [currentPage, setCurrentPage] = useState<Book[] | []>(
        arrayOfBooks.slice(0, 10)
    );

    useEffect(() => {
        const newProducts = chunks(arrayOfBooks);

        setCurrentPage(newProducts[0]);
    }, [arrayOfBooks]);

    const newProducts = chunks(arrayOfBooks);
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
