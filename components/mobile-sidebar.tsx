"use client"

import React from 'react'
import { Menu, Sparkles } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './sidebar'

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger className='md:hidden pr-4'>
                <Menu className='cursor-pointer block' />
            </SheetTrigger>
            <SheetContent side={"left"} className='p-0 bg-secondary pt-10 w-32'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}
