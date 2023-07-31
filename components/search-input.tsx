"use client"

import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Search } from "lucide-react"
import { Input } from './ui/input'
import { useRouter, useSearchParams } from "next/navigation"
import { useDebounce } from '@/hooks/useDebounce'
import qs from "query-string"

export default function SearchInput() {

  const router = useRouter()
  const params = useSearchParams()

  const categoryId = params.get("categoryId")
  const name = params.get("name")

  const [value, setvalue] = useState(name || "")

  const debounceValue = useDebounce<string>(value, 500)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setvalue(e.target.value)
  }

  useEffect(() => {
    const query = {
      name: debounceValue,
      categoryId: categoryId
    }

    const url = qs.stringifyUrl({ url: window.location.href, query: query }, { skipEmptyString: true, skipNull: true })

    router.push(url)

  }, [debounceValue, router, categoryId])

  return (
    <div className='relative'>
      <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground' />
      <Input placeholder='search...' className='pl-10 bg-primary/10' onChange={onChange} value={value} />
    </div>
  )
}
