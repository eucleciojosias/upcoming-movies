import styled from 'styled-components'

export const Item = styled.div`
  border: 1px solid #55555a;
  width: 430px;
  margin-bottom: 20px;
  padding: 20px 30px;
  transition: 0.5s;
  cursor: pointer;

  > *,
  > div > ul > li {
    transition: 0.5s;
  }

  &:hover {
    border-color: white;

    > *,
    > div > ul > li {
      color: white;
    }
  }

  > div {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    > img {
      width: 50%;
    }

    > ul {
      width: 50%;
      list-style: none;
      padding-left: 10px;

      > li {
        padding: 5px 0px;
        font-size: 14px;
        color: #77777a;
      }
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0px;
  color: #77777a;
`
