import { NextApiRequest, NextApiResponse } from "next"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    const {id} = req.query 
    console.log(req)
    res.status(200).json({ name: id })
  }