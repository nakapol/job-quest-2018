import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.alignX};
  align-items: ${props => props.alignY};
  padding: ${props =>
    `${props.pdtop}px ${props.pdright}px ${props.pdbottom}px ${
      props.pdleft
    }px`};

  margin: ${props =>
    `${props.mgtop}px ${props.mgright}px ${props.mgbottom}px ${
      props.mgleft
    }px`};

  > div:nth-child(1) {
    flex: 1;
  }

  > div:nth-child(2) {
    flex: 2;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

Row.defaultProps = {
  alignX: 'flex-start',
  alignY: 'flex-start',
  pdtop: 0,
  pdbottom: 0,
  pdleft: 0,
  pdright: 0,
  mgtop: 0,
  mgbottom: 0,
  mgleft: 0,
  mgright: 0
}
