import { ReactNode, createContext, useState } from 'react';

interface DialogContextType {
  componentId: string;
  openDialog: (id: string) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext({} as DialogContextType);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [componentId, setComponentId] = useState('');

  function openDialog(id: string) {
    setComponentId(id);
  }

  function closeDialog() {
    setComponentId('');
  }

  return (
    <DialogContext.Provider value={{ componentId, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
}
