import Header from '@/components/login/Header';
import LoginForm from '@/components/login/LoginForm';

function LoginPage() {
  // TODO: 로그인 로직 추가

  return (
    <div className="bg-bg-primary-dark light:bg-bg-primary-light flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex h-screen w-full flex-1 items-center justify-center">
        <section className="bg-surface-primary-dark light:bg-surface-primary-light h-[30rem] w-96 rounded-lg p-4 shadow-lg">
          <div className="flex h-32 flex-col items-center justify-center gap-2.5">
            <h2 className="text-text-primary-dark light:text-text-primary-light text-2xl font-bold">
              환영합니다!
            </h2>
            <p className="text-text-secondary-dark light:text-text-secondary-light text-sm">
              만나서 반가워요! 함께 놀 준비되셨죠?
            </p>
          </div>
          <LoginForm />
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
