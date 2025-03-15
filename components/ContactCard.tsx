import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ContactCTAButtons from "@/components/ContactCTAButtons";

const ContactCard = () => {
  return (
    <>
      <Card
        className="w-full border border-border bg-card-background bg-[url('/bg_vector.svg')] bg-right-bottom bg-no-repeat p-5 shadow-lg"
        style={{ backgroundBlendMode: "overlay" }}
      >
        <CardHeader>
          <h2 className="section_heading text-white">
            {"Let's Create Something Great Together"}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="paragraph">
            Together, we can bring ideas to life and turn visions into reality.
            Let your imagination lead the way as we embark on an inspiring
            journey. Every idea has the potential to become a masterpiece with
            the right steps and collaboration.
          </p>
        </CardContent>
        <CardFooter>
          <ContactCTAButtons />
        </CardFooter>
      </Card>
    </>
  );
};

export default ContactCard;
