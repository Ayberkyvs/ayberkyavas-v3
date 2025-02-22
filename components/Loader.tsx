import Image from "next/image";
const Loader = ({ loaderIcon = null }: { loaderIcon?: React.ReactNode }) => {
  return (
    <>
      <section className="z-[99] flex h-screen w-full items-center justify-center bg-background">
        {loaderIcon ? (
          loaderIcon
        ) : (
          <Image src="/logo_icon.svg" alt="Yavas Logo" width={60} height={60} />
        )}
      </section>
    </>
  );
};

export default Loader;
