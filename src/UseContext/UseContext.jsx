import React, {createContext, useState} from 'react'


export let NameContext = createContext();

const UseContext = ({children}) => {
    
    let [ademola, setAdemola] = useState("Ademola");


  return (
    <div>
        <NameContext.Provider  value={ademola}>

            {children}

        </NameContext.Provider>
      
    </div>
  )
}

export default UseContext
