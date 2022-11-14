import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const key = 'product';

export const getProducts = async ({ page = 0, limit = 100 }: { page: number, limit: number}) => {
    return axios.get(`http://localhost:3000/api/${key}?page=${page}&limit=${limit}`);
}

export const useProducts = ({
    page,
    limit,
}: {
    page: number,
    limit: number,
}) => {
    return useQuery(
        [key, { page, limit }],
        () => getProducts({ page, limit }),
        { keepPreviousData: true }
    );
}