import React, { createContext, useEffect, useState } from "react";
import { getAll } from "../API/index.js";
import { endpoints } from "../API/constants.js";
export const MenuProvider = createContext("");
const ContextMenu = ({children}) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getAll(endpoints.songs).then((res) => {
      setSongs(res.data);
    });
  }, []);
  return (
    <div>
      <MenuProvider.Provider value={{ songs, setSongs }}>
        {children}
      </MenuProvider.Provider>
    </div>
  );
};

export default ContextMenu;
