import React, { Component } from 'react';

import ListAll from './ListAll'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            collection: [],
        };
        this.updateDatabaseData();
    }
    updateDatabaseData=()=>{
        fetch('/listAll')
            .then(jsonData=>this.setState({collection:jsonData}))
    };

    render() {
        return (
            <div className="App">
            <ListAll items={this.state.collection} updateDatabaseData={this.updateDatabaseData}/>
            </div>
        );
    }
}

export default Home;
