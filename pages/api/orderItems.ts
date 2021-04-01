// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OrderItem } from '.prisma/client';
import prisma from '../../lib/prisma';
import { NewOrderItem } from '../../services/orderItems';

export type ResData = OrderItem | {
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResData>): Promise<void> => {
  if (req.method === 'POST') {
    const newOrderItem = req.body as NewOrderItem;
    const createdOrderItem = await prisma.orderItem.create({
      data: newOrderItem,
    });
    return res.json(createdOrderItem);
  }
  return res.json({
    message: 'only post requests',
  });
};
