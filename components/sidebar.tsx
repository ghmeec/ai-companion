"use client"
import React from 'react'
import { Home, LucideIcon, Plus, Settings } from "lucide-react"
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from "next/navigation"


type Route = {
    icon: LucideIcon,
    href: string,
    label: string,
    pro: boolean
}
export default function Sidebar() {
    const pathName = usePathname()
    const router = useRouter()
    const routes: Route[] = [
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false

        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: true

        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false

        }
    ]

    const onNavigate = (url: string, pro: boolean) => {
        // TODO: check if pro
        return router.push(url)
    }
    return (
        <div className='space-y-4 flex flex-col h-full text-primary bg-secondary'>
            <div className='p-3 flex flex-1 justify-center'>
                <div className='space-y-2'>
                    {
                        routes.map((route, index) => ((
                            <div
                                onClick={() => {
                                    onNavigate(route.href, route.pro)
                                }}
                                key={route.href}
                                className={cn(
                                    "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                    pathName === route.href && "bg-primary/10 text-primary"

                                )}
                            >
                                <div className='flex flex-col items-center gap-y-2 flex-1'>
                                    <route.icon className='h-5 w-5' />
                                    {route.label}
                                </div>

                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    )
}
