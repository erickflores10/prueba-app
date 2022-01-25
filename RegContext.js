import React, { useState, createContext } from "react";

export const RegContext = createContext({
  reg: false,
  signUp: () => {},
});

export function RegProvider(props) {
  const { children } = props;
  const [reg, setReg] = useState(undefined);

  const signUp = (reg) => {
    setReg(reg);
  };

  const valueContext = {
    reg,
    signUp,
  };

  return (
    <RegContext.Provider value={valueContext}>{children}</RegContext.Provider>
  );
}
