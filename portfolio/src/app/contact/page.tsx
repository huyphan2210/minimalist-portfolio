import ContactServices from "@/services/contact.services";
import { FC } from "react";

const Contact: FC = async () => {
  const data = await ContactServices.getContactPageData();
  return <></>;
};

export default Contact;
