import { createContext, useState } from "react";

export const DataContext = createContext()


const DataProvider = ({children}) => {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [javaScript, setJavaScript] = useState('')

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            javaScript,
            setJavaScript
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;