import React, { Component } from "react";
import API from "../utils/API";

class Directory extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({ result: res.data.results }))
        .catch(err => console.log(err));
    };

  

    // handleInputChange = event => {
    //     const 
    // }

    render() {
        return (
        <div>I am the directory</div>
        )
    }
}


export default Directory;