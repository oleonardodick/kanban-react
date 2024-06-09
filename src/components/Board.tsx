import List from './List';
import { produce } from 'immer';
import Data from '../data/tasks.json';
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { useState } from 'react';

export default function Board() {
  const [lists, setLists] = useState(Data);

  const onDragEnd: OnDragEndResponder = (result) => {
    if (result.destination) {
      const from = Number(result.source.droppableId);
      const to = Number(result.destination.droppableId);
      const sourceIndex = result.source.index;
      const destinationIndex = result.destination.index;

      setLists(
        produce(lists, (draft) => {
          const dragged = draft[from].tasks[sourceIndex];

          draft[from].tasks.splice(sourceIndex, 1);
          draft[to].tasks.splice(destinationIndex, 0, dragged);
        })
      );
    }
  };
  return (
    <div className="flex h-screen p-4 gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map((task, index) => (
          <List lista={task} index={index} key={task.id} />
        ))}
      </DragDropContext>
    </div>
  );
}
