import React, { Component } from 'react'
import CarouselPage from './CarouselPage'
import { CSSTransition } from 'react-transition-group'
import './Carousel.css'
let myVar;
 {/* mywidth:轮播器的宽 
     myheight：轮播器的高
     leftbutton:侧边按钮的高
     carouselTime：轮播间隔时间
     speedTime:轮播速度
     interval：轮播开关 true开 false关
     bottombutton:控制底部按钮的显现 true显现 false不显现
     leftbuttonitme:控制侧边按钮的显现 true显现 false不显现 
    */}
class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itme: 0,
            show: true,
            direction: true, //true正向，false反响
            record: 0
        }
        if (this.props.interval) {
            myVar = setInterval(() => {
                this.state.itme < 3 ? this.setState({ itme: this.state.itme + 1, show: !this.state.show, direction: true, record: this.state.itme }) : this.setState({ itme: 0, show: !this.state.show, direction: true, record: this.state.itme });
                // this.setState({ show: !this.state.show })
            }, this.props.carouselTime)
        }

    }

    Subtitle(value) {
        if (value !== this.state.itme) {
            clearInterval(myVar);
            if (this.props.interval) {
                myVar = setInterval(() => {
                    this.state.itme < 3 ? this.setState({ itme: this.state.itme + 1, show: !this.state.show, direction: true, record: this.state.itme }) : this.setState({ itme: 0, show: !this.state.show, direction: true, record: this.state.itme });
                    // this.setState({ show: !this.state.show })
                }, this.props.carouselTime)
            }
            this.setState({
                itme: value < 0 ? this.props.children.length - 1 : value < this.props.children.length ? value : 0,
                show: !this.state.show,
                direction: value > this.state.itme ? true : false,
                record: this.state.itme
            })
        }

    }
    render() {
        return (
            <div style={{ width: this.props.mywidth, height: this.props.myheight, position: 'relative', overflow: 'hidden' }} >
                <style dangerouslySetInnerHTML={{ __html: this.getCssClss() }} />
                {this.props.children.map((v, i) =>
                    <div key={i} >
                        <CSSTransition
                            in={this.state.show}
                            timeout={this.props.speedTime}
                            classNames={"fadeinto"}>
                            <CarouselPage zIndex={i === this.state.itme ? this.props.children.length : 0}>{v.props.children}</CarouselPage>
                        </CSSTransition>
                    </div>
                )}
                {this.props.children.length > 0 ?
                    <CSSTransition
                        in={this.state.show}
                        timeout={this.props.speedTime}
                        classNames={"fadeout"}>
                        <CarouselPage zIndex={1}>{this.props.children[this.state.record].props.children}</CarouselPage>
                    </CSSTransition> : null}
                {this.props.bottombutton ? <div className="bottombutton" style={{ top: '85%', zIndex: '999', height: '25px', width: this.props.children.length * 30, left: `50%`, marginLeft: -(this.props.children.length * 30 / 2) }}>
                    {this.props.children.map((v, i) => <div key={i} className={i === this.state.itme ? "bottombuttonClick" : "bottombuttonItme"} onClick={() => this.Subtitle(i)} ></div>)}
                </div> : null}
                {this.props.leftbuttonitme ?
                    <div className="leftbutton" style={{ top: '50%', left: '0', height: this.props.leftbutton, width: '4%', zIndex: '999', marginTop: '-4%', fontSize: '20px', lineHeight: this.props.leftbutton }}
                        onClick={() => this.Subtitle(this.state.itme - 1)}>
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    : null}
                {this.props.leftbuttonitme ?
                    <div className="leftbutton" style={{ top: '50%', right: '0', height: this.props.leftbutton, width: '4%', zIndex: '999', marginTop: '-4%', fontSize: '20px', lineHeight: this.props.leftbutton }}
                        onClick={() => this.Subtitle(this.state.itme + 1)}>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    : null}


            </div>
        )
    }

    getCssClss() {
        return `       
    .fadeinto-enter {
      left: ${this.state.direction ? this.props.mywidth : "-"+this.props.mywidth};
    }
    
    .fadeinto-enter.fadeinto-enter-active {
      left: 0;
      transition: left ${this.props.speedTime}ms ease-in;
     
    }
    
    .fadeinto-exit {
        left: ${this.state.direction ? this.props.mywidth : "-"+this.props.mywidth};
    }
    
    .fadeinto-exit.fadeinto-exit-active {
        left: 0;
        transition: left ${this.props.speedTime}ms ease-in;
    }
    //出
    .fadeout-enter {
        left: 0;
    }
    
    .fadeout-enter.fadeout-enter-active {
        left: ${this.state.direction ? "-"+this.props.mywidth : this.props.mywidth};
        transition: left ${this.props.speedTime}ms ease-in;
    
    }
    
    .fadeout-exit {
        left: 0;
    }
    
    .fadeout-exit.fadeout-exit-active {
        left: ${this.state.direction ? "-"+this.props.mywidth : this.props.mywidth};
        transition: left ${this.props.speedTime}ms ease-in;
    }
        `
    }
}


export default Carousel;