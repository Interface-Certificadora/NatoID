export const formatDate = (dateString: string): string => {
  if (!dateString) return "Data inválida";
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date);
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return "Data inválida";
  }
};

/**
 * Formata um valor de data (string ou Date) para o formato AAAA-MM-DD,
 * ideal para uso em <input type="date">.
 * @param dateValue O valor da data a ser formatado.
 * @returns A data formatada como 'AAAA-MM-DD' ou uma string vazia se a data for inválida.
 */
export const formatDateForInput = (
  dateValue: string | Date | null | undefined
): string => {
  if (!dateValue) {
    return "";
  }

  const dateObj = new Date(dateValue);

  if (isNaN(dateObj.getTime())) {
    return "";
  }

  return dateObj.toISOString().split("T")[0];
};
