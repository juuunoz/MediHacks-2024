export interface Content {
    contentType: ContentType;
    contentText: string;  // either a text or url
  }
  
  export enum ContentType {
    Text = "Text",
    Image = "Image",
    Video = "Video",
  }
  