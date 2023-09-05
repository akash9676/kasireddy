export interface INavigationItem {
  id : number;
  title: string;
  url : string;
  category: string;
  subItems?: INavigationItem[];
}
