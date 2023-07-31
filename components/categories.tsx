"use client"

import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import qs from "query-string"

interface Props {
    data: Category[]
}

export default function Cateories({ data }: Props) {

    const router = useRouter()
    const params = useSearchParams()

    const categoryId = params.get("categoryId")

    const onClick = (id: string | undefined) => {
        const query = { categoryId: id }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })
        router.push(url)
    }

    return (
        <div className='w-full overflow-x-auto space-x-2 flex p-1'>
            <button
                onClick={() => onClick(undefined)}
                className={
                    cn(
                        "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
                        !categoryId && "bg-primary/40"
                    )
                }>
                Newest
            </button>

            {
                data.map((item) => {
                    return (
                        <button
                            onClick={() => onClick(item.id)}
                            key={item.id} className={
                                cn(
                                    "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
                                    item.id === categoryId ? "bg-primary/30" : "bg-primary/10"
                                )
                            }>
                            {item.name}
                        </button>
                    )
                })
            }
        </div>
    )
}