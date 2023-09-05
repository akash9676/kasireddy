import { imageUrls } from "./IBannerItem";

export interface IBannerProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  imageUrls: imageUrls[];
  imageHeight: number;
}
