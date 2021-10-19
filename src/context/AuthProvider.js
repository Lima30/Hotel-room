import React, { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allCotexts = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allCotexts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;