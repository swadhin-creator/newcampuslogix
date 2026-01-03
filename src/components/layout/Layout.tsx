import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeadFormModal from "../LeadFormModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeadFormModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </div>
  );
};

export default Layout;

export const useLeadForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    openLeadForm: () => setIsOpen(true),
    closeLeadForm: () => setIsOpen(false),
  };
};
