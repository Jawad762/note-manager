'use client'
import React, { useRef } from 'react'
import { useAppSelector } from '../redux/store'
import Link from 'next/link'
import { MdKeyboardBackspace } from "react-icons/md";
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { Note } from '../redux/mainSlice';
import { useRouter } from 'next/navigation';

const NoteDetails = ({ id }: { id: string }) => {
  const note = useAppSelector((state) => state.main.notes).find((note: Note) => note.id === id)
  const modalRef = useRef<HTMLDialogElement>(null)
  const router = useRouter()

  return note && (
    <>
    <section className='text-white px-4 py-4 md:px-12 xl:px-24 space-y-6 flex flex-col flex-grow'>
        <div className='flex items-center gap-4'>
            <Link href='/notes'><button className="bg-lightBlack py-2 px-6 rounded-lg hover:bg-black hover:text-white hover:border-white border border-transparent flex items-center gap-2"><MdKeyboardBackspace/> Back</button></Link>
            <button onClick={() => router.push(`/notes/${id}/edit`)} className="bg-purpleMain py-2 px-6 rounded-lg shadow-md hover:bg-black hover:text-purpleMain hover:border-purpleMain border border-transparent ml-auto">Edit</button>
            <button onClick={() => modalRef.current?.showModal()} className="bg-red-600 py-2 px-6 rounded-lg shadow-md hover:bg-black hover:text-red-600 hover:border-red-600 border border-transparent">Delete</button>  
        </div>
        <div className='w-full bg-lightBlack flex flex-col flex-grow p-6 space-y-3 rounded-lg'>
          <div className='space-y-2 text-2xl md:text-4xl border-b border-dotted pb-3'>
              <p className='break-all'>{note.title}</p>
          </div>
          <div className='space-y-2 flex-grow text-lg md:text-2xl'>
              <p className='break-all'>{note.description}</p>
          </div>
        </div>
    </section>
    <ConfirmDeleteModal modalRef={modalRef} id={id}/>
    </>
  )
}

export default NoteDetails