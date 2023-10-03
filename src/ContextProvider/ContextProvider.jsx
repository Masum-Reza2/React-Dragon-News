import { createContext } from "react"
import PropTypes from 'prop-types';

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {

    const globalInfo = { name: 'Masum Reza' }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node,
}

export default ContextProvider