import { Draggable } from '@hello-pangea/dnd';
import { ITask } from '../interfaces/ITaks';
import { returnData } from '../util/convertData';
import { Clock4 } from 'lucide-react';

interface CardType {
  task: ITask;
  index: number;
}
export default function Card({ task, index }: CardType) {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="w-full bg-zinc-200 rounded-lg flex flex-col gap-2 pl-2 pr-2"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <header className="font-bold text-center pt-2">{task.name}</header>
          <main className="pl-2">{task.description}</main>
          <footer className="text-xs pl-2 pb-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock4 />
              {returnData(task.start)} - {returnData(task.finish)}
            </div>
            <img
              src="/image/avatar.png"
              alt="Imagem do avatar"
              className="w-8 h-8 rounded-full"
            />
          </footer>
        </div>
      )}
    </Draggable>
  );
}
