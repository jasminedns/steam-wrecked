import ImageLink from "@/components/ImageLink";

export default function Home() {
  return (
    <div>
      <h1 className="charter text-6xl font-bold">MAIN BRANCH</h1>
      <div className="flex justify-evenly mobile">
        <ImageLink />
      </div>
    </div>
  );
}