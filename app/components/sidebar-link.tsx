import Link from "next/link";

export interface SidebarLinkProps {
  children?: React.ReactNode;
  href: string;
  tabIndex?: number;
  className?: string;
  onClick?: () => void;
}

export default function SidebarLink({
  children,
  href,
  tabIndex,
  className,
  onClick,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      onClick={onClick}
      className={`flex flex-row hover:bg-gray-700 p-4 items-center gap-3 ${className}`}
    >
      {children}
    </Link>
  );
}
