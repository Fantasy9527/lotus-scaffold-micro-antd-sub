
import Mock, { Random } from 'mockjs'
// import API_PATH from '@common/apiPath'
import API_PATH from '../../common/apiPath'

const proxy = {
  ['POST:' + API_PATH.NOTICE_MANAGER_DELETE_TOP]: function (req, res) {
    let data = Mock.mock({
      'code': 0,
      'errmsg': 'mock',
      'data': [
        {
          'gmtCreate': 'mock',
          'createdBy': 'mock',
          'gmtModify': 'mock',
          'modifiedBy': 'mock',
          'del': 'mock'
        }
      ]
    })
    return [200, data]
  }
}

export default proxy
