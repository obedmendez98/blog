import React, { useState } from 'react'
import '../../App.css';

const Form = props => {

    const [post, setPost] = useState([{
      author: '',
      text: '',
      createdAt: '',
      categories: '',
    }])

    const [v,setV] = useState(false)

    const onSubmit = e => {
      console.log('enviadno')
      console.log(post)
      e.preventDefault();
      props.add(post)
      //this.props.addTask(this.state.title,this.state.description)
    }

    const onChange = e => {
      setPost({
        ...post,
        [e.target.name]:e.target.value
      }) 
    }

    return <div className="form">
        <form onSubmit={onSubmit}>
          <div className="fm">
            <input type="text" placeholder="Autor" onChange={onChange}  name="author"/>
          </div>
          <div className="fm">
            <input type="text" placeholder="Descripccion"  onChange={onChange}  name="text"/>
          </div>
          <div className="fm">
            <input type="text" placeholder="Categorias: (' categoria1,categoria2,.... ')" onChange={onChange}  name="categories" />
          </div>
          <div className="fm">
            <input type="date" placeholder="Creado" onChange={onChange}  name="createdAt" />
          </div>
          <div className="fm">
            <input type="submit"/>
          </div>
        </form>
        <br/>
        <h1>Actuaizar</h1>
         <form onSubmit={onSubmit}>
        <div className="fm">
          <input type="text" placeholder="Autor" onChange={onChange}  name="author"/>
        </div>
        <div className="fm">
          <input type="text" placeholder="Descripccion"  onChange={onChange}  name="text"/>
        </div>
        <div className="fm">
          <input type="text" placeholder="Categorias: (' categoria1,categoria2,.... ')" onChange={onChange}  name="categories" />
        </div>
        <div className="fm">
          <input type="date" placeholder="Creado" onChange={onChange}  name="createdAt" />
        </div>
        <div className="fm">
          <input type="submit"/>
        </div>
      </form> 
    </div>

}

export default Form