import React from 'react'
import PropTypes from 'prop-types'

const Receta = ({receta}) => {
  const {bebida, foto} = receta;
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">
          {bebida}
        </h2>
      </div>
    </div>
  )
}

Receta.propTypes = {
  receta: PropTypes.object.isRequired,
}

export default Receta
