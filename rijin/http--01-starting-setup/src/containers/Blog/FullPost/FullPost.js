import React, { Component } from 'react';
import axios from 'axios'; 

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    async componentDidMount(prevProps){
        let data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);
        console.log("data...", data); 
        this.setState({loadedPost: data.data}); 
    }
    
    deletePostHandler = async () => {
        let deleting = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);
        console.log(deleting);
    }

    render () {
        console.log(this.props.match.params.id);
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if (this.props.match.params.id){
            <p style={{ textAlign: "center" }}>Loading..</p>
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;