import React, { createContext, useReducer, Dispatch, ReactNode, useEffect } from 'react'

interface State {
  isLogin: boolean
  user: {} | any
}

interface Action {
  type: 'USER_SUCCESS' | 'LOGIN_SUCCESS' | 'AUTH_ERROR' | 'LOGOUT'
  payload: {
    token?: string
    user?: {}
  }
}

const initialState: State = {
  isLogin: false,
  user: {},
}

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action

  switch (type) {
    case 'USER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token || '')
      return {
        isLogin: true,
        user: payload.user || {},
      }
    case 'AUTH_ERROR':
    case 'LOGOUT':
      localStorage.removeItem('token')
      return {
        isLogin: false,
        user: {},
      }
    default:
      throw new Error()
  }
}

export const UserCtx = createContext<[State, Dispatch<Action>] | undefined>(undefined)

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')

    if (storedToken) {
      // Jika token ditemukan, inisialisasikan state berdasarkan token
      dispatch({
        type: 'USER_SUCCESS',
        payload: { token: storedToken },
      })
    }
  }, [])

  return <UserCtx.Provider value={[state, dispatch]}>{children}</UserCtx.Provider>
}
