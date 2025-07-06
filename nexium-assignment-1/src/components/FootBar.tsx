import Image from "next/image";

export function FootBar() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 shadow-inner flex items-center justify-center">
      <aside>
        <p className="text-center text-sm md:text-base font-medium">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          QuoteNation
        </p>
        <p className="text-center flex justify-center items-center text-sm md:text-base font-medium mt-2">
          Code Avalible on{" "}
          <a
            href="https://github.com/AlphaBeast97/Nexium_Saad_Assign1"
            className="inline-flex items-center gap-2 ml-1 px-3 py-1  rounded-full bg-white text-blue-800 font-semibold shadow hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 border border-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <Image
                src={"/github-mark.png"}
                width={20}
                height={20}
                alt="GitHub Logo"
                className="object-contain w-5 h-5"
              />
            </span>
            GitHub
          </a>
        </p>
      </aside>
    </footer>
  );
}
