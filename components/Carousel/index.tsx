import React, {Component} from 'react'
import {CarouselLeftArrow, CarouselRightArrow} from '@components/Carousel/CarouselArrow'
import {CarouselIndicator} from '@components/Carousel/CarouselIndicator'
import {CarouselSlide} from '@components/Carousel/CarouselSlide'
import { dark } from '@theme/dark'
// https://codepen.io/alexdevero/details/rzqxpG See
type CarouselProps = {
  slides: Array<Slide>,
  theme?: any
}

type CarouselState = {
  activeIndex: number
}

export type Slide = {
  fullName: string
  authorImage: string
  jobTitle: string
  content: string
  stars: number
}

// Carousel wrapper component
export class Carousel extends Component<CarouselProps,CarouselState>  {
  constructor(props: any) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index: number) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e: Event) {
    e.preventDefault();

    let index: number = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e: Event) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const CarouselIndicatorsStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '20px'
    }
    const { theme=dark } = this.props
    let indicatorColor: string
    let textColor: string
    try {
      if (theme === dark) {
        indicatorColor= theme.palette.themePrimary
        textColor=theme.palette.neutralColor
      } else {
        indicatorColor= theme.palette.white
        textColor=theme.palette.themePrimary
      }
    } catch(err) {
      indicatorColor = '#333333'
    }
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={(e: Event) => this.goToPrevSlide(e)} arrowColor={indicatorColor}/>

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
              textColor={textColor}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={(e: Event) => this.goToNextSlide(e)} arrowColor={indicatorColor}/>

        <ul className="carousel__indicators" style={CarouselIndicatorsStyles}>
          {this.props.slides.map((_slide: Slide, index: number) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={() => this.goToSlide(index)}
              bgColor={indicatorColor}
            />
          )}
        </ul>
      </div>
    )
  }
}
