import { PageContact_Plain } from "@/interfaces/api/page-contact";
import BaseServices from "./base.services";
import { IContactPageApi } from "@/interfaces/page";

class ContactServices extends BaseServices {
  private static contactPageUrl = this.apiBaseUrl + "/page-contact";

  static async getContactPageData(): Promise<Required<PageContact_Plain>> {
    const { data } = await this.handleGetRequest<IContactPageApi>(
      this.contactPageUrl
    );
    return {
      id: data.id || this.DEFAULT_CONTACT_PAGE_DATA.id,
      createdAt: data.createdAt || this.DEFAULT_CONTACT_PAGE_DATA.createdAt,
      updatedAt: data.updatedAt || this.DEFAULT_CONTACT_PAGE_DATA.updatedAt,
      publishedAt:
        data.publishedAt || this.DEFAULT_CONTACT_PAGE_DATA.publishedAt,
      firstSectionTitle:
        data.firstSectionTitle ||
        this.DEFAULT_CONTACT_PAGE_DATA.firstSectionTitle,
      firstSectionParagraph:
        data.firstSectionParagraph ||
        this.DEFAULT_CONTACT_PAGE_DATA.firstSectionParagraph,
      secondSectionTitle:
        data.secondSectionTitle ||
        this.DEFAULT_CONTACT_PAGE_DATA.secondSectionTitle,
      firstFormFieldLabel:
        data.firstFormFieldLabel ||
        this.DEFAULT_CONTACT_PAGE_DATA.firstFormFieldLabel,
      firstFormFieldPlaceholder:
        data.firstFormFieldPlaceholder ||
        this.DEFAULT_CONTACT_PAGE_DATA.firstFormFieldPlaceholder,
      secondFormFieldLabel:
        data.secondFormFieldLabel ||
        this.DEFAULT_CONTACT_PAGE_DATA.secondFormFieldLabel,
      secondFormFieldPlaceholder:
        data.secondFormFieldPlaceholder ||
        this.DEFAULT_CONTACT_PAGE_DATA.secondFormFieldPlaceholder,
      thirdFormFieldLabel:
        data.thirdFormFieldLabel ||
        this.DEFAULT_CONTACT_PAGE_DATA.thirdFormFieldLabel,
      thirdFormFieldPlaceholder:
        data.thirdFormFieldPlaceholder ||
        this.DEFAULT_CONTACT_PAGE_DATA.thirdFormFieldPlaceholder,
      formSubmitButtonContent:
        data.formSubmitButtonContent ||
        this.DEFAULT_CONTACT_PAGE_DATA.formSubmitButtonContent,
    };
  }

  private static DEFAULT_CONTACT_PAGE_DATA: Required<PageContact_Plain> = {
    id: 5,
    firstSectionTitle: "",
    firstSectionParagraph: "",
    secondSectionTitle: "",
    firstFormFieldLabel: "",
    firstFormFieldPlaceholder: "",
    secondFormFieldLabel: "",
    secondFormFieldPlaceholder: "",
    thirdFormFieldLabel: "",
    thirdFormFieldPlaceholder: "",
    formSubmitButtonContent: "",
    updatedAt: new Date(),
    publishedAt: new Date(),
    createdAt: new Date(),
  };
}

export default ContactServices;
