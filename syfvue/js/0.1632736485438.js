(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./public/sso.js":
/*!***********************!*\
  !*** ./public/sso.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var host = window.location.protocol + '//' + window.location.hostname; // 当前后端不在同一个服务器时，需要指定host地址\n//let host = \"http://192.168.1.185\";\n// combine为true时五合一部署, 为false时分五个服务部署\n// var combine = true;\n// var defaultModulePortMap = {\n//   form: '30123',\n//   portal: '30123',\n//   bpmRunTime: '30123',\n//   bpmModel: '30123',\n//   uc: '30123'\n// };\n\nwindow.getModuleRootUrl = function () {\n  return 'http://59.61.83.130:30123';\n}; //30080修改为相应的前端端口号 否则部分接口可能报错\n//manage为管理端部署的地址 front为申报端部署的地址 如果ip相同只需修改对应的端口号；\n// ip不同，将host修改为对应的ip即可\n\n\nwindow.context = {\n  manage: host + ':30080/symvue',\n  //管理端页面\n  front: host + ':30080/syfvue',\n  //审批端前端页面\n  // front: host+':30080/sydeclare',//申报端前端页面\n  mobile: host + ':30080/mobilevue',\n  //手机端页面\n  form: window.getModuleRootUrl('form'),\n  portal: window.getModuleRootUrl('portal'),\n  bpmRunTime: window.getModuleRootUrl('bpmRunTime'),\n  bpmModel: window.getModuleRootUrl('bpmModel'),\n  uc: window.getModuleRootUrl('uc'),\n  mc: window.getModuleRootUrl('mc')\n}; // 单点配置\n\nwindow.ssoConfig = {\n  mode: '',\n  // 空则不使用单点  支持的模式有  cas oauth basic\n  url: 'http://127.0.0.1:8092/oauth/authorize',\n  clientId: 'eip7',\n  // oauth模式下需要提供\n  logout: 'http://127.0.0.1:8092/logout'\n};\n/**\r\n * @Description: 项目可配置的配置项\r\n * @author 李杰敏 on 2020/07/02\r\n * @modify 李静 on 2020/07/15\r\n */\n\nwindow.syncProjectProperties = {\n  /**\r\n   * 后端api请求地址(测试环境)\r\n   * */\n  // BASE_URL: 'http://192.168.2.74:27806/',\n  // BASE_URL: 'http://192.168.18.43:30806/', // api文档上的地址\n  // BASE_URL: 'http://192.168.18.162:30806/', // 鸿钦本地地址\n  // BASE_URL: 'http://192.168.18.43:30806/', // 闫志鹏本地地址\n  // BASE_URL: 'http://59.61.83.130:29087/', // 开发服务器\n  // BASE_URL: 'http://59.61.83.130:30806/', // 开发服务器\n  // BASE_URL: 'http://59.61.83.130:29088/', // 测试服务器\n  BASE_URL: 'http://59.61.83.130:30123/',\n  // 开发服务器\n  // BASE_URL: 'http://59.61.83.130:29087/', // 测试服务器\n  // BASE_URL: 'http://192.168.18.98:30806/', // 洪老师\n\n  /**\r\n   * 是否启用mock\r\n   * 可选参数: true(开启) / false(关闭)\r\n   * */\n  IS_MOCK: false,\n\n  /**\r\n   * 是否 启用 前端调试模式\r\n   * （包括：是否加签、请求API地址是否完整）是否输出调试控制台 加签前后报文打印\r\n   * 可选参数: true(开启) / false(关闭)\r\n   * */\n  IS_DEVELOPING: true,\n\n  /**\r\n   * 日志输出级别\r\n   * 可选参数: log(信息) / warn(警告) / error(错误)\r\n   * */\n  LOG_LEVEL: 'log',\n\n  /**\r\n   * 按钮权限开关\r\n   * */\n  IS_BTN_AUTH: true,\n\n  /**\r\n   * 项目 APPID\r\n   * */\n  CYFC_APPID: 'cyfc_cph_appid',\n\n  /**\r\n   * 批量处理时间\r\n   * */\n  BATCH_HANDLE_TIME: '3',\n\n  /**\r\n   * 登录超时是否跳转\r\n   * */\n  NO_TIMEOUT_JUMP: true,\n\n  /**\r\n   * @Description: 自定义登录超时拦截方法\r\n   * @author 洪连灯 on 2020/9/15\r\n   */\n  // loginTimeoutInterceptors () {\n  //   console.log('自定义登录超时拦截');\n  // }\n  // 审批端登录页 验证码是否显示\n  VALID_CODE_SHOW: true,\n  // 0 开放所有路由地址，1 仅开放申报端路由，2 仅开放审批端路由地址\n  APP_TYPE: 0,\n  // 申报端开启登录页 0关闭 1开启\n  OPEN_LOGIN: 1,\n  // 项目名称\n  PROJ_NAME: '重庆高新区产业扶持综合服务云平台',\n  REVIEWER_PROJ_NAME: '重庆高新区产业扶持综合服务云平台',\n  // 网站信息\n  projectInfo: '“一站申报、一网通办”，通过平台实现企业少跑腿、扶持提效率、数据助规划，优化高新区营商环境，促进辖区产业快速发展。',\n  //  项目英文\n  // projectNameEng: 'INDUSTRIAL SUPPORT FUNDS CLOUD PLATFORM',\n  projectNameEng: 'Comprehensive Service Cloud Platform for Industry Support',\n  // 联系我们\n  home_contact_us: [{\n    label: '单位名称',\n    value: '重庆高新区管委会财政局'\n  }, {\n    label: '详细地址',\n    value: '重庆高新区高新大道6号'\n  }, {\n    label: '联系电话',\n    value: '023-6860627'\n  }, {\n    label: '邮政编码',\n    value: '401329'\n  }],\n  // 相关链接\n  home_related_link: [{\n    label: '重庆市人民政府网',\n    value: 'http://www.cq.gov.cn/'\n  }, {\n    label: '重庆高新区网站',\n    value: 'http://gxq.cq.gov.cn/'\n  }, {\n    label: '信用中国(重庆)',\n    value: 'https://www.xycq.gov.cn/'\n  }],\n  home_website_number: [{\n    label: '网站标识码',\n    value: '5000000095'\n  }, {\n    label: 'ICP备案',\n    value: '渝ICP备05003300号',\n    url: 'https://beian.miit.gov.cn/#/Integrated/index'\n  }, {\n    label: '国际联网备案',\n    value: '渝公网安备 50010302000814号',\n    url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50010702500242'\n  }],\n  // 联系方式\n  contactWays: [{\n    code_desc: '正常工作日',\n    code_value: '08:30-18:00'\n  }, {\n    code_desc: '技术支持电话',\n    code_value: '' //--待定奇确认\n\n  }, {\n    code_desc: 'QQ群技术咨询',\n    code_value: '1033128623'\n  }],\n  // 渝快办访问地址\n  ykbUrl: 'http://zwfw.cq.gov.cn/gxq/public/index?record=istrue',\n  isIndustryMode: false,\n  // 判断展现模式 true行业模式 false扶持类型模式\n  searchPlaceholder: '请在此输入公告/项目/政策等内容',\n\n  /**\r\n   * @Description: // 项目综合查询地址\r\n   * @author 陈亮 on 2020/12/22\r\n   */\n  projectSynthesisUrl: 'http://127.0.0.1:30080/fvue/task/1350015678211559424/0',\n  // usingHelpUrl: 'http://127.0.0.1:30080/front108/#/using-help',\n  // 工作台登出后跳转地址（门户地址 / 登录页）\n  portalUrl: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/front108/#/home',\n  // 二次发送短信倒计时\n  secondSmsTime: 60,\n  // 邮箱正则校验\n  emailRegular: /^([0-9A-Za-z\\-_\\\\.]+)@([0-9a-z-_]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/g,\n  // 手机号统一正则表达式\n  phoneRegular: /^(?:(?:\\+|00)86)?1\\d{10}$/\n};\n\n//# sourceURL=webpack:///./public/sso.js?");

/***/ })

}]);