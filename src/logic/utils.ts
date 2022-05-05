import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export function formatDate(date: Date, formatStr: string): string {
  return format(date, formatStr, { locale: fr });
}
