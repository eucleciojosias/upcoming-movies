import styled from 'styled-components'

export const Container = styled.div `
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spin = styled.div `
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 15px solid #55555a;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`
