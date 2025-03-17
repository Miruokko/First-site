"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpandableContentProps {
  title: string
  content: string
}

export function ExpandableContent({ title, content }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border rounded-lg p-4 mt-2">
      <Button variant="ghost" className="flex w-full justify-between" onClick={() => setIsExpanded(!isExpanded)}>
        <span>{title}</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isExpanded && <div className="mt-2 text-muted-foreground">{content}</div>}
    </div>
  )
}

