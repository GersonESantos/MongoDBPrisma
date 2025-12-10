import React, { useEffect, useState } from 'react';
import './style.css';

function Home() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/usuarios'); // Faz a requisição para a API
        const data = await response.json(); // Converte a resposta para JSON
        setUsers(data); // Atualiza o estado com os dados da API
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }
    fetchUsers();
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Idade:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}

export default Home;