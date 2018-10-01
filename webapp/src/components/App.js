// Imports
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// App Imports
import {routes} from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/Home'
import About from './home/About'
import ThoughtsList from './thoughts/List'
import ThoughtsCreate from './thoughts/Create'
import ThoughtsView from './thoughts/View'
import UsersList from './users/List'
import UsersCreate from './users/Create'
import UsersView from './users/View'
import ArticlesList from './articles/List'
import ArticlesCreate from './articles/Create'
import ArticlesView from './articles/View'

// Component
const App = () => (
  <Layout>
    <Switch>
      {/* Common */}
      <Route path={routes.home} component={Home} exact/>
      <Route path={routes.about} component={About}/>

      {/* Thoughts */}
      <Route path={routes.thoughts.list} component={ThoughtsList} exact/>
      <Route path={routes.thoughts.create} component={ThoughtsCreate}/>
      <Route path={routes.thoughts.view(':id')} component={ThoughtsView}/>

      {/* Users */}
      <Route path={routes.users.list} component={UsersList} exact/>
      <Route path={routes.users.create} component={UsersCreate}/>
      <Route path={routes.users.view(':id')} component={UsersView}/>

      {/* Articles */}
      <Route path={routes.articles.list} component={ArticlesList} exact/>
      <Route path={routes.articles.create} component={ArticlesCreate}/>
      <Route path={routes.articles.view(':id')} component={ArticlesView}/>
    </Switch>
  </Layout>
)

export default App
