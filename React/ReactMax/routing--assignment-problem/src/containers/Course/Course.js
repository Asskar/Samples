import React, { Component } from 'react';

class Course extends Component {
    render() {
        const id = this.props.match.params.id;
        const title = this.props.match.params.courseTitle;
        console.log(this.props);
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID:{id}</p>
            </div>
        );
    }
}

export default Course;