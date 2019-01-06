import React, { Component } from 'react';
import { fetchPostAndUsers } from '../actions/index';
import {connect} from 'react-redux';
import UserHeader from './userHeader';
class PostLists extends Component {
    componentDidMount(){
        this.props.fetchPostAndUsers();
    }
    renderList(){
        return this.props.posts.map(post=> {
            return(
                <div className = "item" key = {post.id}>
                <i className="large middle aligned icon user icon"></i>
                <div className = "content">
                <div className = "description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </div>
                <UserHeader userId = {post.userId}/>
                </div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className = "ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {posts:state.posts};
}

// the first argument should be mapStateToProps function.
export default connect(mapStateToProps, {fetchPostAndUsers})(PostLists);