export const returnData = (dateString: string): string => {
  const [day, month] = dateString.split('/');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthName = months[Number(month) - 1];
  const dayNumber = String(day).padStart(2, '0');

  return `${monthName} ${dayNumber}`;
};
