"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#introduction"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("introduction")
            }}
          >
            Введение
          </Link>
          <Link
            href="#technologies"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("technologies")
            }}
          >
            IT-технологии
          </Link>
          <Link
            href="#business"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("business")
            }}
          >
            Бизнес
          </Link>
          <Link
            href="#ai"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("ai")
            }}
          >
            ИИ и данные
          </Link>
          <Link
            href="#impact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("impact")
            }}
          >
            Влияние
          </Link>
          <Link
            href="#conclusion"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("conclusion")
            }}
          >
            Заключение
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

