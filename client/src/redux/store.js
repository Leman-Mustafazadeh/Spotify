import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slice/player.js'
import userReducer from './slice/user.js'
export const store = configureStore({
  reducer: {
    player: playerReducer,
    user:userReducer
  },
})
