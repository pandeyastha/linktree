import Image from "next/image";
import data from "../data.json"

export default function Home() {
  return (
    <div className="flex items-center">
      <Image
      className="rounded-full mx-auto w-full"
      alt={data.name}
      src={data.avatar}
      width={128}
      height={128}
      />
    </div>
  )
}