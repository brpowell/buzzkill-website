import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen flex-col items-center min-w-72 px-12 mt-4">
        {children}
      </div>
    </div>
  );
}
