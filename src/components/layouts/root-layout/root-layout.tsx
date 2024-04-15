import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
interface IProps {
  children?: ReactNode;
}

export const RootLayout = (props: IProps) => {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <Header />
      <main className="flex flex-1 w-full h-full justify-center">
        <div className="max-w-screen-xl w-full py-5">
          {props.children ?? <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
