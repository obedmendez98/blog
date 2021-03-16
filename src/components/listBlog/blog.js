import React,{Component} from 'react'
import './list.css';

class Blog extends Component {
    
    edit(b){
        console.log(b)
    }
    
    render(){ 
        const {blog} = this.props
        return <div className="card">
            <h3>{blog.author}</h3>
            <p>{blog.text}</p>
            <h3>Categorias: </h3><p>{blog.categories.toString()}</p>
            <div>
                <h4>Creado: {blog.createdAt}</h4>
            </div>
            <div className="btn">
                <button onClick={this.props.edit.bind(this,blog)}>Actualizar</button>
                <button>Eliminar</button>
            </div>
        </div>
    }
}

export default Blog;