import { object, string, number, boolean, type InferOutput, array } from  'valibot';


export const DraftProductoSchema = object({
    name: string(),
    price: number()
})

export const ProductoSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
});

export const ProductsSchema = array(ProductoSchema);
export type Product = InferOutput<typeof ProductoSchema>;