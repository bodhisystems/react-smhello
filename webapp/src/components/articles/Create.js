// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// App Imports
import {routes} from '../../setup/routes'
import {create} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Create extends Component {

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('Creating article, please wait...')

    // Call API
    this.props.create(this.state)
      .then(response => {
        this.setState({
          title: '',
          subtitle: '',
          body: ''
        })

        this.props.messageShow('Article created successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error creating article. Please try again.')
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Article Create</h1>

        <p>
          <Link to={routes.articles.list}>Back</Link>
        </p>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            required="required"
            value={this.state.title}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Subtitle */}
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            value={this.state.subtitle}
            onChange={this.onChange}
          />

          <br/><br/>

          <ReactQuill name="body" theme="snow" value={this.state.body} onChange={this.handleChange} />

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
