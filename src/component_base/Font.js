import styled from 'styled-components'

const Header = styled.span`
  font-size: 48px;
  font-weight: 500;
  line-height: ${48 * 1.5}px;
  color: #2e2e2e;
`

const Content = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: ${24 * 1.5}px;
  color: #3a3a3a;
`

const Label = styled.span`
  font-weight: ${props => (props.title === 1 ? 500 : 400)};
  color: ${props => (props.title === 1 ? '#4a4a4a' : '#c7c7c8')};
`

Label.defaultProps = {
  title: 0
}

const Font = {
  Header,
  Content,
  Label
}

export { Font }
