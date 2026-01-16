export interface IPageContact {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  firstSectionTitle?: string;
  firstSectionParagraph?: string;
  secondSectionTitle?: string;
  firstFormFieldLabel?: string;
  firstFormFieldPlaceholder?: string;
  secondFormFieldLabel?: string;
  secondFormFieldPlaceholder?: string;
  thirdFormFieldLabel?: string;
  thirdFormFieldPlaceholder?: string;
  formSubmitButtonContent?: string;
}
