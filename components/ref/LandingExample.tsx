import { IImageProps, Image, ImageFit } from 'office-ui-fabric-react/lib-commonjs/Image';
import { Label } from 'office-ui-fabric-react/lib-commonjs/Label';
import * as React from 'react';
export class LandingHeroImageBG extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="ms-Grid-row" style={{ position: 'relative' }}>
        <div className="ms-Grid" dir="rtl" style={{
          position: 'absolute',
          zIndex: 5,
          color: 'white',
          minHeight: '400px',
          width: '100%',
          top: '35%'
        }}>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
            <span>Alpha Beta</span>
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
            <span>B</span>
          </div>
        </div>
        <div style={{
          position: 'relative',
          width: '100%',
          backgroundImage: "url(" + `${require("./landing-hero.jpg")}` + ")",
          minHeight: '400px',
          backgroundSize: 'cover',
          backgroundPosition: "50% 25%",
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(25%)',
          clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0 100%)',
          zIndex: 2
        }} />
      </div>
    )
  }
}

export class LandingHeroImage extends React.Component<any, any> {
  public render(): JSX.Element {
    const imagePropsWide: Partial<IImageProps> = {
      imageFit: ImageFit.centerContain,
      width: '100%',
      height: 300
    };

    return (
      <div style={{width: '100%'}}>
        <Image
          {...imagePropsWide}
          src="/landing-hero.jpg"
          alt="Example implementation of the property image fit using the centerCover value on an image taller and wider than the frame."
        />
      </div>
    )
  }
}
export class ImageCenterCoverExample extends React.Component<any, any> {
  public render(): JSX.Element {
    const imageProps: Partial<IImageProps> = {
      imageFit: ImageFit.centerCover,
      width: 200,
      height: 200
    };

    return (
      <div>
        <p>
          Setting the imageFit property to "centerCover" will cause the image to scale up or down proportionally. Images smaller than their
          frame will be rendered as "ImageFit.center", while images larger than both the frame's height and width will render as
          "ImageFit.cover".
        </p>
        <Label>The image is smaller than the frame, so it's centered and rendered at its natural size.</Label>
        <Image
          {...imageProps}
          src="http://placehold.it/100x150"
          alt="Example implementation of the property image fit using the centerCover value on an image smaller than the frame."
        />
        <br />
        <Label>
          The image has a wider aspect ratio (more landscape) than the frame but is not as tall as the frame, so it's rendered at its
          natural size while cropping the sides.
        </Label>
        <Image
          {...imageProps}
          src="http://placehold.it/300x100"
          alt="Example implementation of the property image fit using the centerCover value on an image wider than the frame."
        />
        <br />
        <Label>
          The image has a taller aspect ratio (more portrait) than the frame but is not as wide as the frame, so it's rendered at its
          natural size while cropping the top and bottom.
        </Label>
        <Image
          {...imageProps}
          src="http://placehold.it/100x300"
          alt="Example implementation of the property image fit using the centerCover value on an image taller than the frame."
        />
        <br />
        <Label>These images are taller and wider than the frame, so they grow just enough to "cover" the frame area.</Label>
        <Image
          {...imageProps}
          src="http://placehold.it/400x500"
          alt="Example implementation of the property image fit using the centerCover value on an image taller and wider than the frame."
        />
        <br />
        <Image
          {...imageProps}
          src="http://placehold.it/500x400"
          alt="Example implementation of the property image fit using the centerCover value on an image taller and wider than the frame."
        />

      </div>
    );
  }
}
