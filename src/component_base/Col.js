import styled from 'styled-components'

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.alignY};
  align-items: ${props => props.alignX};
  padding: ${props =>
    `${props.pdtop}px ${props.pdright}px ${props.pdbottom}px ${
      props.pdleft
    }px`};

  margin: ${props =>
    `${props.mgtop}px ${props.mgright}px ${props.mgbottom}px ${
      props.mgleft
    }px`};
`

Col.defaultProps = {
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
