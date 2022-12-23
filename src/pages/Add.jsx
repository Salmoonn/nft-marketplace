import { useState } from "react";

import config from '../config.json'
const server = config.server

function Add() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [collection, setCollection] = useState('');
  const [image, setImage] = useState('');

  const submit = () => {
    const data = new FormData()
    data.append('name', name)
    data.append('author', author)
    data.append('collection', collection)
    data.append('image', image)

    fetch(server + '/add', {
      method: "POST",
      body: data
    })
  }

  return (
    <div style={{
      "padding": "60px 0",
      "margin": "0 auto",
      "display": "flex",
      "flex-direction": "column",
      "width": "300px",
      "gap": "10px"
    }}>
      <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input placeholder="collection" value={collection} onChange={(e) => setCollection(e.target.value)} />
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={() => submit()}>Submit</button>
    </div>
  )
}

export { Add }