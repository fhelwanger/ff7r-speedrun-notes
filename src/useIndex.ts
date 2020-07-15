import React from "react";

export type IndexEntry = { id: string; text: string };
export type Index = Array<IndexEntry>;

export type IndexContextType = {
  index: Index;
  addEntry: (entry: IndexEntry) => void;
  removeEntry: (id: string) => void;
};

export const IndexContext = React.createContext<IndexContextType>({
  index: [],
  addEntry: () => {},
  removeEntry: () => {},
});

function useIndex(): IndexContextType {
  const [index, setIndex] = React.useState<Index>([]);

  const addEntry = React.useCallback((entry: IndexEntry) => {
    setIndex((index) => [...index, entry]);
  }, []);

  const removeEntry = React.useCallback((id: string) => {
    setIndex((index) => index.filter((x) => x.id !== id));
  }, []);

  return {
    index,
    addEntry,
    removeEntry,
  };
}

export default useIndex;
