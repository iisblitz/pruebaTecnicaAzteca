import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState('');
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const addPost = () => {
    if (userId  && title && body) {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: parseInt(userId),

        title,
        body
      })
        .then(response => {
          setPosts([response.data, ...posts]);
          setUserId('');
          
          setTitle('');
          setBody('');
        })
        .catch(error => {
          console.error('Error adding post: ', error);
        });
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filteredPosts = currentPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setCurrentPage(1)}>Buscar</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => paginate(currentPage - 1)}>Anterior</button>
        <button onClick={() => paginate(currentPage + 1)}>Siguiente</button>
      </div>
      <h2>Agregar Post</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost();
        }}
      >
        <input
          type="number"
          placeholder="UserID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Título"
          maxLength="30"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenido"
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default App;

