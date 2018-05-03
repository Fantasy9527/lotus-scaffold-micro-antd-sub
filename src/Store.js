import { createStore, combineReducers } from 'redux'
import menuDate from "./common/menu"
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const location = history.location
history.listen(function (location, action) {
  // youAreHere.textContent = location.pathname
  console.log("网址改变了,我这里已经知道")
  console.log(location, action)

})

const initialState = { 
  count: 0,
  refresh: 0
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'REFRESH':
      return {
        ...state,
        refresh: state.refresh + 1
      }
    default:
      return state
  }
}

function menu(){
  return menuDate
}

function to(state,action){
  if (action.type === 'to'){
    history.push(action.path)
  }
  return {}
}

export const storeInstance = createStore(combineReducers({ namespace: () => 'list', menu, reducer, to}))
