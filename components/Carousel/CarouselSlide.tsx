import React from 'react'
import { Slide } from './index'
type CarouselSlideProps = {
  key: number
  index: number
  activeIndex: number
  slide: Slide,
  textColor?: string
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

    }
    const SourceStyles: React.CSSProperties = {

    }
    const ContentStyles: React.CSSProperties = {

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
        <p className="carousel-slide__content" style={{marginBottom: '19px'}}>
          {this.props.slide.content}
        </p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p>
      </li>
    )
  }
}
