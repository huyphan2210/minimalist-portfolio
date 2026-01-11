import { Resend } from "resend";

import { PageContact_Plain } from "@/interfaces/api/page-contact";
import { IContactPageApi } from "@/interfaces/page";

import BaseServices from "./base.services";

class ContactServices extends BaseServices {
  private static contactApiUrl = this.apiBaseUrl + "/page-contact";
  private static resend = new Resend(process.env.RESEND_API_KEY);

  static async getContactPageData(): Promise<Required<PageContact_Plain>> {
    const { data } = await this.handleGetRequest<IContactPageApi>(
      this.contactApiUrl
    );

    return this.enrich<PageContact_Plain>(data, this.DEFAULT_CONTACT_PAGE_DATA);
  }

  static async sendContactInformation(
    contactInformation: Record<string, FormDataEntryValue>
  ) {
    let htmlContent = "";
    for (const key in contactInformation) {
      htmlContent += `${key}: ${contactInformation[key]} <br/>`;
    }

    try {
      this.resend.emails.send({
        from: process.env.CONTACT_SENDER_EMAIL || "",
        to: process.env.CONTACT_RECEIVER_EMAIL || "",
        subject: "Someone reached out via Minimalist Portfolio",
        html: htmlContent,
      });
    } catch (error) {
      console.error(error);
    }
  }

  private static DEFAULT_CONTACT_PAGE_DATA: Required<PageContact_Plain> = {
    id: 5,
    firstSectionTitle: "First Section",
    firstSectionParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    secondSectionTitle: "Second Section",
    firstFormFieldLabel: "Label 1",
    firstFormFieldPlaceholder: "Placeholder 1",
    secondFormFieldLabel: "Label 2",
    secondFormFieldPlaceholder: "Placeholder 2",
    thirdFormFieldLabel: "Label 3",
    thirdFormFieldPlaceholder: "Placeholder 3",
    formSubmitButtonContent: "SUBMIT",
    updatedAt: new Date(),
    publishedAt: new Date(),
    createdAt: new Date(),
  };
}

export default ContactServices;
