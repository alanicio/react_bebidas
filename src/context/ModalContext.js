import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, guardarIdReceta] = useState(null);
  const [receta, guardarReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if(!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await axios.get(url);
      guardarReceta(resultado.data.drinks[0]);
    }
    obtenerReceta();
  }, [idReceta])

  return (
    <ModalContext.Provider value={{ guardarIdReceta }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
