// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '.prisma/client';
import prisma from '../../lib/prisma';
import { NewOrder } from '../../lib/services/orders';

export type ResData = Order | {
  message?: string;
  error?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResData>): Promise<void> => {
  if (req.method === 'POST') {
    const newOrder = req.body as NewOrder;
    try {
      const createdOrder = await prisma.order.create({
        data: newOrder,
      });
      return res.json(createdOrder);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Error creating new order!',
      });
    }
  }
  return res.json({
    message: 'only post requests',
  });
};
