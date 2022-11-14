import dbConnect from "lib/mongoose";
import Product from "models/Product.schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            try {
                const data = await Product.create(req.body)
                res.status(201).send(data)
            } catch (e) {
                res.status(400).send(e)
            }
        break;
        case 'GET':
            try {
                const { limit = 100, page = 0 } = req.query;
                const limitInt = parseInt((limit as string), 10) || 500;
                const pageInt = parseInt((page as string), 10) || 0;

                const data = await Product.aggregate([
                    { $sort: { created_at: -1 } },
                    { $skip: pageInt * limitInt },
                    { $limit: limitInt }
                ]);
                res.status(200).send(data);
            } catch (e) {
                res.status(400).send(e);
            }
        break;
    }
}