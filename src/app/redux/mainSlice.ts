import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Note = {
  id: string
  title: string
  description: string
}

export interface AppState {
  notes: Note[]
}

const initialState: AppState = {
  notes: [
    {
      id: '1',
      title: 'Note 1',
      description: 'This is an interesting note'
    }
  ]
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload]
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = [...state.notes].filter(note => note.id !== action.payload)
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes].map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
    },
  },
})

export const { addNote, deleteNote, updateNote } = mainSlice.actions

export default mainSlice.reducer