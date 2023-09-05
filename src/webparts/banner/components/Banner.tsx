import * as React from "react";
import styles from "./Banner.module.scss";
import { IBannerProps } from "./IBannerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    const { imageHeight, imageUrls } = this.props;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      arrows : true
    };

    return (
      <div className={styles.carousel}>
        <Slider {...sliderSettings}>
          {imageUrls.map((imageUrl, index) => {
            return (
              <div key={index}>
                <div
                  className={styles.banner}
                  style={{
                    backgroundImage: `url('${imageUrl.imageUrl}')`,
                    height: `${imageHeight}px`,
                  }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.text}>
                      {escape(imageUrl.slideTitle)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
