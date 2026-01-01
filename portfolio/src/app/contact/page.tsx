import { FC } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import ContactServices from "@/services/contact.services";
import { profileNavigationList } from "@/common/navigationList";
import Link from "next/link";

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
    contact__form,
    contact__form__title,
    contact__form__field,
    contact__form__field__label,
    contact__form__field__input,
    contact__form__btn,
    contact__section__profiles,
    contact__section__profiles__item,
  } = styles;

  const submitForm = async (formData: FormData) => {
    "use server";
  };
  return (
    <>
      <h1 className={contact__heading}>Contact</h1>
      <section className={contact__section}>
        <h2 className={contact__section__title}>{firstSectionTitle}</h2>
        <p className={contact__section__paragraph}>{firstSectionParagraph}</p>
        <ul className={contact__section__profiles}>
          {profileNavigationList.map((navigation, index) => (
            <li className={contact__section__profiles__item} key={index}>
              <Link target="_blank" href={navigation.url}>
                <Image
                  src={navigation.darkIcon}
                  loading="lazy"
                  alt="Profile"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <form className={contact__form} action={submitForm}>
        <h2 className={contact__form__title}>{secondSectionTitle}</h2>
        <div className={contact__form__field}>
          <label
            className={contact__form__field__label}
            htmlFor={firstFormFieldLabel}
          >
            {firstFormFieldLabel}
          </label>
          <input
            id={firstFormFieldLabel}
            name={firstFormFieldLabel}
            className={contact__form__field__input}
            placeholder={firstFormFieldPlaceholder}
            type="text"
            autoComplete="true"
          />
        </div>
        <div className={contact__form__field}>
          <label
            className={contact__form__field__label}
            htmlFor={secondFormFieldLabel}
          >
            {secondFormFieldLabel}
          </label>
          <input
            id={secondFormFieldLabel}
            name={secondFormFieldLabel}
            className={contact__form__field__input}
            placeholder={secondFormFieldPlaceholder}
            type="email"
            autoComplete="true"
          />
        </div>
        <div className={contact__form__field}>
          <label
            className={contact__form__field__label}
            htmlFor={thirdFormFieldLabel}
          >
            {thirdFormFieldLabel}
          </label>
          <textarea
            id={thirdFormFieldLabel}
            name={thirdFormFieldLabel}
            className={`${contact__form__field__input} ${styles["contact__form__field__input--textarea"]}`}
            placeholder={thirdFormFieldPlaceholder}
            autoComplete="true"
          />
        </div>
        <button className={contact__form__btn} type="submit">
          {formSubmitButtonContent}
        </button>
      </form>
    </>
  );
};

export default Contact;
