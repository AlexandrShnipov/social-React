import React, {createContext} from "react";


const StoreContext = createContext(null);
export default StoreContext;



export const Provider = (props) => {
    return (
            <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
        )
}
