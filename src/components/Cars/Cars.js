import React from 'react'
import Car from './Car/Car'

const Cars = (props) => (props.cars.map((car) => {
    return <Car id={car._id}
    model={car.model}
    description={car.description}
    />
}));

export default Cars;