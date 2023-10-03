import { useContext } from "react"
import { GlobalContext } from "../ContextProvider/ContextProvider"

const useGlobal = () => {
    const all = useContext(GlobalContext)
    return all;
}

export default useGlobal