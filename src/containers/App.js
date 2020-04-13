import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots'; -using api
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    //add state
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        //fetch is a window object
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //convert to json
        .then(users =>this.setState({ robots: users})); 
    }


    //event for searchbox change
    //not part of react component so use arrow function
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        if (this.state.robots.length === 0) {
            return <h1>Loading Robots</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry> 
                    </Scroll>
                </div>
                
            );
        }
        
    }   
}

export default App;