import { Loader } from "lucide-react";

const LoaderComponent = () => {
  return (
    <>
      <section className="flex-center z-[99] flex h-screen w-full bg-background text-foreground">
        <Loader className="animate-spin" />
      </section>
    </>
  );
};

export default LoaderComponent;
