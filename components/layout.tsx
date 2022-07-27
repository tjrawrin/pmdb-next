import Navigation from "./navigation";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-2xl px-3 mx-auto min-h-screen">
      <header className="flex items-center justify-center flex-col flex-wrap">
        <h1 className="text-3xl my-6">Movies</h1>
        <Navigation />
      </header>
      <main className="mb-6">{children}</main>
    </div>
  );
};

export default Layout;
