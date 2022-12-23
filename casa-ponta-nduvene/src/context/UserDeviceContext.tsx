import { useDeviceClassification } from "hooks/useDeviceClassification"
import { createContext, FC } from "react"
import { AppContextProps, UserDeviceProps } from './types'


export const Context: React.Context<UserDeviceProps> = createContext({} as UserDeviceProps)
Context.displayName = 'UserDeviceContext'

export const UserDeviceContext: FC<AppContextProps> = ({ children }) => {
    const { ...args } = useDeviceClassification();

    return (
        <Context.Provider value={{ ...args }}>
            {children}
        </Context.Provider>
    )
}
