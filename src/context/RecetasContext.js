import React, { createContext, useEffect, useState } from "react";
import { obtenerRecetas } from "../helpers";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [filtros, guardarFiltros] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = filtros;

  useEffect(() => {
    if (consultar) {
      obtenerRecetas(nombre, categoria,guardarRecetas);      
    }
    //eslint-disable-next-line
  }, [filtros]);

  return (
    <RecetasContext.Provider value={{ guardarFiltros, guardarConsultar, recetas }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
