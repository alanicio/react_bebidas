import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ receta }) => {
  const { guardarIdReceta } = useContext(ModalContext);
  const { id, bebida, foto } = receta;
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{bebida}</h2>

        <img className="card-img-top" src={foto} alt={`Imagen de ${bebida}`} />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => guardarIdReceta(id)}
          >
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};

Receta.propTypes = {
  receta: PropTypes.object.isRequired,
};

export default Receta;
