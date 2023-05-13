import Image from "next/image";
import data from "../data.json"
import Socials from "./components/Socials";


function LinkCard( {href, title, image
}: {
     href:string;
     title:string;
     image?:string }){
  return (
    <a
    href={href}
    className="flex items-center p-4 rounded-full w-full shadow-lg
     hover:shadow-xl transition-shadow  hover:scale-105 duration-300
       mb-3 bg-white bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 
       border border-gray-300 max-w-3xl">
      <div className="flex text-center w-full ">
      <div className="w-10 h-10">
      {
        image && (<Image
          className="rounded-md "
          alt={title}
          src={image}
          width={40}
          height={40}
          />)
      }
      </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-900 -ml-10
        ">{title}</h2>
      </div>
    </a>
  )
}



export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
      className="rounded-full "
      alt={data.name}
      src={data.avatar}
      width={80}
      height={80}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
    {data.links.map((link) => (<LinkCard key={link.href} {...link} />))}
      <Socials />

    </div>
  )
}

