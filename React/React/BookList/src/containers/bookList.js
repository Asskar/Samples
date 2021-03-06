import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() { 
        return this.props.books.map(book => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props inside of Booklistw
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote book list from component to a contianer - it needs to know about this new dispatch method.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);