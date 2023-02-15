import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder8: "rounded-radius8",
  icbRoundedBorder16: "rounded-radius16",
};
const variants = {
  FillGray102: "bg-gray_102 text-deep_purple_900",
  OutlineWhiteA700: "border-2 border-solid border-white_A700 text-white_A700",
  FillDeeppurple50: "bg-deep_purple_50 text-deep_purple_901",
  OutlineDeeppurple700:
    "border border-deep_purple_700 border-solid text-deep_purple_900",
  OutlineDeeppurple700_1:
    "bg-white_A700 border border-deep_purple_700 border-solid text-deep_purple_900",
  OutlineDeeppurple700_2:
    "bg-deep_purple_900 border border-deep_purple_700 border-solid text-white_A700",
  Outline: "bg-gradient  border-2 border-solid text-white_A700",
  icbOutlineDeeppurpleA200:
    "bg-deep_purple_A200 border border-deep_purple_A200 border-solid",
};
const sizes = {
  sm: "pr-[2px] py-[2px]",
  md: "pl-[6px] py-[6px]",
  lg: "pr-[6px] py-[6px]",
  xl: "p-[7px]",
  "2xl": "pr-[8px] py-[10px]",
  "3xl": "p-[13px]",
  "4xl": "pr-[12px] py-[14px]",
  smIcn: "p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder8",
    "icbRoundedBorder16",
  ]),
  variant: PropTypes.oneOf([
    "FillGray102",
    "OutlineWhiteA700",
    "FillDeeppurple50",
    "OutlineDeeppurple700",
    "OutlineDeeppurple700_1",
    "OutlineDeeppurple700_2",
    "Outline",
    "icbOutlineDeeppurpleA200",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillGray102",
  size: "xl",
};

export { Button };
