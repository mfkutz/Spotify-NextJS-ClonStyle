import Link from "next/link"
import Card from "./Card"


const ListAlbums = (props) => {

  const { title, albums } = props

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link href='/' className="text-2xl font-semibold text-gray-200 hover:underline">{title}</Link>
        <Link href='/' className="uppercase text-sm font-semibold tracking-[2px] hover:underline">Ver todo</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ListAlbums