import React, { Component } from 'react';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        console.log('this.state', this.state)
    }
    render() {
        return (
            <div className="App">
                <div className='title'>
                    Reminder Pro
                </div>
                <div className='form-inline'>
                    <Form className="form-group">
                        <FormControl
                            className='form-control'
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                    </Form>
                    <Button
                        type="button"
                        className='btn btn-success'
                        onClick={() => this.addReminder()}
                    >
                    Add Reminder
                    </Button>
                </div>
            </div>
        )
    }
}

export default App;