
import Mock, { Random } from 'mockjs'

import API_PATH from 'Src/common/apiPath'

const proxy = {
  ['POST:' + API_PATH.WORKFLOW_MANAGER_ADD_BID_ITEM]: function (req, res) {
    let data = Mock.mock({
      'code': 0,
      'errormsg': 'mock',
      'data': [
        {
          'id': 'mock',
          'gmtCreate': 'mock',
          'createdBy': 'mock',
          'gmtModify': 'mock',
          'modifiedBy': 'mock',
          'del': 14
        }
      ]
    })
    return [200, data]
  }
}

export default proxy
