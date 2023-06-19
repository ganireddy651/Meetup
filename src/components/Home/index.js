import {Component} from 'react'
import Header from '../Header'
import Register from '../Register'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Home extends Component {
  onClickNavigateToRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-route-container">
          <h1 className="main-heading">Welcome to Meetup</h1>
          <p className="home-para">Please register for the topic</p>
          <div className="button-container">
            <button
              onClick={this.onClickNavigateToRegister}
              className="button-register"
              type="button"
            >
              Register
            </button>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </>
    )
  }
}
export default Home
