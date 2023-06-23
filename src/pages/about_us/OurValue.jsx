import { HeadingFont, TextFont } from "@/styles/font";

const values = [
  {
    name: "Value 1",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Value 2",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Value 3",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Value 4",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
];

export default function OurValue() {
  return (
    <div>
      <div className="mx-auto mt-4 max-w-fi ml-16 mr-16 px-6 sm:mt-30 lg:px-8">
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
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
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
