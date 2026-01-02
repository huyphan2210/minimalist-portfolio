"use client";

import { FC, FormEventHandler } from "react";
import { useFormStatus } from "react-dom";

import styles from "./page.module.scss";
import { submitForm } from "./action";

interface IContactForm {
  secondSectionTitle?: string;
  firstFormFieldLabel?: string;
  firstFormFieldPlaceholder?: string;
  secondFormFieldLabel?: string;
  secondFormFieldPlaceholder?: string;
  thirdFormFieldLabel?: string;
  thirdFormFieldPlaceholder?: string;
  formSubmitButtonContent?: string;
}

const ContactForm: FC<IContactForm> = ({
  secondSectionTitle,
  firstFormFieldLabel,
  firstFormFieldPlaceholder,
  secondFormFieldLabel,
  secondFormFieldPlaceholder,
  thirdFormFieldLabel,
  thirdFormFieldPlaceholder,
  formSubmitButtonContent,
}) => {
  const {
    contact__form,
    contact__form__title,
    contact__form__field,
    contact__form__field__label,
    contact__form__field__input,
    contact__form__btn,
  } = styles;

  return (
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
          required
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
          required
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
          required
        />
      </div>
      <button className={contact__form__btn} type="submit">
        {formSubmitButtonContent}
      </button>
    </form>
  );
};

export default ContactForm;
