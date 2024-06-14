import { Form, FormField } from '../Form';
import Input from '../Input';
import TextArea from '../TextArea';
import { useForm } from 'react-hook-form';

export default function CardForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form id="cardForm" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <label htmlFor="taskName">Nome da tarefa</label>
        <Input
          type="text"
          id="taskName"
          placeholder="Nome da tarefa"
          {...register('taskName')}
        />
      </FormField>
      <FormField>
        <label htmlFor="taskDescription">Descrição da tarefa</label>
        <TextArea
          rows={4}
          id="taskDescription"
          placeholder="Descrição da tarefa"
          {...register('taskDescription')}
        />
      </FormField>
      <FormField>
        <label htmlFor="taskStart">Data de início da tarefa</label>
        <Input type="date" id="taskStart" {...register('taskStart')} />
      </FormField>
      <FormField>
        <label htmlFor="taskEnd">Data de término da tarefa</label>
        <Input type="date" id="taskEnd" {...register('taskEnd')} />
      </FormField>
    </Form>
  );
}
