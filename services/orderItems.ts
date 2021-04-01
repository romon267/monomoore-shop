import axios from 'axios';

const baseUrl = '/api/orderItems';

export interface NewOrderItem {
  orderId: number;
  productId: number;
  quantity: number;
}

const createNew = async (order: NewOrderItem): Promise<any> => {
  const response = await axios.post(baseUrl, order);
  return response.data;
};

export default {
  createNew,
};
