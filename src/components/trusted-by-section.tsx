import Image from "next/image";
import { InView } from "./in-view";

const companies = [
  { name: "Danlaw", file: "danlaw.png", width: 100, height: 40 },
  { name: "Bitbrew", file: "bitbrew.png", width: 100, height: 40 },
  { name: "Embitel", file: "embitel.png", width: 100, height: 40 },
  { name: "Ashok Leyland", file: "ashok-leyland.png", width: 140, height: 40 },
  { name: "Škoda", file: "skoda.png", width: 80, height: 40 },
];

export function TrustedBySection() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView>
          <p className="mb-8 text-center text-sm text-white/30">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="relative flex h-10 items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0"
                style={{ width: company.width }}
              >
                <Image
                  src={`/images/logos/${company.file}`}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}
