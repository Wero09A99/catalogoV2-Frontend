import { getHomeInfo } from "@/lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export const Hero = async () => {
  const { image, DescripcionRich, Titulo } = await getHomeInfo();

  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-6 py-12">
      <div className="flex-shrink-0 w-full max-w-[320px]">
        <Image
          src={image}
          alt="Hero Image"
          width={320}
          height={180}
          className="rounded-md mb-6 object-contain shadow-sm"
          priority
        />
      </div>

      <div className="flex-1 max-w-[500px] text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{Titulo}</h1>
        <div className="[&>p>strong]:font-bold mb-6 mx-6">
          <BlocksRenderer content={DescripcionRich} />
        </div>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};
