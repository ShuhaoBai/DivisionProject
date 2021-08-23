export interface IInfoStats {
  clearanceNo: string;
  contactActive: boolean;
  contactId: string;
  contactName: string;
  id: number;
  productClearedData: string;
  productType: string;
  productTypeCd: string;
  submittedByActive: boolean;
  submittedById: string;
  submittedByName: string;
  title: string;
}

export default class InfoStats {
  clearanceNo: string;
  contactActive: boolean;
  contactId: string;
  contactName: string;
  id: number;
  productClearedData: string;
  productType: string;
  productTypeCd: string;
  submittedByActive: boolean;
  submittedById: string;
  submittedByName: string;
  title: string;
  constructor(data: {
    clearanceNo: string;
    contactActive: boolean;
    contactId: string;
    contactName: string;
    id: number;
    productClearedData: string;
    productType: string;
    productTypeCd: string;
    submittedByActive: boolean;
    submittedById: string;
    submittedByName: string;
    title: string;
  }) {
    this.clearanceNo = data.clearanceNo;
    this.contactActive = data.contactActive;
    this.contactId = data.contactId;
    this.contactName = data.contactName;
    this.id = data.id;
    this.productClearedData = data.productClearedData;
    this.productType = data.productType;
    this.productTypeCd = data.productTypeCd;
    this.submittedByActive = data.submittedByActive;
    this.submittedById = data.submittedById;
    this.submittedByName = data.submittedByName;
    this.title = data.title;
  }
}
