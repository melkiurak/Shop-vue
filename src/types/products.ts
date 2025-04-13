interface Product {
  name: string
  description: string
  price: number
  stock_quantity: number
  brand_id: { name: string }
  category_id: { name: string }
}

interface GetProductsData {
  products: {
    edges: { node: Product }[]
  }
}

export type { Product, GetProductsData }
