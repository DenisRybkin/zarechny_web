import { Outlet, useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

interface IProps {
  children?: ReactNode;
}

//max-w-screen-[1440px] max-w-screen-xl
export const RootLayout = (props: IProps) => {
  const { hash } = useLocation();

  const handleScroll = (hash: string) => {
    const anchor = hash.split('#')[1];
    if (!anchor) return;
    const anchorContent: HTMLElement | null = document.getElementById(anchor);
    if (anchorContent) {
      anchorContent.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => anchorContent.removeAttribute('tabindex'), 1000);
    }
  };

  useEffect(() => {
    if (hash) handleScroll(hash);
  }, [hash]);

  return (
    <div className="flex flex-col h-full w-full bg-white relative">
      <Header />
      <main className="flex flex-1 w-full h-full justify-center">
        <div className="main-wrapper w-full py-5">
          {props.children ?? <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
