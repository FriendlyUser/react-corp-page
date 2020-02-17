import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'


const initialState: any = {
    theme: {},
    error: null
  }

const ThemeProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default ThemeProvider;
