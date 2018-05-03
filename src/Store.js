import { createStore, combineReducers } from 'redux'

const initialState = {
  namespace: 'base', // 全局Store的命名空间,每个项目必须不一样.请记得修改
  count: 0,
  refresh: 0
}


let menuDate = {
  name: '列表页',
  icon: 'table',
  path: 'list',
  children: [
    {
      name: '查询表格',
      path: 'table-list',
    },
    {
      name: '标准列表',
      path: 'basic-list',
    },
    {
      name: '卡片列表',
      path: 'card-list',
    },
    {
      name: '搜索列表',
      path: 'search',
      children: [
        {
          name: '搜索列表（文章）',
          path: 'articles',
        },
        {
          name: '搜索列表（项目）',
          path: 'projects',
        },
        {
          name: '搜索列表（应用）',
          path: 'applications',
        },
      ],
    },
  ],
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
combineReducers(menu, reducer)
export const storeInstance = createStore(reducer)
