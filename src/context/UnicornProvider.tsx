import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  unicornName: string;
  setUnicornName: (name: string) => void;
};

export const UnicornContext = createContext<ContextType>({
  unicornName: "",
  setUnicornName: () => {},
});

function UnicornProvider({ children }: Props) {
  const [unicornName, setUnicornName] = useState<string>("🦄");
  return (
    <UnicornContext.Provider
      value={{
        unicornName,
        setUnicornName,
      }}
    >
      {children}
    </UnicornContext.Provider>
  );
}

export default UnicornProvider;
