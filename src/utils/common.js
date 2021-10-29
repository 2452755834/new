/**
 * @Description: 首页mock数据
 * @author 李静 on 2020/07/07
 * @modify 李静 on 2020/07/07
 */

// 列表成功数据
const listSuccess = {
  'header': {
    'default': {
      'success': 'true',
      'message': ''
    }
  },
  'body': {
    'default': {}
  }
};

// 列表失败数据
const listError = {
  'header': {
    'default': {
      'success': 'false',
      'message': '服务器错误'
    }
  }
};

// 详情成功数据
const detailSuccess = {
  'header': {
    'default': {
      'success': 'true',
      'message': '第三方接口单位配置信息查询成功！'
    }
  },
  'body': {
    'default': {}
  }
};

// 详情失败数据
const detailError = {
  'header': {
    'default': {
      'success': 'false',
      'message': 'error'
    }
  },
  'body': {}
};

export {
  listSuccess,
  listError,
  detailSuccess,
  detailError,
};

