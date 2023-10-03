import { createContext } from "react"

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {

    const globalInfo = { name: 'Masum Reza' }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider