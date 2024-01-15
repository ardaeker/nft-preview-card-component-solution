import Link from "next/link";
import Image from "next/image";
import ImageAvatar from "@/assets/images/image-avatar.png";
import ImageEquilibrium from "@/assets/images/image-equilibrium.jpg";

function IconView(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h48v48H0z" />
        <path
          d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

function IconEthereum(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconClock(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="animation flex min-h-dvh items-center justify-center font-outfit">
      <div className="max-w-card-mobile md:max-w-card-tablet rounded-card-xl bg-dark-blue p-6">
        <div className="border-b border-light-blue pb-4">
          <div className="group relative overflow-hidden rounded-lg hover:cursor-pointer">
            <Image src={ImageEquilibrium} alt="Equilibrium Image" />
            <IconView className="absolute-center z-10 opacity-0  group-hover:opacity-100" />
            <span className="absolute inset-0 bg-cyan opacity-0  group-hover:opacity-[0.503]" />
          </div>
          <h1 className="mt-6 text-[1.375rem] font-semibold text-white hover:cursor-pointer hover:text-cyan">
            Equilibrium #3429
          </h1>
          <p className="mt-3 text-[1.125rem] font-light leading-[1.625rem] text-soft-blue">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center justify-center gap-x-[.405rem]">
              <IconEthereum className="text-cyan" />
              <p className="text-[.9375rem] font-semibold text-cyan">
                0.041 ETH
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-[.4806rem]">
              <IconClock className="text-soft-blue" />
              <p className="text-[.9375rem] font-normal text-soft-blue">
                3 days left
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-x-4">
          <Image
            src={ImageAvatar}
            width={33}
            height={33}
            alt="Jules Wyvern Avatar"
            className="rounded-card-avatar border border-white"
          />
          <p className="text-[.9375rem] font-normal text-soft-blue">
            Creation of{" "}
            <Link href="#" className="text-white hover:text-cyan">
              Jules Wyvern
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
