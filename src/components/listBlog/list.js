import React,{Component} from 'react'
import './list.css';
import Blog from './blog.js'

class ListBlog extends Component {
    
    render(){
        return <div className="list">
            {this.props.posts.map(blog => <Blog blog={blog} key={blog.id} edit={this.props.edit}/>) }
        </div>
    }
}

export default ListBlog;