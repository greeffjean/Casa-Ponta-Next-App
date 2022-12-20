import { createContext, FC, useState } from "react"
import { AppContextProps, AppScrollStateProps } from "./types"


const Context = createContext({})
Context.displayName = 'AppContext'


export const AppContext: FC<AppContextProps> = ({ children }) => {
    const [appScrollState, setAppScrollState] = useState<AppScrollStateProps>({
        Hero: 'active'
    })

    return (
        <Context.Provider value={{ appScrollState, setAppScrollState }}>
            {children}
        </Context.Provider>
    )
}
