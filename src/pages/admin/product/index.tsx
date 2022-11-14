import { useProducts } from "lib/data/product"
import ProductComponent from "@/components/admin/product/ProductComponent"
import { IProduct } from "models/Product.schema";
import { useState } from "react"

export default function Product() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pagination, _setPagination] = useState({
        page: 0,
        limit: 100,
    })
    const { data, isLoading, isError } = useProducts(pagination);

    if (isLoading) return 'Loading...';

    if (isError) return 'Error';


    return (
       <>
        {data.data.map((p: IProduct) => (
            <ProductComponent key={p.name} product={p}/>
        ))}
       </>
    )
}