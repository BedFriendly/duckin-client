import AppIcon from '@/assets/icons/app-icon.png';

function Header() {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-start gap-3 bg-transparent p-2">
      <img src={AppIcon} alt="App Icon" className="h-12 w-12 object-cover" />
      <h1 className="text-text-primary-dark light:text-text-primary-light font-bold select-none">
        느좋 채팅 서비스 - Duck In
      </h1>
    </header>
  );
}

export default Header;
