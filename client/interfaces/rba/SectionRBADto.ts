export interface SectionRBADto {
  name: string
  userId: number
}

export interface ShowSections {
  id: number
  name: string
} 

interface Accordion {
  id: number
  title: string
  description: string
}

export interface SectionWithAccordions {
  id: number
  name: string
  accordionRBA: Accordion[]
}

export interface Section {
  id: number
  name: string
}