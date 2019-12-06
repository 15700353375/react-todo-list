// import App from './App';
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home'
import App from './App'
import Main from './view/main'
import Advanced from './view/advanced'
import TodoList from './view/todoList'

// 核心概念
import LifeCircle from './view/main/lifeCircle'

// 路由相关
import StudyRoute from './view/route/studyRoute'

const routes = [
  {
    path: '/',
    component: App,
    breadcrumbName:"root",
    indexRoute: {  component: Home }, 
    childRoutes: [
      { path: 'main', breadcrumbName:"main", component: Main,
        childRoutes: [
          {
            path: 'lifeCircle', breadcrumbName:"lifeCircle", component: LifeCircle,
          }
        ]
      },
      { path: 'advanced', breadcrumbName:"advanced", component: Advanced},
      { path: 'todoList', breadcrumbName:"todoList", component: TodoList },
      {
        path: 'highLevel', breadcrumbName:"highLevel",
        childRoutes: [
          {
            // path: 'chess', breadcrumbName:"chess", component: Chess,
          }
        ]
      },
      {
        path: 'route', breadcrumbName:"route",
        childRoutes: [
          {
            path: 'studyRoute', breadcrumbName:"studyRoute", component: StudyRoute,
          }
        ]
      }
    ]
  }
]


export default routes