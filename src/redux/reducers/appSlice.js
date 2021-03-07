import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    menu(state){
      if(state.show){
        state.show = false
      }else{
        state.show = true
      }
    },
    closeMenu(state){
      state.show = false
    }
}})

export const { menu,closeMenu} = appSlice.actions

export const showMenu = (state) => state.app.show

export default appSlice.reducer