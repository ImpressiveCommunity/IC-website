import { HeadingFont, TextFont } from "@/styles/font";
import { value_detail, values_list } from './content.js';

export default function OurValue() {
    const values = values_list;
  return (
    <div>
      <div className="mx-auto mt-4 max-w-fi ml-10 mr-10 px-6 sm:mt-30 lg:px-8 lg:mr-16 lg:ml-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={
              HeadingFont.className +
              " text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            }
          >
            Our values
          </h2>
          <p
            className={
              TextFont.className + " mt-8 text-lg leading-8 text-gray-600"
            }
          >
            {value_detail}
          </p>
        </div>
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt
                className={
                  HeadingFont.className + " font-semibold text-gray-900"
                }
              >
                {value.name}
              </dt>
              <dd className={TextFont.className + " mt-1 text-gray-600"}>
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
