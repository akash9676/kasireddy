import { INavigationItem } from "./INavigationItems";

export interface INavigationProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  navigationItems : INavigationItem[];
}

