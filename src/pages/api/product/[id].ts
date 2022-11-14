import dbConnect from "lib/mongoose";
import Product from "models/Product.schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query: { id } } = req;
    
    await dbConnect();
    switch (method) {
        case 'GET':
            try {
                const data = await Product.findById(id);
                res.status(200).send(data);
            } catch (e) {
                res.status(400).send(e)
            }
        break;
        case 'PUT':
            try {
                const data = await Product.replaceOne({
                    _id: id,
                }, req.body, {
                    upsert: true,
                    new: true,
                    runValidators: true,
                });
                res.status(201).send(data);
            } catch (e) {
                res.status(400).send(e)
            }
        break;
        case 'DELETE':
            try {
                const result = await Product.findOneAndDelete({ _id: id });
                res.status(202).send({ success: true, result });
            } catch (e) {
                res.status(400).json({ success: false, error: e })
            }
        break;
    }
}