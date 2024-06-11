import { X } from 'lucide-react';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
} from '../Dialog';
import { useContext } from 'react';
import { DialogContext } from '../../contexts/DialogContext';
import { ITask } from '../../interfaces/ITaks';

export default function CardModal({ task }: { task: ITask }) {
  const { closeDialog } = useContext(DialogContext);

  return (
    <Dialog>
      <DialogHeader>
        <DialogTitle>{task.name}</DialogTitle>
        <button type="button" onClick={closeDialog}>
          <X />
        </button>
      </DialogHeader>
      <DialogContent>
        <span>Conteúdo da Modal</span>
      </DialogContent>
      <DialogFooter>
        <span>Rodapé da modal</span>
      </DialogFooter>
    </Dialog>
  );
}
