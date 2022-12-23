import { sections } from "enums/pageSections"

export interface AppContextProps {
    children: React.ReactNode[] | React.ReactNode
}
export interface AppScrollStateProps {
    [sections.HERO]: 'idle' | 'active',
     [sections.ABOUT]: 'idle' | 'active'
}

export interface UserDeviceProps {
     width: number,
        isMobile: boolean,
        isTablet: boolean,
        isDesktop: boolean,
        isHD: boolean,
        height: number
}