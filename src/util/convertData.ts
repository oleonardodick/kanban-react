import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const returnData = (dateString: string): string => {
  const data = parseISO(dateString);

  const formatedDate = format(data, 'MMM dd', {
    locale: ptBR,
  });

  return formatedDate;
};
