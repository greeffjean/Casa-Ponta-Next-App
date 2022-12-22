import { sections } from "enums/pageSections"

export interface AppContextProps {
    children: React.ReactNode[] | React.ReactNode
}
export interface AppScrollStateProps {
    [sections.HERO]: 'idle' | 'active'
}