import React, { Component } from 'react';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder } from '../Actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch);
// }

export default connect(null, {addReminder})(App);