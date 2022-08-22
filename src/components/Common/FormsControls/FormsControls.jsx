import s from './FormsControls.module.css';
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import React from "react";


const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (component, name, type, placeholder, validates, text='') => {
  return (
    <>
      <Field
        component={component}
        name={name}
        type={type}
        placeholder={placeholder}
        validate={validates}
      />{text}
    </>
  )
}
