const convertDMY = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1; // Months are zero-based
  const year = dateObject.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export default convertDMY;
