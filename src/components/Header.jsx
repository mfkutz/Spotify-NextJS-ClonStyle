'use client'

import { useMenu } from "@/context/menuContext"
import Link from "next/link"
import { RiMore2Fill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

const Header = () => {

  const { toggleMenu } = useMenu()

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/85  flex justify-between items-center p-4 ">
      <div className="md:hidden">
        <RiMore2Fill
          className="text-2xl hover:cursor-pointer px-2 box-content "
          onClick={toggleMenu}
        />
      </div>

      <div className="hidden md:flex text-3xl gap-2">
        <RiArrowLeftSLine className="cursor-pointer"/>
        <RiArrowRightSLine className="cursor-pointer" />
      </div>

      <div className="flex items-center gap-6 ">
        <Link href='/' className="hover:text-white transition-colors">Registrate</Link>
        <Link href='#' className="py-2 md:py3 px-4 rounded-full bg-white text-spotify-gray font-medium hover:scale-105 transition-transform">Iniciar sesión</Link>
      </div>
    </header>
  )
}

export default Header