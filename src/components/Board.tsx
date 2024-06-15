import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { buscaListasTarefas } from '../repositories/listaTarefas';
import List from './List';
import { atualizaStatusTarefa } from '../repositories/tarefas';

export default function Board() {
  const queryClient = useQueryClient();

  const { data: listaStatus } = useQuery({
    queryKey: ['status'],
    queryFn: buscaListasTarefas,
  });

  const { mutate } = useMutation({
    mutationKey: ['atualizaStatusTarefa'],
    mutationFn: atualizaStatusTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getTarefas'],
      });
    },
  });

  const onDragEnd: OnDragEndResponder = (result) => {
    if (result.destination) {
      const to = result.destination.droppableId;
      const card = result.draggableId;

      mutate({ id: card, novoStatus: to });
    }
  };
  return (
    <div className="flex h-screen p-4 gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        {listaStatus?.map((status) => (
          <List idStatus={status.id} titulo={status.titulo} key={status.id} />
        ))}
      </DragDropContext>
    </div>
  );
}
