type LoginButtonProps = {
  onClick: () => void;
};

function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-brand-primary hover:bg-brand-primary-hover text-text-primary-dark h-11 w-full rounded text-[0.875rem]"
    >
      로그인
    </button>
  );
}

export default LoginButton;
