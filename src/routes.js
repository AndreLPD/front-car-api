import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListCars from './pages/ListCars/listCars'
import DetailCar from './pages/DetailCar/DetailCar'
import FormCar from './pages/FormCar/FormCar'

const Routes = () =>(
    <Router>
        <Switch>
            <Route exact path="/" component={ListCars} />
            <Route path="/car/:id" component={DetailCar} />
            <Route path="/newCar" component={FormCar} />
            <Route path="/updateCar/:id" component={FormCar} />
        </Switch>
    </Router>
);

export default Routes;