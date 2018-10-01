// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {remove, getList} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Item extends Component {

  remove = (id) => {
    let check = window.confirm('Are you sure you want to delete this article?')
    if (check) {
      this.props.messageHide()

      this.props.messageShow('Deleting article, please wait...')

      this.props.remove({id})
        .then(response => {
          // Refresh thoughts list
          this.props.getList()

          this.props.messageShow('Article deleted successfully.')
        })
        .catch(error => {
          this.props.messageShow('Error deleting article. Please try again.')
        })
    }
  }

  render() {
    const {id, title, subtitle} = this.props.article

    return (
      <div>
        {title}
        <br/> {subtitle}

        &nbsp;&nbsp;

        <Link to={routes.articles.view(id)}>
          <button>View</button>
        </Link>

        &nbsp;

        <button onClick={this.remove.bind(this, id)}>Delete</button>
      </div>
    )
  }
}

// Component Properties
Item.propTypes = {
  article: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {remove, getList, messageShow, messageHide})(Item)
