import { HeadingFont, TextFont } from "@/styles/font";
import {vision_title, vision_detail} from './content.js';

export default function OurVision() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="80%"
              height="80%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>

          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-fit px-5 mr-16 ml-16 py-14 sm:py-5 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1
                  className={
                    HeadingFont.className +
                    " max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
                  }
                >
                    {vision_title}
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p
                    className={
                      TextFont.className + " text-lg leading-8 text-gray-600"
                    }
                  >
                    {vision_detail}
                  </p>
                </div>
                <img
                  src="https://z-p3-scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/277766930_504502274614393_3092365575195360436_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEP2eMLhjDP4cgny8Oz0vvzE9z4fRU6gXMT3Ph9FTqBc03Pn2PRObRn_zVEeMJMpiIhogCYnfYpEIoJjQFDGfGB&_nc_ohc=TaWGMb8AwYMAX91BLBN&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-3.fna&oh=00_AfDZVaEsmqjUkd8yj00uBeBtT1G_00NNIzLdfflzg0dLyg&oe=64B266AE"
                  alt=""
                  className="mt-10 aspect-[6/5] w-auto max-w-auto rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
      </main>
    </div>
  );
}
