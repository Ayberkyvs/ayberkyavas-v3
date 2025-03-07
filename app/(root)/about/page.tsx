import ProfileContent from "@/components/about/ProfileContent";
import ProfileSidebar from "@/components/about/ProfileSidebar";
import ContactCard from "@/components/ContactCard";
import { client } from "@/sanity/lib/client";
import { ABOUT_ME_QUERY } from "@/sanity/lib/queries";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 120;

export async function generateMetadata() {
  const profileData: AboutMe = await client.fetch(ABOUT_ME_QUERY);
  const { title, name, bio, imageSrc } = profileData;
  return {
    title,
    description: bio,
    formatDetection: {
      email: true,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "About me | " + title + " | " + name,
      description: bio,
      url: "https://ayberkyavas.com/about",
      siteName: "Ayberk Yavas",
      type: "profile",
      images: imageSrc ? [{ url: urlFor(imageSrc).url() }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: title + " | " + name,
      description: bio,
      images: imageSrc ? [urlFor(imageSrc).url()] : undefined,
    },
  };
}
const Page = async () => {
  const profileData: AboutMe = await client.fetch(ABOUT_ME_QUERY);
  return (
    <>
      <section className="layout-prefix mt-[60px] h-fit w-full md:mt-[80px]">
        <div className="grid grid-cols-2 gap-[15px] xs:grid-cols-4 sm:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-12 sm:col-span-2 lg:col-span-3 xl:col-span-2">
            <ProfileSidebar data={profileData} />
          </div>
          <div className="col-span-12 xs:col-end-5 sm:col-start-3 sm:col-end-9 lg:col-start-5 lg:col-end-13 xl:col-start-4">
            <ProfileContent data={profileData} />
          </div>
        </div>
      </section>
      <div className="layout-prefix flex-center mb-0 w-full flex-col gap-[100px]">
        <ContactCard />
      </div>
    </>
  );
};

export default Page;
