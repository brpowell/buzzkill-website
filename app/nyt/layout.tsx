import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen flex-col p-14 items-center">
        {children}
      </div>
    </div>
  );
}
