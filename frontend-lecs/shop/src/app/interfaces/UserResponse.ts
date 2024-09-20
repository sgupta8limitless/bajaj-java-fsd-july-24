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



  export interface LoginResponse {
    data: LoginData
    message: string
  }


export interface LoginData {
    roles: string[];
    token: string;
}



  