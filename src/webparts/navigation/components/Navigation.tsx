import * as React from "react";
import { INavigationProps } from "./INavigationProps";
import styles from "./Navigation.module.scss";

export default class Navigation extends React.Component<INavigationProps, {}> {
  public render(): React.ReactElement<INavigationProps> {
    const { navigationItems } = this.props;

    return (
      <nav className={styles.navigation}>
        <ul >
          {navigationItems.map((item) => (
            <li key={item.id} >
              {item.title}
              {item.subItems && item.subItems.length > 0 && (
                <ul >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} >
                      <a href={subItem.url} >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
