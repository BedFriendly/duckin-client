import type React from 'react';

type LoginInputProps = {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginInput({ type, placeholder, name, value, onChange }: LoginInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      required
      onChange={onChange}
      className="bg-bg-primary-dark light:bg-bg-elevated-light text-text-primary-dark light:text-text-primary-light h-10 rounded p-2 text-sm"
    />
  );
}

export default LoginInput;
