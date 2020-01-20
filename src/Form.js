import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            globalTitle: ''
        }
    }

    componentDidMount(){
        console.log('Rendered Form');
    }

    handleSubmit = () => this.setState({globalTitle: 'My form - '})

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    
    componentDidUpdate(){
        console.log('Title changed');
    }

    render() {
        return (
            <div className="Form">
                 <h1>{this.state.globalTitle}</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label>Write your input here</label>
                            <textarea type="text" name="title" onChange={this.onChange}/>
                    </div>
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        );

    }
}

export default Form;