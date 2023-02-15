import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[36px] md:text-[42px] text-[46px]",
  h2: "sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-medium text-[20px]",
  h5: "font-normal text-[18px]",
  h6: "text-[16px]",
  body1: "text-[14px]",
  body2: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
