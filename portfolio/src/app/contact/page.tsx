import { FC } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import ContactServices from "@/services/contact.services";
import { profileNavigationList } from "@/common/navigationList";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact: FC = async () => {
  const {
    firstSectionTitle,
    firstSectionParagraph,
    secondSectionTitle,
    firstFormFieldLabel,
    firstFormFieldPlaceholder,
    secondFormFieldLabel,
    secondFormFieldPlaceholder,
    thirdFormFieldLabel,
    thirdFormFieldPlaceholder,
    formSubmitButtonContent,
  } = await ContactServices.getContactPageData();

  const {
    contact__heading,
    contact__section,
    contact__section__title,
    contact__section__paragraph,
    contact__section__profiles,
    contact__section__profiles__item,
  } = styles;

  return (
    <>
      <h1 className={contact__heading}>Contact</h1>
      <section className={contact__section}>
        <h2 className={contact__section__title}>{firstSectionTitle}</h2>
        <p className={contact__section__paragraph}>{firstSectionParagraph}</p>
        <ul className={contact__section__profiles}>
          {process.env.NODE_ENV !== "development" && (
            <li className={styles["contact__section__profiles__item--mail"]}>
              <Link
                target="_blank"
                href={`mailto:${process.env.CONTACT_RECEIVER_EMAIL}`}
              >
                SEND AN EMAIL
              </Link>
            </li>
          )}
          {profileNavigationList.map((navigation, index) => (
            <li className={contact__section__profiles__item} key={index}>
              <Link target="_blank" href={navigation.url}>
                <Image src={navigation.darkIcon} loading="lazy" alt="Profile" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {process.env.NODE_ENV === "development" && (
        <ContactForm
          secondSectionTitle={secondSectionTitle}
          firstFormFieldLabel={firstFormFieldLabel}
          firstFormFieldPlaceholder={firstFormFieldPlaceholder}
          secondFormFieldLabel={secondFormFieldLabel}
          secondFormFieldPlaceholder={secondFormFieldPlaceholder}
          thirdFormFieldLabel={thirdFormFieldLabel}
          thirdFormFieldPlaceholder={thirdFormFieldPlaceholder}
          formSubmitButtonContent={formSubmitButtonContent}
        />
      )}
    </>
  );
};

export default Contact;
