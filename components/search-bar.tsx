"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState("")

  // Efecto para realizar búsqueda en tiempo real
  React.useEffect(() => {
    // Pequeño retraso para evitar demasiadas búsquedas mientras se escribe
    const timeoutId = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const clearSearch = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-8"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Button type="submit" size="icon">
        <Search className="h-4 w-4" />
      </Button>
    </form>
  )
}

