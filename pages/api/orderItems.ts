// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OrderItem } from '.prisma/client';
import prisma from '../../lib/prisma';
import { NewOrderItem } from '../../lib/services/orderItems';

export type ResData = OrderItem | {
  message?: string;
  error?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResData>): Promise<void> => {
  if (req.method === 'POST') {
    const newOrderItem = req.body as NewOrderItem;
    try {
      const createdOrderItem = await prisma.orderItem.create({
        data: newOrderItem,
      });
      return res.json(createdOrderItem);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Error creating an order',
      });
    }
  }
  return res.json({
    message: 'only post requests',
  });
};
