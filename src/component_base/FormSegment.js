import styled from 'styled-components'

export const FormSegment = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;

  > div:nth-child(1) {
    flex: 1;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: max-content;
    background-color: #ffffff;

    > div:nth-child(1) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0px;
      box-shadow: 0px 0px 8px 2px #dfdfdf;

      > div {
        margin: 15px 10px;
      }
      > div > div {
        margin: 0px;
      }

      > div:last-child {
        margin: 10px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      > div > div > span {
        font-size: 14px;
      }
    }

    > div:nth-child(2) {
      display: none;
    }
  }
`
