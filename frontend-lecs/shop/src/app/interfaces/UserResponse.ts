export interface UserResponse {
    data: User[]
    message: string
  }
  
export interface User {
    id: number
    name: string
    email: string,
   
    cartItemList: any[]
    createdAt: string
    updatedAt: string
  }



  