import React, {Component} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Cars from '../../components/Cars/Cars'
import {Paginacao} from '../../components/Paginacao/Paginacao'
import './index.css'


export class ListCars extends Component{
    state = {
        cars: [],
        carsInfo: [],
    };

    componentDidMount(){
        this.loadCars();
    }

    loadCars = async (page = 1) => {

        let response = await api.get(`/cars/${page}`);
        
        const {docs, ...carsInfo} = response.data.car;
        
        this.setState({ cars: docs, carsInfo, page});
    };
    
    render() {
        const {page, carsInfo} =  this.state;
        return (
                <div className="list-cars">
                    <div className="addCar">
                        <article>
                            <Link to={`/newCar`}>Novo Carro</Link>
                        </article>
                    </div>
                  <Cars cars={this.state.cars}/>  
            <Paginacao page={page} carsInfo={carsInfo} loadCars={this.loadCars} />
            </div>
        );
    }
}

export default ListCars;