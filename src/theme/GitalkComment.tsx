import React, { Component } from 'react'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitalkComment extends Component {
  componentDidMount() {
    var gitalk = new Gitalk({
      clientID: '54aafde3eb7291b3b28d',
      clientSecret: '336373fcdef4b031ecc887d3803424bf7c2cbd4e',
      repo: 'gin-blog', // 仓库名称
      owner: 'ginlink', // 仓库作者
      admin: ['ginlink'],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
  render() {
    return <div id="gitalk-container"></div>
  }
}
export default GitalkComment
