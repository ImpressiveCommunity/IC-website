const currentMember = [
  {
    name: "Sokthoutheareach Chun",
    role: "Founder",
    imageUrl:
      "https://i.pinimg.com/736x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg",
  },
];

const ourAlumni = [
  {
    name: "Sovanroth Nath",
    role: "Member",
    imageUrl:
      "https://i.pinimg.com/736x/87/67/64/8767644bc68a14c50addf8cb2de8c59e.jpg",
  },
];

export default function OurTeam() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-black font-bold">
            Our current member
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {currentMember.map((person) => (
            <li key={person.name}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-lg leading-8 text-black font-bold">Our Alumni</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {ourAlumni.map((alumni) => (
            <li key={alumni.name}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={alumni.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {alumni.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{alumni.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
