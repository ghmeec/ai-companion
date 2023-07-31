"use client"
import { Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Poppins } from "next/font/google"
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle'


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export default function Navbar() {
    return (
        <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
            <div className='flex items-center'>
                <Menu className='cursor-pointer block md:hidden' />
                <Link href={"/"} className={
                    cn(
                        'hidden md:block text-xl md:text-3xl font-bold text-primary',
                        font.className
                    )
                }><h1>companion.ai</h1></Link>
            </div>
            <div className='flex items-center gap-x-3'>
                <Button variant="premium" size={'sm'}>
                    Upgrade
                    <Sparkles className='h-4 w-4 fill-white text-white' />
                </Button>
                <ModeToggle />
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}
