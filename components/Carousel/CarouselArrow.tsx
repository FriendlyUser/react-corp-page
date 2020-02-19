
import React from 'react'
import { FontIcon } from 'office-ui-fabric-react/lib-commonjs/Icon'

const arrowStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  display: 'block',
  color: '#111',
  cursor: 'pointer',
  opacity: 0.75,
  transform: 'translateY(-50%)',
  transition: 'opacity 0.15s cubic-bezier(0.4, 0, 1, 1)'
}
export type CarouselArrowProps = {
  onClick: any,
  arrowColor: string
}

// TODO Consider having prop for left and right arrow with hardcoded left property
export class CarouselLeftArrow extends React.Component<CarouselArrowProps> {
  render() {
    const leftArrowStyles = Object.assign({}, arrowStyles)
    leftArrowStyles["left"] = '24px'
    leftArrowStyles['color'] = this.props.arrowColor
    return (
      <a
        href="#"
        className="carousel__arrow"
        onClick={this.props.onClick}
        style={leftArrowStyles}
      >
        <FontIcon iconName="ChevronLeft" style={{fontSize: '24px'}} />
      </a>
    )
  }
}

export class CarouselRightArrow extends React.Component<CarouselArrowProps> {
  render() {
    const rightArrowStyles = Object.assign({}, arrowStyles)
    rightArrowStyles["right"] = '24px'
    rightArrowStyles['color'] = this.props.arrowColor
    return (
      <a
        href="#"
        className="carousel__arrow"
        onClick={this.props.onClick}
        style={rightArrowStyles}
      >
        <FontIcon iconName="ChevronRight" style={{fontSize: '24px'}} />
      </a>
    )
  }
}
