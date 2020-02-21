import React from 'react'
import { Slide } from './index'
import { Rating } from 'office-ui-fabric-react/lib-commonjs/Rating'
import { FontIcon } from 'office-ui-fabric-react/lib-commonjs/Icon'
import { mergeStyles } from 'office-ui-fabric-react/lib-commonjs/Styling'

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
    const iconClass = mergeStyles({
      fontSize: '1.4rem',
      fontWeight: 500
    })
    const FullNameStyles: React.CSSProperties = {
      color: this.props.textColor,
      fontSize: '1.4rem',
      fontWeight: 750
    }
    const JobTitleStyles: React.CSSProperties = {
      color: this.props.textColor,
      fontSize: '1.25rem',
      fontWeight: 650,
      paddingBottom: '15px'
    }
    const ContentStyles: React.CSSProperties = {
      color: this.props.textColor,
      marginBottom: '19px',
      fontSize: '1.05rem',
      zIndex: 5,
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
        <img src={this.props.slide.authorImage} style={{ borderRadius: '50%', width: '250px' }}/>
        <p className="carousel-slide__content" style={ContentStyles}>
          <FontIcon iconName="RightDoubleQuote" className={iconClass} />
          {this.props.slide.content}
        </p>
        <p style={FullNameStyles}>
          <strong className="carousel-slide__fullname" style={FullNameStyles}>
            {this.props.slide.fullName}
          </strong>
        </p>
        <span>
        <em className="carousel-slide__job-title" style={JobTitleStyles}>
          {this.props.slide.jobTitle}
        </em>
        </span>
        <Rating
          min={1}
          max={5}
          rating={this.props.slide.stars}
          readOnly={true}
        />
      </li>
    )
  }
}
