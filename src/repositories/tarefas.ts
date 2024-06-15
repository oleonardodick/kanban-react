import { ITarefa } from '../interfaces/ITarefa';
import config from '../util/config';
import axios, { AxiosResponse } from 'axios';

const URL_TAREFAS = `${config.URL}/tarefas`;

export async function buscaTarefasPorStatus(
  status: string
): Promise<ITarefa[]> {
  const response = await axios.get(`${URL_TAREFAS}?idStatus=${status}`);
  return response.data;
}

interface UpdateTarefaParams {
  id: string;
  novoStatus: string;
}

export async function atualizaStatusTarefa({
  id,
  novoStatus,
}: UpdateTarefaParams): Promise<ITarefa> {
  const response: AxiosResponse<ITarefa> = await axios.patch(
    `${URL_TAREFAS}/${id}`,
    {
      idStatus: novoStatus,
    }
  );
  return response.data;
}
