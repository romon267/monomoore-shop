// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '.prisma/client';
import prisma from '../../lib/prisma';
import { NewOrder } from '../../services/orders';

export type ResData = Order | {
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResData>): Promise<void> => {
  if (req.method === 'POST') {
    const newOrder = req.body as NewOrder;
    const createdOrder = await prisma.order.create({
      data: newOrder,
    });
    return res.json(createdOrder);
  }
  return res.json({
    message: 'only post requests',
  });
};
