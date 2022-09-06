

export const currencyFormatter = value => {
  const rawValue = value ?? 0;

  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(rawValue);
};
