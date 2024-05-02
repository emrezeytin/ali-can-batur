export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-24 px-4 py-48">
      <div className="container max-w-screen-lg mx-auto">
        <p className="text-3xl font-medium leading-snug">
          Ali Can Batur is a passionate DevRel and seasoned iOS developer with
          over a decade of{" "}
          <span className="cursor-pointer relative inline-block font-extrabold pb-1 hover:text-[#47585c] transition-colors duration-200 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#c8d5bb] after:transition-all after:duration-200 after:ease-in-out hover:after:h-full after:z-[-1]">
            experience
          </span>{" "}
          in building robust mobile applications and nurturing developer
          communities. Ali Can thrives on helping other developers grow and
          sharing his extensive knowledge through public{" "}
          <span className="cursor-pointer relative inline-block font-extrabold pb-1 hover:text-[#47585c] transition-colors duration-200 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#c8d5bb] after:transition-all after:duration-200 after:ease-in-out hover:after:h-full after:z-[-1]">
            speaking
          </span>{" "}
          and technical{" "}
          <span className="cursor-pointer relative inline-block font-extrabold pb-1 hover:text-[#47585c] transition-colors duration-200 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#c8d5bb] after:transition-all after:duration-200 after:ease-in-out hover:after:h-full after:z-[-1]">
            podcasts.
          </span>
        </p>
      </div>
      {/* <div className="container max-w-screen-lg mx-auto">
        <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-medium">
              Senior iOS Developer at Tech Innovations Inc.
            </h3>
            <p className="text-base">May 2022 - Present</p>
            <p className="text-base">
              Lead the development of cutting-edge iOS applications, focusing on
              optimizing performance and enhancing user experience. Mentor
              junior developers and collaborate with cross-functional teams to
              drive innovation.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-medium">
              Developer Relations Engineer at OpenSourceHub
            </h3>
            <p className="text-base">May 2017 - May 2020</p>
            <p className="text-base">
              Managed community engagement initiatives, organized conferences,
              and workshops, and developed educational content to foster the
              adoption of open-source tools among developers.
            </p>
          </li>
        </ul>
      </div>
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="mb-2 text-2xl font-semibold">Talks</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-medium">
              <strong>&quot;Modern iOS Development&quot;</strong> at Mobile
              DevCon 2023
            </h3>
            <p className="text-base">
              Discussed the latest trends in iOS development, including Swift
              best practices and the integration of machine learning features.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-medium">
              <strong>&quot;Building Communities in Tech&quot;</strong> at
              DevRelCon 2021
            </h3>
            <p className="text-base">
              Shared insights on effective strategies for building and
              maintaining vibrant developer communities.
            </p>
          </li>
        </ul>
      </div> */}
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="mb-2 text-2xl font-semibold">Newsletter</h2>
        <p className="mb-4 text-base">
          Subscribe to our newsletter to stay up-to-date with the latest
          development news and events. We&apos;ll send you regular updates on
          our work and events.
        </p>
        <form className="flex w-full gap-2">
          <input
            type="email"
            name="email"
            id="email"
            className="border border-[#c8d5bb]/50 bg-[#c8d5bb]/5 rounded-md px-4 py-2 placeholder:text-[#c8d5bb]/50 flex-grow"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="text-[#47585c] bg-[#c8d5bb] rounded-md px-4 py-2 font-semibold hover:bg-[#c8d5bb]/90 tracking-wider border border-[#c8d5bb]/50"
          >
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}
