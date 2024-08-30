// CounterContext.tsx
import React, { createContext, useState } from 'react';

// Define the shape of the context data
interface ContextType {
  count: boolean;
  setCount: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of undefined
const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Create state that will be shared
  const [count, setCount] = useState<boolean>(true);

  return (
    <Context.Provider value={{ count, setCount }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
