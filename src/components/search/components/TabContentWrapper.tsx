
interface TabContentWrapperProps {
  children: React.ReactNode;
}

export const TabContentWrapper = ({ children }: TabContentWrapperProps) => (
  <div className="absolute inset-0 overflow-y-auto py-4 px-6">
    {children}
  </div>
);
