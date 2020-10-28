import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  const [categorias, guardarCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categorias = await axios.get(url);

      guardarCategorias(
        categorias.data.drinks.map(({ strCategory }) => strCategory)
      );
    };

    obtenerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
