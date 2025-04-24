interface Product {
  name: string
  description: string
  stock_quantity: number
  brand_id: { name: string }
  category_id: { edges: { node: Categories }[] }
  image_url: string
  SalesCount: number
  price: number
}
interface Brand {
  name: string
  objectId: string
}
interface SubCategory {
  objectId: string
  name: string
  Brand: {
    edges: { node: Brand }[]
  }
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
  subCategory: {
    edges: { node: SubCategory }[]
  }
}

export type { Product, GetProductsData, Categories, SubCategory }
