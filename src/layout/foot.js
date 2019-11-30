import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default function Foot(){

  return (
    <Footer style={{ color: '#787d82', fontSize: '12px' }}>
      <div className="footer_link">
        <ul>
          <li><a href="//www.imooc.com/" target="_blank">网站首页</a></li>
          <li><a href="//www.imooc.com/index/companytrain" target="_blank" title="企业合作">企业合作</a></li>
          <li><a href="//www.imooc.com/about/job" target="_blank">人才招聘</a></li>
          <li> <a href="//www.imooc.com/about/contact" target="_blank">联系我们</a></li>
          <li> <a href="//www.imooc.com/about/recruit" target="_blank">讲师招募</a></li>
            <li> <a href="//www.imooc.com/help/cate/19" target="_blank">帮助中心</a></li>
          <li> <a href="//www.imooc.com/user/feedback?coding" target="_blank">意见反馈</a></li>
          <li><a href="http://daxue.imooc.com/" target="_blank">皓诚大学</a></li>
          <li><a href="//git.imooc.com" target="_blank">代码托管</a></li>
          <li> <a href="//www.imooc.com/about/friendly" target="_blank">友情链接</a></li>
          <li><a href="http://www.imooc.com/about/us" target="_blank">关于我们</a></li>
        </ul>
      </div>
      <p>
        &copy;&nbsp;2019&nbsp;hcxs.com&nbsp;&nbsp;粤ICP备 12003892号-11 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030151" style={{ color: '#93999F' }}><i className="beian"></i>京公网安备11010802030151号</a> 成都皓诚文化传媒有限公司 <a href="/license" target="_blank" style={{ color: '#93999F' }}>营业执照</a>
      </p>
    </Footer>
  )
}