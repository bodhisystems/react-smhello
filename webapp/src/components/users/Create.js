// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {create} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Create extends Component {

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('Creating user, please wait...')

    // Call API
    this.props.create(this.state)
      .then(response => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        })

        this.props.messageShow('User created successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error creating user. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }

  render() {
    return (
      <div>
        <h1>User Create</h1>

        <p>
          <Link to={routes.users.list}>Back</Link>
        </p>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="Your first name"
            required="required"
            value={this.state.firstName}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Your last name"
            required="required"
            value={this.state.lastName}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Email */}
          <textarea
            name="email"
            placeholder="Your email"
            required="required"
            value={this.state.email}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Phone */}
          <textarea
            name="phone"
            placeholder="Your phone"
            required="required"
            value={this.state.phone}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Submit */}
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

// Component Properties
Create.propTypes = {
  create: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {create, messageShow, messageHide})(Create)
