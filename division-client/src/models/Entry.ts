export default class Entry {
  Abstract: boolean;
  Book: boolean;
  BookChapter: boolean;
  Brochure: boolean;
  ConferenceProceedings: boolean;
  Datasets: boolean;
  Exhibit: boolean;
  JournalArticle: boolean;
  Magazine: boolean;
  Other: boolean;
  Presentation: boolean;
  Published: boolean;
  Report: boolean;
  Software: boolean;
  Video: boolean;
  constructor(data: {
    Abstract: boolean;
    Book: boolean;
    BookChapter: boolean;
    Brochure: boolean;
    ConferenceProceedings: boolean;
    Datasets: boolean;
    Exhibit: boolean;
    JournalArticle: boolean;
    Magazine: boolean;
    Other: boolean;
    Presentation: boolean;
    Published: boolean;
    Report: boolean;
    Software: boolean;
    Video: boolean;
  }) {
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
