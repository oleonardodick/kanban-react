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
import { ITask } from '../../interfaces/ITarefa';
import Button from '../Button';
import CardForm from './CardForm';

export default function CardModal({ task }: { task: ITask }) {
  const { closeDialog } = useContext(DialogContext);

  return (
    <Dialog>
      <DialogHeader>
        <DialogTitle>{task.name}</DialogTitle>
        <Button size="icon" onClick={closeDialog}>
          <X />
        </Button>
      </DialogHeader>
      <DialogContent>
        <CardForm />
      </DialogContent>
      <DialogFooter>
        <Button color="primary" size="md" type="submit" form="cardForm">
          Salvar
        </Button>
        <Button color="secondary" size="md" onClick={closeDialog}>
          Cancelar
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
