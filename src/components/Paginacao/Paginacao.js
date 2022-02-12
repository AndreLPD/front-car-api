import  React, { Component } from 'react';
import './index.css'

export class Paginacao extends Component{

    prevPage = async () =>{
        
        const { page } = this.props;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.props.loadCars(pageNumber);
    }

    nextPage = async () =>{

        const { carsInfo, page } = this.props;

        if(page === carsInfo.pages) return;

        const pageNumber = page + 1;

        this.props.loadCars(pageNumber);
    }
    
render(){

    const { carsInfo, page } = this.props;

    return (
        <div className="Paginacao">
                <button disabled={page === 1} onClick={this.prevPage}>Prev</button>
                <p>Page {page} of {carsInfo.pages} </p>
                <button disabled={page === carsInfo.pages} onClick={this.nextPage}>Next</button>
        </div>
    );
}
}

export default Paginacao;