"use client";

import { useId } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type SingleLineProps = { label: string; multiline?: false } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
>;

type MultiLineProps = { label: string; multiline: true } & Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
>;

type InputProps = SingleLineProps | MultiLineProps;

const fieldClasses =
  "bg-surface border border-border placeholder-muted text-foreground text-sm rounded-lg block w-full p-2.5";

function isMultiLine(props: InputProps): props is MultiLineProps {
  return props.multiline === true;
}

export default function Input(props: InputProps) {
  const id = useId();

  let field;
  if (isMultiLine(props)) {
    const { label: _label, multiline: _multiline, ...rest } = props;
    field = <textarea id={id} className={fieldClasses} {...rest} />;
  } else {
    const { label: _label, multiline: _multiline, ...rest } = props;
    field = <input id={id} className={fieldClasses} {...rest} />;
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-foreground block mb-1 text-sm font-medium">
        {props.label}
      </label>
      {field}
    </div>
  );
}
