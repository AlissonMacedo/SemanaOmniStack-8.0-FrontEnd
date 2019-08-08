import React, { useState } from 'react';

import { Title } from './styles';
import logo from '../../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    history.push('/main');
  }

  return (
    <Title>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Title>
  );
}
