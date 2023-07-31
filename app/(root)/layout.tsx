import React from 'react'
import Navbar from '@/components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <Navbar />
            <main className="px-8 pt-14 h-full">
                {children}
            </main>
        </div>
    )
}
