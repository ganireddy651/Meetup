import './index.css'
import Header from '../Header'

const Register = () => (
  <>
    <Header />
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
        alt="website register"
      />
      <form>
        <h1 className="form-heading">Let us join</h1>
        <div className="input-container">
          <label className="label" htmlFor="name">
            NAME
          </label>
          <br />
          <input className="input" type="text" />
        </div>
      </form>
    </div>
  </>
)

export default Register
