import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render(props) {
        if(!this.props.book){
            return <div>Select book to get started.</div>
        }
        
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails);