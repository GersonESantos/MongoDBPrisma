import React, { useEffect, useState } from 'react';
import './style.css';

function Home() {
  const [users, setUsers] = useState([]);

  // Buscar usuários ao carregar o componente
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/usuarios');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro De Usuarios</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src='/delete-icon.svg' alt='Deletar' />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
