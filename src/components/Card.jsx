import Image from "next/image"
import Link from "next/link"
import { RiPlayFill } from "react-icons/ri";

const Card = () => {
  return (
    <Link href='/' className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayHover transition-all duration-300 group -z-10">
      <div className="mb-4 relative">
        <Image
          src='/album.jpeg'
          alt="malmsteen album"
          width={200}
          height={350}
          className="rounded shadow-xl mx-auto "
        />
        <button className="p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-in-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-200 text-lg mb-2">Today's Top Guitar</h5>
        <p className="text-gray-200 text-sm w-[18ch]">YMN in on top of the 10!</p>
      </div>
    </Link>
  )
}

export default Card