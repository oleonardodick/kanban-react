import Card from './Card';
import { ITask } from '../interfaces/ITaks';
import { Droppable } from '@hello-pangea/dnd';
import { CirclePlus, Trash2 } from 'lucide-react';

interface ListaType {
  id: string;
  title: string;
  tasks: ITask[];
}

export default function List({
  lista,
  index,
}: {
  lista: ListaType;
  index: number;
}) {
  return (
    <div className="flex flex-col h-max w-80 p-3 gap-3 bg-zinc-300 rounded-xl">
      <header className="font-bold text-lg pl-3 flex justify-between">
        <span>{lista.title}</span>
        <Trash2 />
      </header>
      <Droppable droppableId={index.toString()}>
        {(provided) => (
          <ul
            className="flex flex-col gap-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lista.tasks.map((tarefa, index) => (
              <li key={tarefa.id}>
                <Card task={tarefa} index={index} />
              </li>
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <button type="button" className="flex gap-2">
        <CirclePlus />
        <span>Add a Card</span>
      </button>
    </div>
  );
}
