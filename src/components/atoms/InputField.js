import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  label {
    width: 100%;
    font-size: 0.875rem;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    font-size: 0.875rem; // size could be set from theme.js
    outline: none;
    border: 1px solid; // color could be set from theme.js
  }
`;

export default function InputField({
  tag: Tag,
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
  onBlur,
  value,
  className,
  css
}) {
  return (
    <InputFieldWrapper>
      <label htmlFor={name}>{label}</label>
      <Tag
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={className}
        css={css}
      />
    </InputFieldWrapper>
  );
}
