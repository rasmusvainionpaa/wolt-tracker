import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'src/lib/prisma'

// POST /api/post
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { store, price, order_type, ordered_at } = req.body
  const result = await prisma.order.create({
    data: {
      store: store,
      price: Number(price),
      order_type: order_type,
      ordered_at: ordered_at
    },
  })
  res.json(result)
}