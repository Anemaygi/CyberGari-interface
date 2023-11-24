
export function toLocalDate(unformattedDate: string) {
    const date = new Date(unformattedDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = String(date.getUTCFullYear());
  
    return `${day}/${month}/${year}`;
}