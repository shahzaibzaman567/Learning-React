import { createContext, useContext, useState } from "react";

export let countContext = createContext(null);

export let Counter = () => {
  let count = useContext(countContext);
  return count;
};

export let Provider = (p) => {
  let [count, setCount] = useState(0);

  return (
    <countContext.Provider value={{ count, setCount }}>
      {p.children}
    </countContext.Provider>
  );
};
