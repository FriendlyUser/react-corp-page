
import React from 'react'

export type CarouselIndicatorProps = {
  key: number
  index: number
  activeIndex: number
  isActive: boolean
  onClick: any
  bgColor: string
}

export class CarouselIndicator extends React.Component<CarouselIndicatorProps> {
  render() {
    const CarouselIndicatorStyles: React.CSSProperties = {
      display: 'block',
      width: '24px',
      height: '3px',
      backgroundColor: this.props.bgColor,
      cursor: 'pointer',
      opacity: '0.15',
      transition: 'opacity 0.15s cubic-bezier(0.4, 0, 1, 1)'
    }
    if (this.props.index == this.props.activeIndex) CarouselIndicatorStyles["opacity"] = '0.75'
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          style={CarouselIndicatorStyles}
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}
