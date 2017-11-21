import React, { Component } from 'react';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
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
                        />
                    </Form>
                    <Button
                        type="button"
                        className='btn btn-success'
                    >
                    Add Reminder
                    </Button>
                </div>
            </div>
        )
    }
}

export default App;