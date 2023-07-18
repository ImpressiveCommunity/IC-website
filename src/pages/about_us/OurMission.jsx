import { HeadingFont, TextFont } from "@/styles/font";
import { missions } from './content.js';

export default function OurMission() {
  return (
    <div className="  mx-auto max-w-fit mr-16 ml-16 px-6 sm:mt-20 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          className={
            HeadingFont.className +
            " text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          }
        >
          Our Mission
        </h2>
      </div>
      <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {missions.map((mission) => (
          <div key={mission.name}>
            <dt
              className={HeadingFont.className + " font-semibold text-gray-900"}
            >
              {mission.name}
            </dt>
            <dd className={TextFont.className + " mt-1 text-gray-600"}>
              {mission.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
