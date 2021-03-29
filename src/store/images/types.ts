export interface Image {
  id: string | null;
  name: string | null;
  url: string | null;
  createdAt: Date | null;
  etag: string | null;
}

export interface ImageModal {
  visible: boolean;
  isNew: boolean;
}

export interface ImageState {
  list: Image[];
  current: Image;
  error: Error | null;
  loader: boolean;
  uploadSucess: boolean;
  modal: ImageModal;
}
