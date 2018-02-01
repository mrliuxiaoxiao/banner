import React, { Component } from 'react'
import './CarouselPage.css'


class CarouselPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { }
    // }
    render() {
        return (
            <div className="container" style={{  zIndex:`${this.props.zIndex}`,backgroundImage:`url(${this.props.children})`}} >
            </div>
        )
    }
}



export default CarouselPage;