import React from "react";
import ReactDOM from "react-dom";

class NumberOfStudents extends React.Component {
    state = {
        enrolledStudents: 0,
        waitlistedStudents: 0,
        newEnrollments: 0,
        newWaitlistings: 0
    }

    setValue(e) {
        this.setState({[e.target.name]: parseInt(e.target.value)})
    }

    enrollOne() {
        this.setState({enrolledStudents: this.state.enrolledStudents + 1})
    }

    addEnrollments() {
        this.setState({enrolledStudents: this.state.enrolledStudents + this.state.newEnrollments})
    }

    waitlistOne() {
        this.setState({waitlistedStudents: this.state.waitlistedStudents + 1})
    }

    addWaitlistees() {
        this.setState({waitlistedStudents: this.state.waitlistedStudents + this.state.newWaitlistings})
    }

    render() {
        return (
            <span>
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <div>
                    <button onClick={() => this.enrollOne()}>Add 1 enrollment student</button>
                </div>
                <input 
                    type="number"
                    name="newEnrollments" 
                    onChange={(e) => this.setValue(e)} />
                <button onClick={() => this.addEnrollments()}>Increase students</button>

                <h1>Waitlisted Students Students: {this.state.waitlistedStudents}</h1>
                <div>
                    <button onClick={() => this.waitlistOne()}>Add 1 waitlist student</button>
                </div>               
                <input 
                    type="number"
                    name="newWaitlistings" 
                    onChange={(e) => this.setValue(e)} />
                <button onClick={() => this.addWaitlistees()}>Increase students</button>                
            </span>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <span>
                <NumberOfStudents />
            </span>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)