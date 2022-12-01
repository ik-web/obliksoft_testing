// const totalOrders = 11115;
const totalOrders = 112;
// const totalOrders = 0;

export const orders = [];

const ordersAuthors = [
  'Олександр Омельченко',
  'Алла Гриценко',
  'Павло Кринчук',
  'Олена Нагоренко',
  'Дмитро Назарчук',
  'Денис Шевченко',
];

const ordersNames = [
  'Статус посилки',
  'Список вільних столиків',
  'Апдейт угоди',
];

const ordersDate = [
  '9.10.2020',
  '10.10.2020',
  '11.10.2020',
  '12.10.2020'
];

const getRandomIndex = (dataLength) => {
  return Math.floor(Math.random() * dataLength);
}

const getRandomItem = (data) => {
  return data[getRandomIndex(data.length)];
}

const fillOrders = () => {
  let lastOrderId = 1;

  for (let i = 0; i < totalOrders; i++) {
    const order = {
      id: lastOrderId,
      name: getRandomItem(ordersNames),
      url: 'https://yesoriginal.inboost.ai/api/webhok/retwsdhgds32/',
      author: getRandomItem(ordersAuthors),
      date: getRandomItem(ordersDate),
      time: '14:00'
    }

    orders.push(order);

    lastOrderId++;
  }
};

fillOrders();

export default orders;
