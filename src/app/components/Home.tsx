'use client'
import { useAppSelector } from "../redux/store";
import { Note } from "../redux/mainSlice";
import Link from "next/link";

const Home = () => {
  const notes = useAppSelector((state) => state.main.notes)
  
  return (
    <main className="flex flex-col px-4 pt-4 md:px-12 xl:px-24 md:pt-12 gap-6 bg-black">

      <div className="flex justify-between">
        <h2 className="text-2xl md:text-4xl text-white">My Notes</h2>
        <Link href={'/notes/add'} className="bg-white py-1 px-6 rounded-lg hover:bg-black hover:text-white hover:border-white border border-transparent flex items-center">Add Note</Link>
      </div>
      
      <section className="gap-3 w-full grid _grid">
        {notes.map((note: Note) => (
        <Link key={note.id} href={`/notes/${note.id}`} className="space-y-2 w-full h-full shadow-xl bg-lightBlack text-white rounded-lg p-4 aspect-[4/3] border border-transparent hover:bg-black hover:border-purpleMain cursor-pointer">
          <p className="text-2xl break-all border-b border-dotted pb-1 line-clamp-1">{note.title}</p>
          <p className="break-all max-w-full line-clamp-6">{note.description} ahdhdhddh  ajdjhdhdhdhddh dddhhdhd ahhshshshs sbshshshsh djjwjkwkwklwl jdjdhdhdhdh djdjdjk djdhdhd eheeeeggegegegegeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </Link>
        ))}
      </section>

    </main>
  );
}

export default Home