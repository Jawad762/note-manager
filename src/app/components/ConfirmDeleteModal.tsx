'use client'
import React from 'react'
import { useAppDispatch } from '../redux/store'
import { deleteNote } from '../redux/mainSlice'
import { useRouter } from 'next/navigation'

type Props = {
    modalRef: React.RefObject<HTMLDialogElement>
    id: string
}

const ConfirmDeleteModal = ({ modalRef, id }: Props) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleDelete = () => {
        dispatch(deleteNote(id))
        router.push('/')
    }

  return (
    <dialog ref={modalRef} className='maw-w-sm md:max-w-md bg-lightBlack p-4 text-white space-y-4 rounded-lg shadow-md'>
        <h2 className='font-extrabold text-2xl md:text-4xl'>Delete Note</h2>
        <p>This action is irreversible, are you sure you want to proceed?</p>
        <div className='flex items-center gap-2'>
            <button onClick={() => modalRef.current?.close()} className="py-1 px-6 border border-transparent ml-auto">Cancel</button>
            <button onClick={handleDelete} className="bg-red-600 py-1 px-6 rounded-lg shadow-md hover:bg-black hover:text-red-600 hover:border-red-600 border border-transparent">Delete</button>  
        </div>
    </dialog>
  )
}

export default ConfirmDeleteModal