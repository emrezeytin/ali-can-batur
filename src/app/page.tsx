import { ResponsiveDialog } from "@/components/dialog-button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-24 px-4 py-48">
      <div className="container max-w-screen-lg mx-auto">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Ali Can Batur</h1>
          <p className="font-medium text-3lg">DevRel and iOS Developer</p>
        </div>

        <p className="text-3xl font-medium leading-snug">
          I am a passionate DevRel and seasoned iOS developer with
          over a decade of{" "}
          <ResponsiveDialog word="experience">testing</ResponsiveDialog> in
          building robust mobile applications and nurturing developer
          communities. I thrive on helping other developers grow and
          sharing his extensive knowledge through public{" "}
          <ResponsiveDialog word="speaking">testing 2</ResponsiveDialog> and
          technical{" "}
          <ResponsiveDialog word="podcasts">testing 3</ResponsiveDialog>.
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
        <h2 className="mb-2 text-3xl font-medium leading-snug">Newsletter</h2>
        <p className="mb-4 text-lg leading-normal max-w-prose">
          Subscribe to our newsletter to stay up-to-date with the latest
          development news and events. We&apos;ll send you regular updates on
          our work and events.
        </p>
        <form className="flex w-full gap-2 max-w-prose">
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
