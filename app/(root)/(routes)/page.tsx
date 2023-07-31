
import Categories from '@/components/categories'
import SearchInput from '@/components/search-input'
import React from 'react'
import prisma from '@/lib/prisma'

export default async function RootPage() {
    const categories = await prisma?.category.findMany() || []

    return (
        <div className='h-full p-4 space-y-2'>
            <SearchInput />
            <Categories data={categories} />
        </div>
    )
}
