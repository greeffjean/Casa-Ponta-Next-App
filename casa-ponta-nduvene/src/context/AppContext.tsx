import { pageSectionStates } from "enums/appStates"
import { sections } from "enums/pageSections"
import { createContext, Dispatch, FC, SetStateAction, useState } from "react"
import { AppContextProps, AppScrollStateProps } from "./types"

interface AppScrollState {
    [sections.HERO]: string,
    [sections.ABOUT]: string,
}
export interface ContextProps {
    appScrollState: AppScrollState
    setAppScrollState: Dispatch<SetStateAction<AppScrollStateProps>>
}

export const Context: React.Context<ContextProps> = createContext({} as ContextProps)
Context.displayName = 'AppContext'

export const AppContext: FC<AppContextProps> = ({ children }) => {
    const [appScrollState, setAppScrollState] = useState<AppScrollStateProps>({
        [sections.HERO]: pageSectionStates.ACTIVE,
        [sections.ABOUT]: pageSectionStates.IDLE,
    })

    return (
        <Context.Provider value={{ appScrollState, setAppScrollState }}>
            {children}
        </Context.Provider>
    )
}
