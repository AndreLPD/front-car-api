import React from 'react'

import { Link } from 'react-router-dom'

const Car = (props) => {
    const {id, model, description} = props;
    return (
        <article key={id}>
             <strong>{model}</strong>
             <p>{description}</p>
             <Link to={`/car/${id}`}>Acessar</Link>
        </article>
    );
}

export default Car;