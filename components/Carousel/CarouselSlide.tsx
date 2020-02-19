import React from 'react'
import { Slide } from './index'
type CarouselSlideProps = {
  key: number
  index: number
  activeIndex: number
  slide: Slide,
  textColor: string
}

const SlideStyles: React.CSSProperties = {
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'none',
  maxWidth: '900px',
  listStyleType: 'none',
  textAlign: 'center'
}

export class CarouselSlide extends React.Component<CarouselSlideProps> {
  render() {
    const AuthorStyles: React.CSSProperties = {
      color: this.props.textColor
    }
    const SourceStyles: React.CSSProperties = {
      color: this.props.textColor
    }
    const ContentStyles: React.CSSProperties = {
      color: this.props.textColor,
      marginBottom: '19px'
    }
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
        style={SlideStyles}
      >
        <p className="carousel-slide__content" style={ContentStyles}>
          {this.props.slide.content}
        </p>

        <p style={AuthorStyles}>
          <strong className="carousel-slide__author" style={AuthorStyles}>
            {this.props.slide.author}
          </strong>,
          {" "}
          <small className="carousel-slide__source" style={SourceStyles}>
            {this.props.slide.source}
          </small>
        </p>
      </li>
    )
  }
}
