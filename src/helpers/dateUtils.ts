export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Mês começa do zero
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
};
  