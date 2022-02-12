import React, {Component} from 'react'
import  { Redirect } from 'react-router-dom'
import api from '../../services/api'

export class FormCar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            
                model: "", 
                color: "", 
                description: "",
                year: 0
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {id} = this.props.match;
        if(this.props.match.id){
          const response = api.get("/car/:id", {id});
          this.setState(response.data);  
        }
    }

    saveNewCar = async () =>{
        try {
            const {model, color, description, year} = this.state;
            const response = await api.post('/car', { model, color, description, year });
            this.setState(response.data);
            return this.props.history.push('/');
        } catch (error) {
            console.log(error.message);
        }
        
    }

    updateCar = async() => {
        try {

            const {id} = this.props.params;
            const {model, color, description, year} = this.state;
             let response = await api.post('/car/update/:id',{ id }, { model, color, description, year });
             this.setState(response);
            return this.props.history.push('/');
            
        } catch (error) {
            console.log(error.message);
        }
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.props.match.id) return this.updateCar();
        this.saveNewCar();
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }
        ); 
    }
    render(){
        const {model, color, description, year} = this.state;
        return (
            <div className="formCar">
                <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="">Model:</label>
                    <input type="text" value={model} name="model" onChange={this.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="">Description:</label>
                    <input type="text" value={description} name="description" onChange={this.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="">Color:</label>
                    <input type="text" value={color} name="color" onChange={this.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="">Year:</label>
                    <input type="number" value={year} name="year" onChange={this.handleChange}></input>
                </p>
                <p>
                    <input type="submit" value="Enviar"></input>
                </p>
                </form>
            </div>
        );
    }
}

export default FormCar