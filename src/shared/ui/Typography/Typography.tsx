import cn from "classnames";
import { type ReactNode } from "react";

import styles from "./styles.module.scss";

interface TextProps {
  children: ReactNode;
  className?: string;
}

interface TypographyUIProps {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
  P: typeof P;
  Span: typeof Span;
}

function H1(props: TextProps) {
  const { children, className } = props;
  return <h1 className={cn(styles.h1, className)}>{children}</h1>;
}

function H2(props: TextProps) {
  const { children, className } = props;
  return <h2 className={cn(styles.h2, className)}>{children}</h2>;
}

function H3(props: TextProps) {
  const { children, className } = props;
  return <h3 className={cn(styles.h3, className)}>{children}</h3>;
}

function H4(props: TextProps) {
  const { children, className } = props;
  return <h4 className={cn(styles.h4, className)}>{children}</h4>;
}

function H5(props: TextProps) {
  const { children, className } = props;
  return <h5 className={cn(styles.h5, className)}>{children}</h5>;
}

function H6(props: TextProps) {
  const { children, className } = props;
  return <h6 className={cn(styles.h6, className)}>{children}</h6>;
}

function P(props: TextProps) {
  const { children, className } = props;
  return <p className={cn(styles.p, className)}>{children}</p>;
}

function Span(props: TextProps) {
  const { children, className } = props;
  return <span className={cn(styles.span, className)}>{children}</span>;
}

export const TypographyUI: TypographyUIProps = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Span,
};
