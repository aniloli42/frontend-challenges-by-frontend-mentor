import { createContext, useContext, useEffect, useState } from 'react';
import { ActiveSection, ChildrenContext, ContextValue } from 'schema';

const ActiveSectionContext = createContext<ContextValue | null>(null);

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

const ActiveSectionProvider = ({ children }: ChildrenContext) => {
  const checkActive = () => {
    const active = localStorage.getItem('active');
    if (active == null) return setActiveSection('daily');

    if (
      typeof active !== 'string' &&
      (active !== 'daily' || active !== 'weekly' || active !== 'monthly')
    )
      return setActiveSection('daily');

    setActiveSection(active as ActiveSection);
  };

  const [activeSection, setActiveSection] = useState<ActiveSection>('daily');

  useEffect(() => {
    checkActive();
  }, []);

  const toggleActive = (changeValue: ActiveSection) => {
    if (activeSection === changeValue) return;

    localStorage.setItem('active', changeValue);
    setActiveSection(changeValue);
  };

  return (
    <ActiveSectionContext.Provider value={{ activeSection, toggleActive }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
