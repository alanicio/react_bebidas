import axios from "axios";

export const obtenerRecetas = async (nombre, categoria, guardarRecetas) => {
  const urlIngrediente = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`;
  const urlCategoria = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
  let resultado = await axios.get(urlIngrediente);
  const porIngrediente = traducirAtributosDeRecetaRespuesta(resultado);
  resultado = await axios.get(urlCategoria);
  const porCategoria = traducirAtributosDeRecetaRespuesta(resultado);
  resultado = filtrarRecetas(porIngrediente, porCategoria);
  guardarRecetas(resultado);
};

const filtrarRecetas = (porIngrediente, porCategoria) => {
  if (porIngrediente.length === 0) {
    return porCategoria;
  }
  if (porCategoria.length === 0) {
    return porIngrediente;
  }
  const ingredientesIds = porIngrediente.map(({ id }) => id);
  const resul = porCategoria.filter(
    ({ id }) => ingredientesIds.indexOf(id) > -1
  );
  return resul;
};

const traducirAtributosDeRecetaRespuesta = (recetaRespuesta) => {
  if (!recetaRespuesta.data.drinks) {
    return [];
  }
  const resultado = recetaRespuesta.data.drinks.map(
    ({ idDrink, strDrink, strDrinkThumb }) => {
      return { id: idDrink, bebida: strDrink, foto: strDrinkThumb };
    }
  );
  return resultado;
};
