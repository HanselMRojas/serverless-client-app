export interface Image {
  id: string | null;
  name: string | null;
  url: string | null;
  createdAt: Date | null;
  etag: string | null;
}

export interface ImageState {
  list: Image[];
  current: Image;
  error: Error | null;
  loader: boolean;
  modal: {
    visible: boolean;
    editable: boolean;
  }
}
