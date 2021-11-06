export interface GenericListItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface GenericListData {
  title: string;
  onEmptyListMessage?: string;
  items: GenericListItem[];
}
