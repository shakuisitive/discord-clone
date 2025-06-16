function Scaffolding() {
  return (
    <div className="h-screen flex text-white">
      <div className="bg-gray-800 p-3 space-y-4 overflow-y-scroll scrollbar-hide">
        <div className="hover:bg-brand hover:rounded-2xl hover:text-white transition hover:cursor-pointer duration-200 flex text-gray-100 items-center justify-center w-12 h-12 text-white bg-gray-700 rounded-full">
          <DiscordIcon className="w-7 h-5" />
        </div>
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="text-gray-800 rounded-2xl flex items-center justify-center w-12 h-12 bg-white"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="flex flex-col bg-gray-700 w-60">
        <div className="h-12 px-3 h-12 flex-shrink-0 flex items-center shadow-md">
          hello
        </div>

        <div className="overflow-y-scroll scrollbar-hide p-3 flex-1 space-y-2">
          <p className="text-white">Channel (unread)</p>
          <p className="text-white">Channel (unread)</p>
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i}>world {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="h-12 px-3 flex items-center shadow-md flex-shrink-0">
          hello
        </div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll scrollbar-hide">
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i}>
              world {i} - Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos ullam, eius eos sunt, at delectus tempora pariatur
              excepturi sit amet hic. Illo quidem architecto quas! In officiis
              pariatur quos reiciendis.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiscordIcon(props: any) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z"
      />
    </svg>
  );
}

export default Scaffolding;
