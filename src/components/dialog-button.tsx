"use client";

import { Drawer } from "vaul";

export function ResponsiveDialog({
  children,
  word,
}: {
  children: React.ReactNode;
  word: string;
}) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger className="cursor-pointer relative inline-block font-extrabold pb-1 hover:text-[#47585c] transition-colors duration-200 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#c8d5bb] after:transition-all after:duration-200 after:ease-in-out hover:after:h-full after:z-[-1]">
        {word}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="bg-[#47585c] flex flex-col rounded-t-[10px] h-[90%] mt-24 fixed bottom-0 left-0 right-0">
          {children}
        </Drawer.Content>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
