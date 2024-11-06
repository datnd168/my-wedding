import Image from "next/image";

export default function Memory() {
  return (
    <div className="w-full bg-gray-4 pb-24 pt-32">
      <div className="container mx-auto">
        <div className="animate-box mb-24 text-center">
          <p className="mb-4 text-sm font-semibold leading-loose text-gray">
            OUR MEMORIES
          </p>
          <h2 className="mb-4 font-sacra text-5xl font-bold text-pink md:text-6xl">
            Wedding Gallery
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1140px] flex-wrap px-5 xl:w-3/4">
          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img6.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img13.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img2.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img3.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img4.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img5.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img8.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img9.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img10.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black opacity-20 transition duration-300 hover:opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
