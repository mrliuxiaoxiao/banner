import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import tu1 from './img/login_app2.png'
import tu2 from './img/bingfeng_de_hedao.jpg'
import tu3 from './img/huoche_tiegui-005.jpg'
import tu4 from './img/huoche_tiegui.jpg'

import Connect from './Carousel/Carousel'


class App extends Component {

  render() {
    return (
      <div >
        {/* mywidth:轮播器的宽 
            myheight：轮播器的高
            leftbutton:侧边按钮的高
            carouselTime：轮播间隔时间
            speedTime:轮播速度
            interval：轮播开关 true开 false关
            bottombutton:控制底部按钮的显现 true显现 false不显现
            leftbuttonitme:控制侧边按钮的显现 true显现 false不显现 */}
        <Connect mywidth='1200px' myheight='400px' leftbutton='50px' carouselTime="2000" speedTime="1000" 
        interval={false} bottombutton={true} leftbuttonitme={true} >
          <div >{tu1}</div>
          <div >{tu2}</div>
          <div >{tu3}</div>
          <div >{tu4}</div>
        </Connect>
      </div>
    );
  }
}

export default App;
