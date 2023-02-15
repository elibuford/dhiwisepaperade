import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineDeeppurple101:
    "bg-white_A700 outline outline-[4px] outline-deep_purple_101",
  FillRed50: "bg-red_50",
  OutlineDeeppurple901:
    "bg-deep_purple_400 border-deep_purple_901 border-l-[4px] border-solid",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "p-[10px]",
  md: "pr-[13px] py-[13px]",
  lg: "pl-[17px] py-[17px]",
  xl: "pb-[15px] pl-[15px] pt-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4", "RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "OutlineDeeppurple101",
    "FillRed50",
    "OutlineDeeppurple901",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "FillWhiteA700",
  size: "sm",
};

export { Input };
