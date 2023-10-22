'use-client';

import { createContext, ReactNode, useContext, useState } from 'react';

export interface IFindJobContext {
  state: {
    selectedJobId: string | number;
    selectedJobSummary: any;
  };
  setSelectedJobId: Function;
  setSelectedJobSummary: Function;
}

interface IFindJobContextProviderPropsType {
  children: ReactNode;
}

const FindJobContext = createContext<IFindJobContext | null>(null);

export const FindJobContextProvider = ({
  children,
}: IFindJobContextProviderPropsType) => {
  const [selectedJobId, setSelectedJobId] = useState('');
  const [selectedJobSummary, setSelectedJobSummary] = useState({});

  return (
    <FindJobContext.Provider
      value={{
        state: {
          selectedJobId,
          selectedJobSummary,
        },
        setSelectedJobId,
        setSelectedJobSummary,
      }}
    >
      {children}
    </FindJobContext.Provider>
  );
};

export function useFindJobContext() {
  return useContext(FindJobContext);
}
