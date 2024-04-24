'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdKeyboardBackspace } from "react-icons/md";
import { useAppDispatch } from '../redux/store';
import { addNote } from '../redux/mainSlice';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import Banner from './Banner';
import { useRouter } from 'next/navigation';

const AddNote = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [error, setError] = useState({
    status: false,
    message: ''
  })

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setError({...error, status: false})
      const form = new FormData(e.currentTarget)
      const title = form.get('title') as string
      const description = form.get('description') as string
      if (title.trim().length === 0 || description.trim().length === 0) {
        setError({status: true, message: 'Please fill out both fields before submitting the form.'})
        return
      }
      setIsLoading(true)
      const note = {
        id: uuidv4().replaceAll('-',''),
        title,
        description
      }
      dispatch(addNote(note))
      setTimeout(() => {
        setIsLoading(false)
        setShowBanner(true)
      }, 1500)
      setTimeout(() => {
        setShowBanner(false)
        router.push(`/notes/${note.id}`)
      }, 3000)
    } catch (error) {
      console.error(error)
      setError({status: true, message: 'Something happened on our end. Please try again later.'})
    }
  }

  return (
    <section className='text-white px-4 pt-4 md:px-12 xl:px-24 space-y-6 max-w-2xl'>
        <div className='flex items-center gap-4'>
            <Link href='/notes'><button className="bg-lightBlack py-2 px-6 rounded-lg hover:bg-black hover:text-white hover:border-white border border-transparent flex items-center gap-2"><MdKeyboardBackspace/> Back</button></Link>
        </div>
        <form onSubmit={handleAddNote} className='space-y-6'>
          <div className='space-y-4'>
              <h2 className='text-4xl'>Title</h2>
              <input name='title' type='text' maxLength={30} className='bg-transparent w-full border p-3 outline-none rounded-lg' placeholder='My Note' required/>
          </div>
          <div className='space-y-4'>
              <h2 className='text-4xl'>Description</h2>
              <textarea name='description' rows={4} maxLength={400} className='bg-transparent w-full border p-3 outline-none resize-none rounded-lg' placeholder='Finish my internship project by tomorrow' required/>
          </div>
          {error.status && <p className='text-red-600'>{error.message}</p>}
          <button type='submit' className='w-full bg-purpleMain rounded-lg py-2 hover:bg-black hover:border-purpleMain border border-transparent'>{!isLoading ? 'Add Note' : 'Adding Note...'}</button>
        </form>
        <Banner showBanner={showBanner} message='Note Added Successfully'/>
    </section>
  )
}

export default AddNote