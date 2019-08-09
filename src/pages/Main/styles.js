import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }

  ul li {
    display: flex;
    flex-direction: column;
  }

  ul li img {
    max-width: 100%;
  }

  ul li footer {
    flex: 1;
    background: #fff;
    border: 1px solid #eee;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;
  }

  ul li footer strong {
    font-size: 16px;
    color: #333;
  }

  ul li footer p {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-top: 5px;
  }

  ul li .buttons {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  ul li .buttons button {
    height: 50px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
  }

  ul li .buttons button:hover img {
    transform: translateY(-5px);
    transition: all 0.2s;
  }

  .empty {
    font-size: 32px;
    color: #999;
    font-weight: bold;
    margin-top: 300px;
  }
`;
