"use client";
import { FC, useEffect, useRef } from "react";
// import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers } from "@/app/data";
import TeamMember from "@/components/TeamMember";

const TeamMembers: FC = () => {
  // const t = useTranslations("team");
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !teamRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const teamCards = teamRef.current.children;

    gsap.fromTo(
      teamCards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-[--color-w-b900]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* <div className="text-center mb-12">
          <h2 className="font-h2-h3 md:text-4xl mb-4 text-[--color-b900-w]">
            {t("meetOurTeam")}
          </h2>
          <p className="max-w-2xl mx-auto text-[--foreground] font-b2-b3">
            {t("teamDescription")}
          </p>
        </div> */}

        <div
          ref={teamRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              positionSlug={member.positionSlug}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
