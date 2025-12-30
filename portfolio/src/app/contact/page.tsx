import { FC } from "react";
import styles from "./page.module.scss";

import ContactServices from "@/services/contact.services";

const Contact: FC = async () => {
  const { firstSectionTitle, firstSectionParagraph, secondSectionTitle } =
    await ContactServices.getContactPageData();

  const submitForm = async (formData: FormData) => {
    "use server";
  };
  return (
    <>
      <h1 className={styles.contact__heading}>Contact</h1>
      <section className={styles.contact__section}>
        <h2>{firstSectionTitle}</h2>
        <p>{firstSectionParagraph}</p>
      </section>
      <section className={styles.contact__section}>
        <h2>{secondSectionTitle}</h2>
        <form action={submitForm}></form>
      </section>
    </>
  );
};

export default Contact;
