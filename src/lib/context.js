import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [articleLoaded, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{articleLoaded, setLoading}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}