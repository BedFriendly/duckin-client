import { Link } from '@tanstack/react-router';

import LoginButton from '@/components/login/LoginButton';
import LoginInput from '@/components/login/LoginInput';
import LoginInputLabel from '@/components/login/LoginInputLabel';

function LoginForm() {
  return (
    <form className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <LoginInputLabel name="email">이메일</LoginInputLabel>
        <LoginInput
          type="email"
          placeholder="이메일을 입력하세요"
          name="email"
          value=""
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <LoginInputLabel name="password">비밀번호</LoginInputLabel>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          value=""
          onChange={() => {}}
        />
        <p className="text-text-primary-dark light:text-text-primary-light px-2 text-xs select-none">
          <Link className="text-text-link hover:text-text-link-hover" to="/forgot-password">
            비밀번호를 잊으셨나요?
          </Link>
        </p>
      </div>
      <LoginButton onClick={() => {}} />
      <p className="text-text-primary-dark light:text-text-primary-light px-2 text-xs select-none">
        {`오늘 처음이신가요? `}
        <Link className="text-text-link hover:text-text-link-hover" to="/register">
          여기로 오세요!
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
