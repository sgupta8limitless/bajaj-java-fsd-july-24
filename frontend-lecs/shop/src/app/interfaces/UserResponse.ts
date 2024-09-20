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



  