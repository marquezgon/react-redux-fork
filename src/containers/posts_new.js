import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit }>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" component="input" type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <Field name="categories" component="input" type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <Field name="categories" component="textarea" type="text" className="form-control" placeholder="Title" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNew'
})(PostsNew);
