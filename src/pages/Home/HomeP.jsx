import React from 'react';
import './Home.css'
import styled from 'styled-components';

export default function HomeP() {
  
  const StyledMaimh1 = styled.h1`
    font-size: 30px;
    font-family: sans-serif;
    color: red;
    font-weight: 1900;

  `
  return (
    <main className='homep'>
      <StyledMaimh1>Home Page</StyledMaimh1>
    </main>
  )
}
