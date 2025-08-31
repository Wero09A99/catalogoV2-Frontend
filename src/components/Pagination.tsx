"use client"

import Link from "next/link";

export function Pagination({ page, pageSize, pageCount, total }: { page: number, pageSize: number, pageCount: number, total: number }) {
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? "#" : `?page=${prevPage}`
    const nextPageUrl = isLastPage ? "#" : `?page=${nextPage}`

    // Corregir el cálculo de los elementos mostrados
    const startItem = (page - 1) * pageSize + 1;
    const endItem = Math.min(page * pageSize, total);

    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{startItem}</span>
                {" "}to{" "}
                <span className="font-medium">{endItem}</span>
                {" "}of{" "}
                <span className="font-medium">{total}</span>
                {" "}Products
            </span>
            
            <div className="flex gap-2">
                <Link 
                    href={prevPageUrl}
                    className={`px-3 py-2 text-sm font-medium border rounded ${
                        isFirstPage 
                            ? 'text-gray-400 cursor-not-allowed border-gray-200' 
                            : 'text-blue-600 hover:bg-blue-50 border-blue-300'
                    }`}
                    {...(isFirstPage && { onClick: (e) => e.preventDefault() })}
                >
                    ← Prev
                </Link>
                
                <span className="px-3 py-2 text-sm font-medium">
                    Page {page} of {pageCount}
                </span>
                
                <Link 
                    href={nextPageUrl}
                    className={`px-3 py-2 text-sm font-medium border rounded ${
                        isLastPage 
                            ? 'text-gray-400 cursor-not-allowed border-gray-200' 
                            : 'text-blue-600 hover:bg-blue-50 border-blue-300'
                    }`}
                    {...(isLastPage && { onClick: (e) => e.preventDefault() })}
                >
                    Next →
                </Link>
            </div>
        </div>
    )
}