import React, { useState } from 'react';

import api from '../../services/api';

import { Title } from './styles';
import logo from '../../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    console.log(response.data);

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <Title>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite Seu Usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Title>
  );
}
