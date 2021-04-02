import axios from 'axios';

const baseUrl = '/api/orders';

export interface NewOrder {
  customerName: string;
  customerEmail: string;
  shipCity: string;
  shipStreet: string;
  shipIndex: string;
  shipDetails: string;
  paid: boolean;
  complete: boolean;
}

const createNew = async (order: NewOrder): Promise<any> => {
  const response = await axios.post(baseUrl, order);
  return response.data;
};

export default {
  createNew,
};
