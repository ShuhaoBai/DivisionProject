export default class DivisionData {
  year?: string | undefined;
  month?: string | undefined;
  Abstract?: number | undefined;
  Book?: number | undefined;
  BookChapter?: number | undefined;
  Brochure?: number | undefined;
  ConferenceProceedings?: number | undefined;
  Datasets?: number | undefined;
  Exhibit?: number | undefined;
  JournalArticle?: number | undefined;
  Magazine?: number | undefined;
  Other?: number | undefined;
  Presentation?: number | undefined;
  Published?: number | undefined;
  Report?: number | undefined;
  Software?: number | undefined;
  Video?: number | undefined;
  constructor(data: {
    year?: string;
    month?: string;
    Abstract?: number;
    Book?: number;
    BookChapter?: number;
    Brochure?: number;
    ConferenceProceedings?: number;
    Datasets?: number;
    Exhibit?: number;
    JournalArticle?: number;
    Magazine?: number;
    Other?: number;
    Presentation?: number;
    Published?: number;
    Report?: number;
    Software?: number;
    Video?: number;
  }) {
    this.year = data.year;
    this.month = data.month;
    this.Abstract = data.Abstract;
    this.Book = data.Book;
    this.BookChapter = data.BookChapter;
    this.Brochure = data.Brochure;
    this.ConferenceProceedings = data.ConferenceProceedings;
    this.Datasets = data.Datasets;
    this.Exhibit = data.Exhibit;
    this.JournalArticle = data.JournalArticle;
    this.Magazine = data.Magazine;
    this.Other = data.Other;
    this.Presentation = data.Presentation;
    this.Published = data.Published;
    this.Report = data.Report;
    this.Software = data.Software;
    this.Video = data.Video;
  }
}
