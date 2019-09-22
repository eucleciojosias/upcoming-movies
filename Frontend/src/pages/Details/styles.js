import styled from 'styled-components'

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 100px;
  min-height: 100%;
`

export const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    text-align: left;
    padding: 0 20px;
    color: #aaaaaa;
  }

  > section {
    padding: 20px;
    font-size: 18px;
    color: #aaaaaa;
    padding: 10px 0;

    .Overview {
      width: 800px;
      font-size: 22px;
      padding: 50px 0;
    }

    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`
export const Title = styled.h1`
  text-align: left;
  padding: 0 20px;
  line-height: 60px;
  width: 100%;
  color: #aaaaaa;
  background-color: rgba(0, 0, 0, 0.7);
`
