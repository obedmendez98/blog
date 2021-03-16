import React, { useState } from 'react'
import './App.css';

function App() {

  const [id, setId] = useState('')
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [categorie, setCategorie] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [blogs, setBlogs] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [bd, setBd] = useState([])
  const [p, setP] = useState([])
  const [catego, setCatego] = useState('')

  const addPost = e => {
    e.preventDefault()
    setBlogs([
      ...blogs,
      {author,text,categorie,createdAt,id: blogs.length}
    ])
    setAuthor('')
    setText('')
    setCategorie('')
    setCreatedAt('')
  }

  const deletePost = id => {
    const arrayFiltrado = blogs.filter(item => item.id !== id)
    setBlogs(arrayFiltrado)
  }

  const edit = item => {
    setModoEdicion(true)
    setAuthor(item.author)
    setText(item.text)
    setCategorie(item.categorie)
    setCreatedAt(item.createdAt)
    setId(item.id)
  }

  const editPost = e => {
    e.preventDefault()
    const arrayEditado = blogs.map(item => item.id === id ? {id, author,text,categorie,createdAt} : item)
    setBlogs(arrayEditado)
    setModoEdicion(false)
    setAuthor('')
    setText('')
    setCategorie('')
    setCreatedAt('')
    setId('')
  }

  const onChange = e => {
    const s = e.target.value
    setCatego(s.split(',',2))
    console.log(catego) 
  }

  return (<div className="body">
    <hr/>
    <div className="row">
      <div className="col-8">
        <h4 className="text-center">BLOGS</h4>
        <div>
        <button onClick={()=>{
          const sortedList = [...blogs].sort(((a, b) => new Date(b.createdAt)  - new Date(a.createdAt)))
          setBlogs(sortedList)
        }}>
          order date
        </button>
        <button onClick={() => {
          const sortedList = [...blogs].sort(((a, b) => a.author.toLowerCase().localeCompare(b.author)))
          setBlogs(sortedList)
        }}>
          order alfa
        </button>
        <p>Filtros</p>
        <input placeholder=" categorie" onChange={onChange}  name="author"/>
        <button onClick={() => {
          [...blogs].forEach(x => {
            if(x.categorie.includes(catego[0]) || x.categorie.includes(catego[1])) {
              setP(p.push(x))
            }
          })
          setBlogs(p)
        }}>
          Filter
        </button>
      </div>
        <ul className="list-group">
          {
            blogs.length === 0 ? (
              <li >.......</li>
            ) : (
              blogs.map(item => (
                <li className="item" key={item.id}>
                  <span >Author: {item.author}</span>
                  <br/>
                  <span >Text: {item.text}</span>
                  <br/>
                  <span >Categorie: {item.categorie}</span>
                  <br/>
                  <span >Created: {item.createdAt}</span>
                  <button 
                    
                    onClick={() => deletePost(item.id)}
                  >delete</button>
                  <button 
                    
                    onClick={() => edit(item)}
                  >Edit</button>
                </li>
              ))
            )
          }
        </ul>
      </div>
      <div className="form">
        <h4 className="text-center">
          {
            modoEdicion ? 'EDIT' : 'ADD'
          }
        </h4>
        <form onSubmit={modoEdicion ? editPost : addPost}>
          <input 
            type="text" 
            className="fm"
            placeholder="Author"
            onChange={e => setAuthor(e.target.value)}
            value={author}
          />
          <input 
            type="text" 
            className="fm"
            placeholder="Text"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <input 
            type="text" 
            className="fm"
            placeholder="Categorie"
            onChange={e => setCategorie(e.target.value)}
            value={categorie}
          />
          <input 
            type="date" 
            onChange={e => setCreatedAt(e.target.value)}
            value={createdAt}
          />
          <div className="fm">
          {
            modoEdicion ? (
              <button className="btnE" type="submit">Edit</button>
            ) : (
              <button className="btnA" type="submit">Add</button>
            )
          }
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;