"use server";

import ContactServices from "@/services/contact.services";

export const submitForm = async (formData: FormData) => {
  "use server";
  const contactInformation: Record<string, FormDataEntryValue> = {};
  const entries = formData.entries();
  for (const [key, value] of entries) {
    contactInformation[key] = value;
  }
  await ContactServices.sendContactInformation(contactInformation);
};
