import React, { Component } from 'react'; 
import axios from 'axios';
import Post from '../../../components/Post/Post';  
import { Link } from 'react-router-dom'; 

class Posts extends Component{

    state = {
        posts: [],
    }

    postSelectedHandler(id) {
        console.log(id);
        this.setState({ selectedPostID: id });
    }

    async componentDidMount() {

        console.log(this.props);

        let data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({ posts: data.data.slice(0, 4) });
    }

    render(){
        const post = this.state.posts.map(post => {
            return <Link key={post.id} to={'/' + post.id}><Post title={post.title} /></Link>
        });

        return (
            <section className="Posts">
                {post}
            </section>
        );

    }
}

export default Posts; 