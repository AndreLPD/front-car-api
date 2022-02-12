import React, {Component} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default class Car extends Component{
    state = {
        car: {},
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/car/${id}`);
        this.setState({car: response.data});
    }
    render(){
        const {id} = this.props.match.params; 
        const { description, year }  = this.state.car;
        return (
            <div>
            <h1>{description}</h1>
            <h1>{year}</h1>
            <article>
                <Link to={`/updateCar/${id}`}>Update Carro</Link>
            </article>
        </div>
        );
    }
}