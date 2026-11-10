import type {
  ButtonHTMLAttributes,
  ComponentProps,
  ReactNode,
} from "react";
import Link from "next/link";

type Variant = "solid" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const solidClasses =
  "bg-primary hover:bg-primary-dark text-foreground font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-60 disabled:cursor-not-allowed";

// Rahmen mit Farbverlauf: außen der Rahmen, innen der dunkle Hintergrund
const outlineOuterClasses =
  "px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-light to-secondary hover:bg-primary-dark text-foreground";
const outlineInnerClasses =
  "flex items-center gap-3 bg-surface hover:bg-primary rounded-full px-5 py-2";

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const { variant: _variant, className = "", children, ...rest } = props;
    return (
      <Link className={`${outlineOuterClasses} ${className}`} {...rest}>
        <span className={outlineInnerClasses}>{children}</span>
      </Link>
    );
  }

  const {
    variant = "solid",
    className = "",
    children,
    type = "button",
    ...rest
  } = props;
  const isOutline = variant === "outline";

  return (
    <button
      type={type}
      className={`${isOutline ? outlineOuterClasses : solidClasses} ${className}`}
      {...rest}
    >
      {isOutline ? (
        <span className={outlineInnerClasses}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
}
