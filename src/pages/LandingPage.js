import React, { Component } from 'react'

import {
  Button,
  Card,
  Col,
  Container,
  Divider,
  Font,
  FormSegment,
  Input,
  Loading,
  Row,
  Space
} from '../component_base'

import apiGetJoke from '../api/apiGetJoke'

const checkInput = value => {
  if (value === null) {
    return false
  } else if (value.trim() === '') {
    return false
  } else {
    return true
  }
}

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      jokes: [],
      firstName: '',
      lastName: '',
      jokeCount: '5'
    }
  }

  componentDidMount = async () => {
    const response = await apiGetJoke(50)

    if (response.type === 'success') {
      this.setState({ loading: false, jokes: response.value })
    }
  }

  handleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRefetchJoke = async () => {
    const { firstName, lastName, jokeCount } = this.state

    if (
      !checkInput(firstName) ||
      !checkInput(lastName) ||
      !checkInput(jokeCount)
    ) {
      alert('Please fill up this form.')

      return
    }

    this.handleLoading()

    const response = await apiGetJoke(jokeCount, firstName, lastName)

    if (response.type === 'success') {
      this.setState({ loading: false, jokes: response.value })
    }
  }

  render() {
    const { loading, jokes, firstName, lastName, jokeCount } = this.state

    console.log('this.state :', this.state)

    return (
      <Container>
        <Row>
          <FormSegment>
            <Col
              pdleft={40}
              pdright={40}
              pdtop={30}
              pdbottom={30}
              alignX="center"
              alignY="center"
            >
              <Space>
                <Space>
                  <Font.Content>First Name</Font.Content>
                </Space>
                <Space mgtop={10}>
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    onChange={e => this.handleInput(e)}
                    value={firstName}
                  />
                </Space>
              </Space>

              <Space>
                <Space mgtop={20}>
                  <Font.Content>Last Name</Font.Content>
                </Space>
                <Space mgtop={10}>
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={e => this.handleInput(e)}
                    value={lastName}
                  />
                </Space>
              </Space>

              <Space>
                <Space mgtop={20}>
                  <Font.Content>Joke Count</Font.Content>
                </Space>
                <Space mgtop={10}>
                  <Input
                    name="jokeCount"
                    placeholder="Joke Count"
                    onChange={e => this.handleInput(e)}
                    value={jokeCount}
                  />
                </Space>
              </Space>

              <Space mgtop={30}>
                <Button
                  onClick={() => {
                    this.handleRefetchJoke()
                  }}
                >
                  Done
                </Button>
              </Space>
            </Col>

            <Col alignY="center">
              <Divider />
            </Col>
          </FormSegment>

          <Space pdleft={40} pdright={40} pdtop={30} pdbottom={30}>
            <Space>
              <Font.Header>Jokes</Font.Header>
            </Space>

            {loading ? (
              <Col alignX="center" mgtop={30}>
                <Loading />
              </Col>
            ) : (
              <Space>
                {jokes.map((detail, index) => {
                  return (
                    <Space key={index} mgtop={index === 0 ? 20 : 0}>
                      <Card>
                        <Space>
                          <Font.Label title={1}>
                            categories:{' '}
                            <Font.Label>{detail.categories.join()}</Font.Label>
                          </Font.Label>
                        </Space>

                        <Space mgtop={20}>
                          <Font.Content>{detail.joke}</Font.Content>
                        </Space>
                      </Card>
                    </Space>
                  )
                })}
              </Space>
            )}
          </Space>
        </Row>
      </Container>
    )
  }
}

export default LandingPage
