import NoteDetails from "@/app/components/NoteDetails";

export default function Page({ params }: { params: { id: string } }) {
    return <NoteDetails id={params.id}/>
}