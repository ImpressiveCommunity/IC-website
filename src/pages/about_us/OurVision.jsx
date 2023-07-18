import { HeadingFont, TextFont } from "@/styles/font";
import {vision_title, vision_detail} from './content.js';
import cover from '../../../public/277766930_504502274614393_3092365575195360436_n.jpg'
import Image from "next/image.js";


export default function OurVision() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="relative isolate -z-10">

          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 "
              aria-hidden="true"
            />
            <div className="mx-auto lg:mt-4 max-w-fi ml-0 mr-0 px-6 sm:mt-30 lg:px-8 lg:mr-16 lg:ml-16">
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
                <Image
                  src={cover}
                  className="mt-10  rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
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
