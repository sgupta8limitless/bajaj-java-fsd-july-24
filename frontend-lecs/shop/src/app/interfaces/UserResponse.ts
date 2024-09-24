export interface UserResponse {
    data: User[] 
    message: string
  }
  


export interface User {
    id?: number
    name: string
    email: string,
    createdAt?: string
    updatedAt?: string
  }



  // Login response 

  export interface LoginResponse {
    data: LoginData
    message: string
  }


export interface LoginData {
    roles: string[];
    token: string;
}



// Create Product Response 

export interface ProductResponse {
  data: Product
  message: string
}

export interface ProductsResponse {
  data: Product[]
  message: string
}

export interface Product {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
  createdAt: string
  updatedAt: string
}


export interface DeleteResponse {
  message: string
}



  