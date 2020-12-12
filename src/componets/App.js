import React, {useState, useEffect} from 'react';
import Phrase from './Phrase'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const ButtonMain = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const App = () => {
  const [phrase, setPhrase] = useState('')

  const requestApiBB = async (e) => {
    try {
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      const result = await api.json()
      setPhrase(result[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(
    requestApiBB,
    []
  )

  return (
    <Container>
      <Phrase phrase={phrase}/>
      <ButtonMain onClick={requestApiBB}>
        Get Phrase
      </ButtonMain>
    </Container>
  );
}

export default App;
