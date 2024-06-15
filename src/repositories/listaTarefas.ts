import { IListaTarefas } from '../interfaces/IListaTarefas';
import config from '../util/config';
import axios from 'axios';

const URL_LISTA_TAREFAS = `${config.URL}/listasTarefas`;

export async function buscaListasTarefas(): Promise<IListaTarefas[]> {
  const response = await axios.get(URL_LISTA_TAREFAS);
  return response.data;
}
