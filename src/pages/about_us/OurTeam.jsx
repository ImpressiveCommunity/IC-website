import { HeadingFont, TextFont } from "@/styles/font";
import { BsLinkedin,  } from "react-icons/bs";
import { BiLogoGoogle,  } from "react-icons/bi";

import { BoardOfDirector, managementTeam, ourAlumni } from './content.js';

export default function OurTeam() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-fit ml-16 mr-16 px-6 lg:px-8 mb-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={
              HeadingFont.className +
              " text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            }
          >
            Our team
          </h2>
          <p
            className={
              HeadingFont.className +
              " mt-6 text-lg leading-8 text-black font-bold"
            }
          >
            Board of Director
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {BoardOfDirector.map((person, index) => (
            <li key={person.name + "" + index}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3
                className={
                  HeadingFont.className +
                  " mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                }
              >
                {person.name}
              </h3>
              <p
                className={
                  TextFont.className + " text-sm leading-6 text-gray-600"
                }
              >
                {person.role}
              </p>

              <div className="flex justify-center text-xl mt-2">
                <a href={person.linkedin} target="_blank">
                  <BsLinkedin />
                </a>
                <a href={person.gmail} target="_blank" className=" pl-2">
                  <BiLogoGoogle/>
                </a>
              </div>

            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <p
            className={
              HeadingFont.className +
              " mt-6 text-lg leading-8 text-black font-bold"
            }
          >
            Management Team
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {managementTeam.map((manaTeam, index) => (
            <li key={manaTeam.name + ""+ index}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={manaTeam.imageUrl}
                alt=""
              />
              <h3
                className={
                  HeadingFont.className +
                  " mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                }
              >
                {manaTeam.name}
              </h3>
              <p
                className={
                  TextFont.className + " text-sm leading-6 text-gray-600"
                }
              >
                {manaTeam.role}
              </p>

              <div className="flex justify-center text-xl mt-2">
                <a href={manaTeam.linkedin} target="_blank">
                  <BsLinkedin />
                </a>
                <a href={manaTeam.gmail} target="_blank" className=" pl-2">
                  <BiLogoGoogle/>
                </a>
              </div>

            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-fit mt- ml-16 mr-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={
              HeadingFont.className +
              " text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            }
          >
            Our Alumni
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {ourAlumni.map((alumni, index) => (
            <li key={alumni.name + "" + index}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={alumni.imageUrl}
                alt=""
              />
              <h3
                className={
                  HeadingFont.className +
                  " mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                }
              >
                {alumni.name}
              </h3>
              <p
                className={
                  TextFont.className + " text-sm leading-6 text-gray-600"
                }
              >
                {alumni.role}
              </p>

              <div className="flex justify-center text-xl mt-2">
                <a href={alumni.linkedin} target="_blank">
                  <BsLinkedin />
                </a>
                <a href={alumni.gmail} target="_blank" className=" pl-2">
                  <BiLogoGoogle/>
                </a>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
