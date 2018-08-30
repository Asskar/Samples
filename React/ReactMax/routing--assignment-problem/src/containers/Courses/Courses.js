import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'

import './Courses.css';
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <NavLink
                                    key={course.id}
                                    to={{
                                        pathname: `/Courses/${course.id}/${course.title}`,
                                        id: course.id,
                                        courseTitle: course.title
                                    }}>
                                    {course.title}
                                </NavLink>
                            )
                        })
                    }
                </section>
                <div>
                    <Route path={`${this.props.match.url}/:id/:courseTitle`} exact component={Course} />
                </div>
            </div>
        );
    }
}

export default Courses;