import styled from 'styled-components'

export const Item = styled.div`
  border: 1px solid #55555a;
  width: 430px;
  margin-bottom: 20px;
  padding: 20px 30px;
  transition: 0.5s;

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

    > div > ul > li > a {
      background-color: white;
    }

    > div > ul > li > a:hover {
      background-color: #ccc;
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
      display: flex;
      flex-direction: column;
      align-content: space-between;

      > li {
        width: 100%;
        padding: 5px 0px;
        font-size: 14px;
        color: #77777a;

        .SeeMore {
          cursor: pointer;
          text-decoration: none;
          margin-top: 10px;
          width: 100%;
          display: block;
          text-transform: uppercase;
          font-weight: bold;
          text-align: center;
          background-color: #77777a;
          color: #333333;
          border-radius: 1px;
          padding: 5px;
        }
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
