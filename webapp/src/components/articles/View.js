// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {get} from './api/actions'
import Loading from '../common/Loading'

// Component
class View extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>Article</h1>

        <p>
          <Link to={routes.articles.list}>Back</Link>
        </p>

        {/* Single articles */}
        {
          this.props.article.isLoading
            ?
            <Loading message="loading article details..."/>
            :
            (
              this.props.article.item.id > 0
                ?
                <div>
                  <h1>"{this.props.article.item.title}"</h1>
                  <h4> - {this.props.article.item.title}</h4>
                  <div> {this.props.article.item.body} </div>
                </div>
                :
                <p>Article does not exists.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
View.propTypes = {
  article: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
  return {
    article: state.article
  }
}

export default connect(viewState, {get})(View)
