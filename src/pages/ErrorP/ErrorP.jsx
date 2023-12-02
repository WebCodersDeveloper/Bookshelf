import React from 'react'
  import { ErrorImage } from '../../components/export_img'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function ErrorP() {
  const navigate = useNavigate()



  const StyledError = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const StyledErrorC = styled.div`
    margin-top: 100px;
    width: 720px;
    height: 588px;  
  `
  const StyledErrorImg = styled.img`
  `
  const StyledErrorBtn = styled.div`
    margin-top: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    height: 40px;
  `
  const StyledErrorBtn1 = styled.button`
    cursor: pointer;
    width: 240px;
    height:40px;
    padding: 10px 24px; 
    border-radius: 4px;
    background: var(--foundation-purple-purple-500, #6200EE);
    border: none;
    color: var(--foundation-white-white-50, #FEFEFE);
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `
  const StyledErrorBtn2 = styled.button`
    margin-left: 12px;
    cursor: pointer;
    width: 240px;
    height:40px;
    padding: 10px 24px; 
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid var(--foundation-purple-purple-500, #6200EE);
    color: var(--foundation-purple-purple-500, #6200EE);
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `

  
  return (
    <StyledError >
      <StyledErrorC>

        <StyledErrorImg src={ ErrorImage } alt="image" />
        <StyledErrorBtn>
          <StyledErrorBtn1 onClick={() => navigate('/')}>Go Home Page</StyledErrorBtn1>
          <StyledErrorBtn2 onClick={() => navigate('/error')}>Reload Page</StyledErrorBtn2>
        </StyledErrorBtn>
      </StyledErrorC>

    </StyledError>
  )
}
