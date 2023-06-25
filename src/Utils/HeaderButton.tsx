import * as React from "react";

export const HeaderButton: React.FC<
  {buttonProps : React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  menuMode:boolean
}
> = ({buttonProps:props,menuMode}) => {
  return <button {...props} className={!menuMode?"Header-button":"Header-button Menu-button"}>{props.children?props.children:props.title}</button>;
};
