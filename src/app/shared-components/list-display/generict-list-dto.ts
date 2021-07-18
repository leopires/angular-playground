export interface BasicListItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface BasicListData {
  listTitle: string;
  onEmptyListMessage?: string;
  items?: BasicListItem[];
}
