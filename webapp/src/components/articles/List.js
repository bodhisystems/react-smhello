// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {getList} from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
class List extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <div>
        <h1>Articles</h1>

        <p>
          <Link to={routes.articles.create}>Create</Link>
        </p>

        {/* List Articles */}
        {
          this.props.articles.isLoading
            ?
            <Loading message="loading articles..."/>
            :
            (
              this.props.articles.list.length > 0
                ?
                <ul>
                  {this.props.articles.list.map(article => (
                    <li key={article.id}>
                      <Item article={article}/>
                    </li>
                  ))}
                </ul>
                :
                <p>No article to show.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  articles: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function articlesState(state) {
  return {
    articles: state.articles
  }
}

export default connect(articlesState, {getList})(List)
