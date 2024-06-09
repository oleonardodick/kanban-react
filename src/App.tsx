// import {
//   DragDropContext,
//   Draggable,
//   DraggableLocation,
//   Droppable,
//   OnDragEndResponder,
// } from '@hello-pangea/dnd';
// import { useState } from 'react';
// import { ITask } from './interfaces/ITaks';
// import tasks from './data/tasks.json';

import Board from './components/Board';

function App() {
  return <Board />;
  // const [tasks1, setTasks1] = useState(tasks[0].tasks);

  // const [tasks2, setTasks2] = useState(tasks[1].tasks);

  // function reordenar<T>(list: T[], startIndex: number, endIndex: number) {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // }

  // function mover(
  //   source: ITask[],
  //   destination: ITask[],
  //   droppableSource: DraggableLocation,
  //   droppableDestination: DraggableLocation
  // ) {
  //   const sourceClone = Array.from(source);
  //   const destClone = Array.from(destination);
  //   const [removed] = sourceClone.splice(droppableSource.index, 1);

  //   destClone.splice(droppableDestination.index, 0, removed);

  //   const result: { [key: string]: ITask[] } = {};
  //   result[droppableSource.droppableId] = sourceClone;
  //   result[droppableDestination.droppableId] = destClone;

  //   return result;
  // }

  // const onDragEnd: OnDragEndResponder = (result) => {
  //   const { source, destination } = result;
  //   if (!destination) {
  //     return;
  //   }

  //   if (source.droppableId === destination.droppableId) {
  //     if (source.droppableId === 'lista1') {
  //       const items = reordenar(tasks1, source.index, destination.index);
  //       setTasks1(items);
  //     } else {
  //       const items = reordenar(tasks2, source.index, destination.index);
  //       setTasks2(items);
  //     }
  //   } else {
  //     let sourceList;
  //     let destinationList;
  //     if (source.droppableId === 'lista1') {
  //       sourceList = tasks1;
  //       destinationList = tasks2;
  //     } else {
  //       sourceList = tasks2;
  //       destinationList = tasks1;
  //     }
  //     const items = mover(sourceList, destinationList, source, destination);
  //     setTasks1(items['lista1']);
  //     setTasks2(items['lista2']);
  //   }
  // };

  // return (
  //   <div className="bg-zinc-600 min-h-screen flex items-center justify-center gap-5">
  //     <DragDropContext onDragEnd={onDragEnd}>
  //       <Droppable droppableId="lista1">
  //         {(provided) => (
  //           <div
  //             className="bg-zinc-200 w-96 h-max rounded-lg shadow-lg"
  //             {...provided.droppableProps}
  //             ref={provided.innerRef}
  //           >
  //             <ul>
  //               {tasks1.map((task, index) => (
  //                 <Draggable key={task.id} draggableId={task.id} index={index}>
  //                   {(provided) => (
  //                     <li
  //                       ref={provided.innerRef}
  //                       {...provided.draggableProps}
  //                       {...provided.dragHandleProps}
  //                       className="border border-black p-4 m-2 bg-zinc-300 shadow-lg rounded-xl"
  //                     >
  //                       {task.name}
  //                     </li>
  //                   )}
  //                 </Draggable>
  //               ))}
  //             </ul>
  //             {provided.placeholder}
  //           </div>
  //         )}
  //       </Droppable>

  //       <Droppable droppableId="lista2">
  //         {(provided) => (
  //           <div
  //             className="bg-zinc-200 w-96 h-max rounded-lg shadow-lg"
  //             {...provided.droppableProps}
  //             ref={provided.innerRef}
  //           >
  //             <ul>
  //               {tasks2.map((task, index) => (
  //                 <Draggable key={task.id} draggableId={task.id} index={index}>
  //                   {(provided) => (
  //                     <li
  //                       ref={provided.innerRef}
  //                       {...provided.draggableProps}
  //                       {...provided.dragHandleProps}
  //                       className="border border-black p-4 m-2 bg-zinc-300 shadow-lg rounded-xl"
  //                     >
  //                       {task.name}
  //                     </li>
  //                   )}
  //                 </Draggable>
  //               ))}
  //             </ul>
  //             {provided.placeholder}
  //           </div>
  //         )}
  //       </Droppable>
  //     </DragDropContext>
  //   </div>
  // );
}

export default App;
