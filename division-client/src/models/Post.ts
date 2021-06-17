export interface IPostContent {
  id: number;
  date: string;
  date_gmt: string;
  guid: GUID;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: number[];
  acf: ACF;
  _links: Links;
  _embedded: Embedded;
}

export interface Embedded {
  'wp:featuredmedia': Media[];
}

export interface Media {
  id: number;
  slug: string;
  title: Rendered;
  caption: Rendered;
  alt_text: string;
  media_details: MediaDetails;
  source_url: string; //<<<<-- this is what we need to render post image
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  sizes: MediaSizes;
}

export interface MediaSizes {
  medium: ImageSize;
  large: ImageSize;
  thumbnail: ImageSize;
  medium_large: ImageSize;
}

export interface ImageSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface Rendered {
  rendered: string;
}

export interface ACF {
  carousel_title: string;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  'version-history': About[];
  'wp:attachment': About[];
  'wp:term': WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}
export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export default class Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: GUID;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: number[];
  acf: ACF;
  _links: Links;
  _embedded: Embedded;
  constructor(data: {
    id: number;
    date: string;
    date_gmt: string;
    guid: GUID;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: GUID;
    content: Content;
    excerpt: Content;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: string[];
    categories: number[];
    tags: number[];
    acf: ACF;
    _links: Links;
    _embedded: Embedded;
  }) {
    this.id = data.id;
    this.date = data.date;
    this.date_gmt = data.date_gmt;
    this.guid = data.guid;
    this.modified = data.modified;
    this.modified_gmt = data.modified_gmt;
    this.slug = data.slug;
    this.status = data.status;
    this.type = data.type;
    this.link = data.link;
    this.title = data.title;
    this.content = data.content;
    this.excerpt = data.excerpt;
    this.author = data.author;
    this.featured_media = data.featured_media;
    this.comment_status = data.comment_status;
    this.ping_status = data.ping_status;
    this.sticky = data.sticky;
    this.template = data.template;
    this.format = data.format;
    this.meta = data.meta;
    this.categories = data.categories;
    this.tags = data.tags;
    this.acf = data.acf;
    this._links = data._links;
    this._embedded = data._embedded;
  }
}
