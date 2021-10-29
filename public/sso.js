/**
 * @Description: 项目可配置的配置项
 * @author 李杰敏 on 2020/07/02
 * @modify 李静 on 2020/07/15
 */
function importConfig() {

}
export default importConfig
window.syncProjectProperties = {
  /**
   * 后端api请求地址(测试环境)
   * */
  // BASE_URL: 'http://59.61.83.130:27807/',
  // 开发环境
  BASE_URL: 'http://59.61.83.130:30806/',
  // 测试环境
  // BASE_URL: 'http://59.61.83.130:29087/',
  // BASE_URL: 'http://59.61.83.130:30806/',
  // BASE_URL: 'http://localhost:30806/',

  // BASE_URL: 'http://192.168.18.162:30806/',
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
   * 修改项目名称
   * */
  PROJ_NAME: '重庆高新区产业扶持综合服务云平台',
  /**
   * 按钮权限开关
   * */
  IS_BTN_AUTH: false,
  //  网站配置信息
  projectNameEng: 'Supporting industrial comprehensive service cloud platform',
  REVIEWER_PROJ_NAME: '重庆高新区产业扶持综合服务云平台',

  home_contact_us: [{
    label: '联系我们',
    value: '重庆高新区管委会'
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
  home_related_link: [
    {
      label: '中国政府网备份',
      value: 'http://www.gov.cn/'
    },
    {
      label: '重庆市人民政府网',
      value: 'http://www.cq.gov.cn/'
    },
    {
      label: '重庆市税务局',
      value: 'http://chongqing.chinatax.gov.cn/cqtax/'
    }
  ],
  home_website_number: [
    {
      label: '网站标识码',
      value: '5000000095'
    },
    {
      label: 'ICP备案',
      value: '渝ICP备05003300号'
    },
    {
      label: '国际联网备案',
      value: '渝公网安备 50010302000814号'
    },
  ],
  contactWays: [
    {
      code_desc: '正常工作日',
      code_value: '08:30-18:00'
    },
    {
      code_desc: '技术支持电话',
      code_value: '0592-5397711'
    },
    {
      code_desc: 'QQ群技术咨询',
      code_value: '976701170'
    },
  ],
  /**
   * @Description: // 文章预览地址
   * @author 陈亮 on 2020/12/22
   */
  // articleUrl: 'http://localhost:8081'
  articleUrl: 'http://59.61.83.130:30080/front108'

};
