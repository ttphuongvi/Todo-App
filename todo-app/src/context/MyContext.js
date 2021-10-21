import {createContext, useState} from 'react'

export const MyContext = createContext({
     count: 0,
     setCount: () => {}
 });

export const MyContextProvider = ({children}) => {
    const [myCount, seMyCount] = useState(0)
    return(
        <MyContext.Provider value={{
            count: myCount,
            setCount: seMyCount
        }}>
            {children}
        </MyContext.Provider>
    )
 };
