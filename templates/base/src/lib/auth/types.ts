export interface User {
  sub: string
  email: string
  name?: string
  picture?: string
  email_verified?: boolean
  updated_at?: string
}

export interface Session {
  user: User
  accessToken?: string
  idToken?: string
  refreshToken?: string
}
