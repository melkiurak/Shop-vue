interface Product {
  name: string
  description: string
  price: number
  stock_quantity: number
  brand_id: { name: string }
  category_id: { name: string }
}
interface SubCategory {
  name: string
}
interface Categories {
  name: string
  objectId: string
  subCategory: {
    edges: { node: SubCategory }[]
  }
}

interface GetProductsData {
  products: {
    edges: { node: Product }[]
  }
  categories: {
    edges: { node: Categories }[]
  }
}

export type { Product, GetProductsData, Categories, SubCategory }
