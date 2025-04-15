interface Product {
  name: string
  description: string
  price: number
  stock_quantity: number
  brand_id: { name: string }
  category_id: { name: string }
}
interface Categories {
  name: string
  objectId: string
}

interface GetProductsData {
  products: {
    edges: { node: Product }[]
  }
  сategories: {
    edges: { node: Categories }[]
  }
}

export type { Product, GetProductsData, Categories }
