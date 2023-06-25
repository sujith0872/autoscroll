import * as React from "react";

export const HeaderButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return <button {...props} className="Header-button">{props.title}</button>;
};
