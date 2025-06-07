import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="charter text-6xl font-bold">MAIN BRANCH</h1>
      <div className="flex justify-evenly">
        <Image src="/images/player/selected_player.png" alt="" height={300} width={200}/>
        <Image src="/images/player/player1.png" alt="" height={300} width={200}/>
        <Image src="/images/player/player4.png" alt="" height={300} width={200}/>
      </div>
    </div>
  );
}