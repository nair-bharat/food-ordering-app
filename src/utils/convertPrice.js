export const convertPrice = (price) => {
  return Math.round(((price / 100) * 100) / 100);
};
