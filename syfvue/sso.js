var host = window.location.protocol + '//' + window.location.hostname;
// 当前后端不在同一个服务器时，需要指定host地址
//let host = "http://192.168.1.185";
// combine为true时五合一部署, 为false时分五个服务部署
// var combine = true;
// var defaultModulePortMap = {
//   form: '30123',
//   portal: '30123',
//   bpmRunTime: '30123',
//   bpmModel: '30123',
//   uc: '30123'
// };
window.getModuleRootUrl = function () {
  return 'http://59.61.83.130:30123';

};

//30080修改为相应的前端端口号 否则部分接口可能报错
//manage为管理端部署的地址 front为申报端部署的地址 如果ip相同只需修改对应的端口号；
// ip不同，将host修改为对应的ip即可

window.context = {
  manage: host + ':30080/symvue', //管理端页面
  front: host + ':30080/syfvue',//审批端前端页面
  // front: host+':30080/sydeclare',//申报端前端页面
  mobile: host + ':30080/mobilevue', //手机端页面
  form: window.getModuleRootUrl('form'),
  portal: window.getModuleRootUrl('portal'),
  bpmRunTime: window.getModuleRootUrl('bpmRunTime'),
  bpmModel: window.getModuleRootUrl('bpmModel'),
  uc: window.getModuleRootUrl('uc'),
  mc: window.getModuleRootUrl('mc')

};

// 单点配置
window.ssoConfig = {
  mode: '', // 空则不使用单点  支持的模式有  cas oauth basic
  url: 'http://127.0.0.1:8092/oauth/authorize',
  clientId: 'eip7',// oauth模式下需要提供
  logout: 'http://127.0.0.1:8092/logout'
};

/**
 * @Description: 项目可配置的配置项
 * @author 李杰敏 on 2020/07/02
 * @modify 李静 on 2020/07/15
 */
window.syncProjectProperties = {
  /**
   * 后端api请求地址(测试环境)
   * */
  // BASE_URL: 'http://192.168.2.74:27806/',
  // BASE_URL: 'http://192.168.18.43:30806/', // api文档上的地址
  // BASE_URL: 'http://192.168.18.162:30806/', // 鸿钦本地地址
  // BASE_URL: 'http://192.168.18.43:30806/', // 闫志鹏本地地址
  // BASE_URL: 'http://59.61.83.130:29087/', // 开发服务器
  // BASE_URL: 'http://59.61.83.130:30806/', // 开发服务器
  // BASE_URL: 'http://59.61.83.130:29088/', // 测试服务器
  BASE_URL: 'http://59.61.83.130:30123/', // 开发服务器
  // BASE_URL: 'http://59.61.83.130:29087/', // 测试服务器
  // BASE_URL: 'http://192.168.18.98:30806/', // 洪老师

  /**
   * 是否启用mock
   * 可选参数: true(开启) / false(关闭)
   * */
  IS_MOCK: false,
  /**
   * 是否 启用 前端调试模式
   * （包括：是否加签、请求API地址是否完整）是否输出调试控制台 加签前后报文打印
   * 可选参数: true(开启) / false(关闭)
   * */
  IS_DEVELOPING: true,
  /**
   * 日志输出级别
   * 可选参数: log(信息) / warn(警告) / error(错误)
   * */
  LOG_LEVEL: 'log',

  /**
   * 按钮权限开关
   * */
  IS_BTN_AUTH: true,


  /**
   * 项目 APPID
   * */
  CYFC_APPID: 'cyfc_cph_appid',
  /**
   * 批量处理时间
   * */
  BATCH_HANDLE_TIME:'3',
  /**
   * 登录超时是否跳转
   * */
  NO_TIMEOUT_JUMP: true,
  /**
   * @Description: 自定义登录超时拦截方法
   * @author 洪连灯 on 2020/9/15
   */
  // loginTimeoutInterceptors () {
  //   console.log('自定义登录超时拦截');
  // }

  // 审批端登录页 验证码是否显示
  VALID_CODE_SHOW: true,
  // 0 开放所有路由地址，1 仅开放申报端路由，2 仅开放审批端路由地址
  APP_TYPE: 0,
  // 申报端开启登录页 0关闭 1开启
  OPEN_LOGIN: 1,

  // 项目名称
  PROJ_NAME: '重庆高新区产业扶持综合服务云平台',
  REVIEWER_PROJ_NAME: '重庆高新区产业扶持综合服务云平台',
  // 网站信息
  projectInfo: '“一站申报、一网通办”，通过平台实现企业少跑腿、扶持提效率、数据助规划，优化高新区营商环境，促进辖区产业快速发展。',
  //  项目英文
  // projectNameEng: 'INDUSTRIAL SUPPORT FUNDS CLOUD PLATFORM',
  projectNameEng: 'Comprehensive Service Cloud Platform for Industry Support',
  // 联系我们
  home_contact_us: [{
    label: '单位名称',
    value: '重庆高新区管委会财政局'
  },
    {
      label: '详细地址',
      value: '重庆高新区高新大道6号'
    },
    {
      label: '联系电话',
      value: '023-6860627'
    },
    {
      label: '邮政编码',
      value: '401329'
    }],
  // 相关链接
  home_related_link: [
    {
      label: '重庆市人民政府网',
      value: 'http://www.cq.gov.cn/'
    },
    {
      label: '重庆高新区网站',
      value: 'http://gxq.cq.gov.cn/'
    },
    {
      label: '信用中国(重庆)',
      value: 'https://www.xycq.gov.cn/'
    }
  ],
  home_website_number: [
    {
      label: '网站标识码',
      value: '5000000095'
    },
    {
      label: 'ICP备案',
      value: '渝ICP备05003300号',
      url: 'https://beian.miit.gov.cn/#/Integrated/index'
    },
    {
      label: '国际联网备案',
      value: '渝公网安备 50010302000814号',
      url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50010702500242'
    }
  ],
  // 联系方式
  contactWays: [
    {
      code_desc: '正常工作日',
      code_value: '08:30-18:00'
    },
    {
      code_desc: '技术支持电话',
      code_value: ''//--待定奇确认
    },
    {
      code_desc: 'QQ群技术咨询',
      code_value: '1033128623'
    }
  ],
  // 渝快办访问地址
  ykbUrl: 'http://zwfw.cq.gov.cn/gxq/public/index?record=istrue',
  isIndustryMode: false, // 判断展现模式 true行业模式 false扶持类型模式
  searchPlaceholder: '请在此输入公告/项目/政策等内容',

  /**
   * @Description: // 项目综合查询地址
   * @author 陈亮 on 2020/12/22
   */
  projectSynthesisUrl: 'http://127.0.0.1:30080/fvue/task/1350015678211559424/0',
  // usingHelpUrl: 'http://127.0.0.1:30080/front108/#/using-help',
  // 工作台登出后跳转地址（门户地址 / 登录页）
  portalUrl: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/front108/#/home',

    // 二次发送短信倒计时
    secondSmsTime: 60,

    // 邮箱正则校验
    emailRegular: /^([0-9A-Za-z\-_\\.]+)@([0-9a-z-_]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g ,
    // 手机号统一正则表达式
    phoneRegular: /^(?:(?:\+|00)86)?1\d{10}$/
};

