import React, { createContext,useReducer } from "react";
import AppReducer from './AppReducer'
// Initial State

const initialstate = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}


// Create Context

export const GlobalContext = createContext(initialstate);

// Provieder Component

export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer,initialstate);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        { children }
    </GlobalContext.Provider>)
}