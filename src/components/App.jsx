import React, { Component } from 'react';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../Actions';


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

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className='list-group-item'>
                                <div className="list-item">{reminder.text}</div>
                                <Button
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                <div className='icon'>
                                    &#x2715;
                                </div>
                                </Button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className='title'>
                    Home Depot Reminder
                </div>
                <div className='form-inline reminder-form'>
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
                <div>
                    {this.renderReminders()}
                </div>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);