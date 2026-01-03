import { createContext, useContext, useState, ReactNode } from "react";
import LeadFormModal from "@/components/LeadFormModal";

interface LeadFormContextType {
  openLeadForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
};

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm: () => setIsOpen(true) }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LeadFormContext.Provider>
  );
};
