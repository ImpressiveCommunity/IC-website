export default function ContactInfo() {
  return (
    <div className="bg-white py-14 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact Info
              </h2>
              <p className="text-gray-600">   </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="inbox.impressive.community@gmail.com"
                      >
                        inbox.impressive.community@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+855 70 693 381</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold text-gray-900">
                  Phnom Penh
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic text-gray-600">
                  <p>Phnom Penh</p>
                  <p>Phnome Penh</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}