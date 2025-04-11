"use client"

import * as React from "react"
import { categories } from "@/data/categories"
import type { Category } from "@/types"
import { ChevronRight } from "lucide-react"

interface CategoryItemProps {
  category: Category
  level?: number
  onSelect: (categoryId: string, level: number, isExpandable: boolean) => void
  selectedCategory: string | null
  openCategories: string[]
  setOpenCategories: React.Dispatch<React.SetStateAction<string[]>>
}

function CategoryItem({
  category,
  level = 0,
  onSelect,
  selectedCategory,
  openCategories,
  setOpenCategories,
}: CategoryItemProps) {
  const hasSubcategories: boolean = !!(category.subcategories && category.subcategories.length > 0)
  const isOpen = openCategories.includes(category.id)

  const handleClick = () => {
    onSelect(category.id, level, hasSubcategories)
    if (hasSubcategories) {
      setOpenCategories((prev) => {
        if (isOpen) {
          return prev.filter((id) => id !== category.id)
        } else {
          if (level === 0) {
            return [category.id]
          }
          return [...prev, category.id]
        }
      })
    }
  }

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between w-full p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
          level > 0
            ? hasSubcategories
              ? "pl-8 text-gray-800 hover:bg-gray-100"
              : "pl-8 text-gray-600 hover:bg-gray-50"
            : "font-medium hover:bg-gray-100"
        } ${selectedCategory === category.id ? "bg-[#ed1b34] text-white" : ""}`}
        onClick={handleClick}
      >
        <span className="flex-1 text-sm font-medium">{category.name}</span>
        {hasSubcategories && (
          <ChevronRight
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "transform rotate-90" : ""} ${
              level > 0 ? "text-gray-800" : ""
            }`}
          />
        )}
      </div>
      {hasSubcategories && isOpen && (
        <div className="ml-4">
          {category.subcategories?.map((subcategory) => (
            <CategoryItem
              key={subcategory.id}
              category={subcategory}
              level={level + 1}
              onSelect={onSelect}
              selectedCategory={selectedCategory}
              openCategories={openCategories}
              setOpenCategories={setOpenCategories}
            />
          ))}
        </div>
      )}
      {level === 0 && <hr className="my-2 border-gray-200" />}
      {hasSubcategories && isOpen && level > 0 && <hr className="my-2 border-gray-100" />}
    </div>
  )
}

interface CategoryNavProps {
  onSelectCategory: (categoryId: string | null, level: number, isExpandable: boolean) => void
  selectedCategory: string | null
}

export function CategoryNav({ onSelectCategory, selectedCategory }: CategoryNavProps) {
  const [openCategories, setOpenCategories] = React.useState<string[]>([])

  const handleSelectAll = () => {
    onSelectCategory(null, 0, false)
    setOpenCategories([])
  }

  return (
    <nav className="flex flex-col gap-2">
      <div
        className={`flex items-center w-full p-2 rounded-lg cursor-pointer transition-colors duration-200 font-medium ${
          selectedCategory === null ? "bg-[#ed1b34] text-white" : "hover:bg-gray-100"
        }`}
        onClick={handleSelectAll}
      >
        <span className="flex-1 text-sm font-medium">Todos los productos</span>
      </div>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onSelect={onSelectCategory}
          selectedCategory={selectedCategory}
          openCategories={openCategories}
          setOpenCategories={setOpenCategories}
        />
      ))}
    </nav>
  )
}