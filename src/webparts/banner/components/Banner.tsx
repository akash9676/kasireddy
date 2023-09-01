import * as React from "react";
import styles from "./Banner.module.scss";
import { IBannerProps } from "./IBannerProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {
    const {
      overlayText,
      imageHeight,
      imageUrl,
    } = this.props;

    return (
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: `${imageHeight}px`,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.text}>{escape(overlayText)}</div>
        </div>
      </div>
    );
  }
}
