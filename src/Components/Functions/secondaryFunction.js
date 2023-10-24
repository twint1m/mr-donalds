export const totalPrice = order => order.price * order.count;

export const formatCurrency = (str) => {
    return str.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      })
}