import type React from 'react';

type LoginInputLabelProps = {
  children: React.ReactNode;
  name: string;
};

function LoginInputLabel({ children, name }: LoginInputLabelProps) {
  return (
    <label
      className="text-text-primary-dark light:text-text-primary-light block text-xs"
      htmlFor={name}
    >
      {children}
    </label>
  );
}

export default LoginInputLabel;
