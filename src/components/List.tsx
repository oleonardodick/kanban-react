import Card from './Card';
import { Droppable } from '@hello-pangea/dnd';
import { CirclePlus, Trash2 } from 'lucide-react';
import Button from './Button';
import { useQuery } from '@tanstack/react-query';
import { buscaTarefasPorStatus } from '../repositories/tarefas';

interface ListaType {
  idStatus: string;
  titulo: string;
}

export default function List({ idStatus, titulo }: ListaType) {
  const { data: tarefas } = useQuery({
    queryKey: ['getTarefas', idStatus],
    queryFn: () => buscaTarefasPorStatus(idStatus),
  });

  return (
    <div className="flex flex-col h-max w-80 p-3 gap-3 bg-zinc-300 rounded-xl">
      <header className="font-bold text-lg pl-3 flex justify-between">
        <span>{titulo}</span>
        <Button size="icon">
          <Trash2 className="hover:text-red-700" />
        </Button>
      </header>
      <Droppable droppableId={idStatus.toString()}>
        {(provided) => (
          <ul
            className="flex flex-col gap-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tarefas?.map((tarefa, index) => (
              <li key={tarefa.id}>
                <Card task={tarefa} index={index} />
              </li>
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Button size="icon">
        <div className="flex gap-2 hover:font-bold">
          <CirclePlus />
          <span>Add a Card</span>
        </div>
      </Button>
    </div>
  );
}

// export default function List({
//   lista,
//   index,
// }: {
//   lista: ListaType;
//   index: number;
// }) {
//   return (
//     <div className="flex flex-col h-max w-80 p-3 gap-3 bg-zinc-300 rounded-xl">
//       <header className="font-bold text-lg pl-3 flex justify-between">
//         <span>{lista.title}</span>
//         <Button size="icon">
//           <Trash2 className="hover:text-red-700" />
//         </Button>
//       </header>
//       <Droppable droppableId={index.toString()}>
//         {(provided) => (
//           <ul
//             className="flex flex-col gap-3"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {lista.tasks.map((tarefa, index) => (
//               <li key={tarefa.id}>
//                 <Card task={tarefa} index={index} />
//               </li>
//             ))}

//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//       <Button size="icon">
//         <div className="flex gap-2 hover:font-bold">
//           <CirclePlus />
//           <span>Add a Card</span>
//         </div>
//       </Button>
//     </div>
//   );
// }
