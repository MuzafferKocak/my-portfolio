"use client";

import { useId } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

// "dark" für Felder auf dunklem Grund, "light" für Felder auf heller Fläche
type Tone = "dark" | "light";

type SingleLineProps = {
  label: string;
  multiline?: false;
  tone?: Tone;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

type MultiLineProps = {
  label: string;
  multiline: true;
  tone?: Tone;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">;

type InputProps = SingleLineProps | MultiLineProps;

const baseFieldClasses = "block w-full rounded-lg border p-2.5 text-base";

const toneClasses: Record<Tone, { field: string; label: string }> = {
  dark: {
    field:
      "bg-secondary border-border text-foreground placeholder-muted/70",
    label: "text-foreground",
  },
  light: {
    field:
      "bg-surface border-ink/30 text-ink placeholder-ink/50 focus-visible:outline-ink",
    label: "text-ink",
  },
};

function isMultiLine(props: InputProps): props is MultiLineProps {
  return props.multiline === true;
}

export default function Input(props: InputProps) {
  const id = useId();
  const tone = toneClasses[props.tone ?? "dark"];
  const fieldClasses = `${baseFieldClasses} ${tone.field}`;

  let field;
  if (isMultiLine(props)) {
    const { label: _label, multiline: _multiline, tone: _tone, ...rest } = props;
    field = <textarea id={id} className={fieldClasses} {...rest} />;
  } else {
    const { label: _label, multiline: _multiline, tone: _tone, ...rest } = props;
    field = <input id={id} className={fieldClasses} {...rest} />;
  }

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className={`mb-1 block text-sm font-medium ${tone.label}`}
      >
        {props.label}
      </label>
      {field}
    </div>
  );
}
