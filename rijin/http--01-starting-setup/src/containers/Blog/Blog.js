import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios'; 
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [], 
        selectedPostID: null, 
    }

    async componentDidMount(){
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({posts: data.data.slice(0,4)}); 
    }

    postSelectedHandler (id) {
        console.log(id);
        this.setState({selectedPostID: id}); 
    }

    render () {

        const post = this.state.posts.map(post => {
            return <Post clicked={() => {this.postSelectedHandler(post.id)}} key={post.id} title={post.title} />
        }); 

        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;