import AddressI from "@/types/address";
import CardI from "@/types/card";
import ColorI from "@/types/color";
import FeatureI from "@/types/feature";
import InstructorI from "@/types/instructor";
import Link from "next/link";
import PrintLocationI from "@/types/printLocation";
import QuotationI from "@/types/quotation";
import React from "react";
import StatsI from "@/types/stats";
import StoreItemI from "@/types/storeItem";
import LocationI from "@/types/location";

export const location: LocationI = {
  city: { value: "buford", label: "Buford" },
  address: "6005 Chimney Springs Rd",
  zip: "30518",
  mapLink:
    "!1m18!1m12!1m3!1d3301.6505654960797!2d-84.0110305882497!3d34.15528101216963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59224f0b5cfa9%3A0xca2a62d0db8eb0b4!2s6005%20Chimney%20Springs%20Rd%2C%20Buford%2C%20GA%2030518%2C%20USA!5e0!3m2!1sen!2sca!4v1739399333884!5m2!1sen!2sca",
};

export const instructors: InstructorI[] = [
  {
    name: "Malcolm Pelletier",
    img: "/instructors/malcolm-pelletier.jpg",
    ctaLink: "/instructors/malcolm-pelletier",
    slug: "malcolm-pelletier",
    title: "Head Coach",
    bio: "Malcolm has been a shodan since he was 16. He started judo as a family with his parents and brother. He earned 12 national medals, including two Canadian champion titles. He placed 7th at the Pan American Cadet Championships in Cordoba, Argentina, 7th at the Cadet European Cup in Follonica, Italy and 7th at the Cadet Canada Cup in Montreal. He is a former member of the provincial team, NB, and a former member of the provincial Elite team, Quebec. He started judo at the Oromocto Dragons Club, then spent a year with Judo Otoshi before moving to Montreal to be part of the sport-study at Shidokan in Montreal. He then trained full-time at the INSQ at the National Judo Centre. He enjoys teaching others how to improve and succeed. He is the recipient of the President’s Award at the Konica Minolta Sport’s Awards, awarded by Sport NB.",
  },
  {
    name: "Vicky Nadeau",
    img: "/instructors/vicky-nadeau.jpg",
    ctaLink: "/instructors/vicky-nadeau",
    slug: "vicky-nadeau",
    title: "Coach",
    bio: "Vicky has been practicing judo since she was 10. She is Shodan from the Bushido Club of Clair, N.B. During her time with the club, she won 2 bronze medals at the Canada Games in 1999 and a silver medal at the Canadian Championships in 2001. In addition to being named Athlete of the Year at Cité des Jeunes at the end of high school, she was named Athlete of the Year by Judo NB in 2001. Vicky has worked with children and adolescents for over 20 years. She is a learning support teacher at the Antonine-Maillet school in Dieppe. She also taught physical education for nearly 10 years, which is where her passion for sports comes from. She has been teaching judo for 8 years. She has a good sense of leadership, good discipline and the ability to establish a good relationship of trust with young people. She is certified as a Judo Instructor by the National Coaching Certification Program (NCCP).",
  },
  {
    name: "Michel Bourgoin",
    img: "/instructors/michel-bourgoin.jpg",
    ctaLink: "/instructors/michel-bourgoin",
    slug: "michel-bourgoin",
    title: "Coach",
    bio: "Michel is a Shodan in judo, having also started judo at the age of 8 at the Edmundston Judo Otoshi Club with Sensei Jules Bossé. He participated and won several national tournaments when he was younger. Having taken a break from competitions during his studies, he missed judo but never lost interest. A keen analyst, he tries to help athletes to do their best judo and make them confident. Also Shodan in Jiu Traditional Japanese Jitsu (Seibu-No Jutsu) and purple belt in Brazilian Jiu Jitsu, he continues his training in the art of Budo. He is certified as a Judo Instructor by the Coaching Certification Program (NCCP).",
  },
  {
    name: "Samuel Nadeau",
    img: "/instructors/samuel-nadeau.jpg",
    ctaLink: "/instructors/samuel-nadeau",
    slug: "samuel-nadeau",
    title: "Coach & Logistics",
    bio: "Samuel is Shodan. He helps a lot with the group of beginners and the competitive-elite class. Samuel works at the Académie Sports-Arts-Études as a sports project coordinator. As an athlete, he started his judo in Moncton and then spent time at Judo Otoshi club. He then went to the Oromocto Judo Dragons Club and then the Fredericton Judo Club before returning to Dieppe. Now, Samuel enjoys volunteering his time to coach the athletes of the Judo Otoshi club. Having competed in the 2019 Canada Games, he was selected as the Manager of Team NB at the 2023 Canada Games in Prince Edward Island. He is certified as a Judo Instructor by the Coaching Certification Program (NCCP).",
  },
  {
    name: "Mahée Savoie",
    img: "/instructors/mahee-savoie.jpg",
    ctaLink: "/instructors/mahee-savoie",
    slug: "mahee-savoie",
    title: "Coach",
    bio: "Mahée is our first female Shodan, belt obtained on the competitive course in December 2022. She will soon be moving to Montreal to train with the national judo team. She will study at Cégep Maisonneuve in science. Her best results in competition were 2nd at the Canada Games (2023), 2nd at the National Elite Senior Championships (2022), 1st at the Ontario Open in Senior (2022), 2nd at the Quebec Open in Senior (2022), as well as several tours in Europe with Judo Canada. She has been helping with coaching at the club and in competition with the youngest for several years. She started martial arts at the age of 4 (Japanese jiu-jitsu) and judo at the age of 8. Her first club is Judo Otoshi. She is certified as a Judo Instructor by the National Coaching Certification Program (NCCP).",
  },
  {
    name: "Lauren Purinton",
    img: "/instructors/lauren-purinton.jpg",
    ctaLink: "/instructors/lauren-purinton",
    slug: "lauren-purinton",
    title: "Assistant Coach",
    bio: "Lauren is a Shodan in judo. She is a business administration student at the Université de Moncton. She was invited to the Elite 8 competition in 2017 and reached a 5th position at the Sportif International in Scotland in 2016. She is a double medallist at the Quebec Open, with a bronze and silver medal. She has been doing judo since the age of 5 at the Shimpokai Judo Club in Saint John. At the age of 14, she joined us in Dieppe to attend the Otoshi judo club. She in enjoying the classes and her return to judo.",
  },
  {
    name: "Louis-Philippe Leblanc",
    img: "/instructors/louis-philippe-leblanc.jpg",
    ctaLink: "/instructors/louis-philippe-leblanc",
    slug: "louis-philippe-leblanc",
    title: "Assistant Coach",
    bio: "Louis-Philippe started judo in Hull, Quebec in 1998. He was 16 years old at the time. This sport then accompanied him to the cities where he lived for studies or work, such as Sherbrooke, Montreal, Rivière-du-Loup, Winnipeg and now Dieppe. Over the course of his career, he has participated in about 15 competitions in Quebec and Ontario. He had the chance to train at the Shidokan in Montreal with Sensei Hiroshi Nakamura. That’s where he got his brown belt in 2006. He earned his black belt at the University of Manitoba Judo Club with sensei Mamoru «Moe» Oye. Since 2022, he has had a new challenge: helping his daughters and other young judokas to progress in this beautiful sport.",
  },
];

export const quotations: QuotationI[] = [
  {
    id: 1,
    name: "Jigoro Kano",
    en: {
      text: "It is not important to be better than someone else, but to be better than yesterday.",
      title: "Founder of Judo",
    },
    fr: {
      text: "Ce n’est pas important d’être meilleur que quelqu’un d’autre, mais d’être meilleur qu’hier.",
      title: "Fondateur du judo",
    },
  },
  {
    id: 2,
    name: "Jigoro Kano",
    en: {
      text: "Before and after practicing Judo or engaging in a match, opponents bow to each other. Bowing is an expression of gratitude and respect. In effect, you are thanking your opponent for giving you the opportunity to improve your technique.",
      title: "Founder of Judo",
    },
    fr: {
      text: "Avant et après avoir fait du judo ou participé à un match, les adversaires s'inclinent les uns devant les autres. S'incliner est une expression de gratitude et de respect. En effet, vous remerciez votre adversaire de vous avoir donné l’occasion d’améliorer votre technique.",
      title: "Fondateur du judo",
    },
  },
  {
    id: 3,
    name: "Jigoro Kano",
    en: {
      text: "Judo is the way to the most effective use of both physical and spiritual strength. By training you in attacks and defenses it refines your body and your soul and helps you make the spiritual essence of Judo a part of your very being. In this way you are able to perfect yourself and contribute something of value to the world. This is the final goal of Judo discipline.",
      title: "Founder of Judo",
    },
    fr: {
      text: "Le judo est le moyen d’utiliser le plus efficacement possible sa force physique et spirituelle. En vous entraînant aux attaques et aux défenses, il affine votre corps et votre âme et vous aide à intégrer l'essence spirituelle du judo à votre être même. De cette façon, vous êtes capable de vous perfectionner et d'apporter quelque chose de valeur au monde. C'est le but ultime de la discipline du Judo.",
      title: "Fondateur du judo",
    },
  },
  {
    id: 4,
    name: "Kyuzo Mifune",
    en: {
      text: "In the course of development, there was once a period when Judo was simply an art to fell down the opponent and in another period more importance was attached to physical culture. But the purpose is to be true to the standard of human life and its significance so rich that no simple words can express its implication. In other words, there is a union of body and soul, containing spiritual and physical factors put together.",
      title: "Jigoro Kano's foremost disciple",
    },
    fr: {
      text: "Au cours de son développement, il fut un temps où le judo était simplement un art pour renverser l'adversaire et, à une autre époque, plus d'importance était accordée à la culture physique. Mais le but est d'être fidèle aux normes de la vie humaine et à sa signification si riche qu'aucun mot simple ne peut en exprimer les implications. En d'autres mots, il existe une union du corps et de l'âme, contenant des facteurs spirituels et physiques réunis.",
      title: "Le disciple principal de Jigoro Kano",
    },
  },
  {
    id: 5,
    name: "Kyuzo Mifune",
    en: {
      text: "It is a superficial idea that Judo is simply an individual matter, because it is played between only two people. Real Judo means manifistation of rationality and not mere feat of physical strength. Verily, Judo truth admits no unrighteousness and is only consistent with developing the world as a peaceful and beautiful human cooperative body.",
      title: "Jigoro Kano's foremost disciple",
    },
    fr: {
      text: "C'est une idée superficielle que le judo est simplement une affaire individuelle, car il se joue entre seulement deux personnes. Le vrai judo signifie la manifestation de la rationalité et non un simple exploit de force physique. En vérité, la vérité du judo n'admet aucune injustice et n'est cohérente qu'avec le développement du monde en tant que corps coopératif humain paisible et magnifique.",
      title: "Le disciple principal de Jigoro Kano",
    },
  },
  {
    id: 6,
    name: "Kyuzo Mifune",
    en: {
      text: "This lofty spirit of Judo is in its pure and firm trait, for its principle can only be grasped by continual self-annihilating efforts and endeavor, or in other words, through continuous hard exercise in sweltering summer and rigorous cold winter. Judo training is attainable only by dint of endeavor, perserverance, and modesty besides physical exercise.",
      title: "Jigoro Kano's foremost disciple",
    },
    fr: {
      text: "Cet esprit élevé du Judo est dans son caractère pur et ferme, car son principe ne peut être saisi que par des efforts et des efforts continus qui s'auto-annihilent, ou en d'autres termes, par un exercice dur et continu au cours d'un été étouffant et d'un hiver rigoureux et froid. L'entraînement au judo n'est possible qu'à force d'effort, de persévérance et de modestie en plus de l'exercice physique.",
      title: "Le disciple principal de Jigoro Kano",
    },
  },
];

export const classesInfo: CardI[] = [
  {
    src: "/classes/class-ninjas.jpg",
    ctaLink: "/classes/ninjas",
    slug: "ninjas",
    age: { min: 4, max: 6 },
    title: "Ninjas",
    description:
      "The customer is very important, the customer will be followed by the customer. But there is no makeup that does not support the policy.",
    alt: "",
  },
  {
    src: "/classes/class-ninjas.jpg",
    ctaLink: "/classes/beginners",
    slug: "beginners",
    age: { min: 6, max: 10 },
    title: "Beginners",
    description:
      "The customer is very important, the customer will be followed by the customer. But there is no makeup that does not support the policy.",
    alt: "",
  },
  {
    src: "/classes/class-ninjas.jpg",
    ctaLink: "/classes/intermediates",
    slug: "intermediates",
    age: { min: 10, max: 14 },
    title: "Intermediates",
    description:
      "The customer is very important, the customer will be followed by the customer. But there is no makeup that does not support the policy.",
    alt: "",
  },
  {
    src: "/classes/class-ninjas.jpg",
    ctaLink: "/classes/adults-and-teens",
    slug: "adults-and-teens",
    age: { min: 14 },
    title: "Adults & Teens",
    description:
      "The customer is very important, the customer will be followed by the customer. But there is no makeup that does not support the policy.",
    alt: "",
  },
  {
    src: "/classes/class-ninjas.jpg",
    ctaLink: "/classes/elites",
    slug: "elites",
    age: { min: 14 },
    title: "Elites",
    description:
      "The customer is very important, the customer will be followed by the customer. But there is no makeup that does not support the policy.",
    alt: "",
  },
];

export const newsItems = [
  {
    id: 1,
    date: "2024-01-12",
    slug: "otoshi-judo-club-launches-beginner-friendly-workshop-for-new-year-enthusiasts",
    tags: ["Otoshi Club Events"],
    title:
      "Otoshi Judo Club Launches Beginner-Friendly Workshop for New Year Enthusiasts",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    date: "2024-01-26",
    slug: "moncton-hosts-atlantic-judo-championships-featuring-rising-stars-from-otoshi",

    tags: ["Competitions"],
    title:
      "Moncton Hosts Atlantic Judo Championships, Featuring Rising Stars from Otoshi",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    date: "2024-02-10",
    slug: "otoshi-judokas-shine-at-the-winter-provincial-judo-tournament-in-fredericton",

    tags: ["Competitions"],
    title:
      "Otoshi Judokas Shine at the Winter Provincial Judo Tournament in Fredericton",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    date: "2024-03-03",
    slug: "otoshi-judo-club-organizes-annual-fundraiser-for-kids-judo-program",
    tags: ["Otoshi Club Events"],
    title:
      "Otoshi Judo Club Organizes Annual Fundraiser for Kids' Judo Program",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    date: "2024-03-15",
    slug: "canadian-judo-federation-announces-national-ranking-updates-otoshi-athletes-make-the-cut",

    tags: ["Canada Judo"],
    title:
      "Canadian Judo Federation Announces National Ranking Updates: Otoshi Athletes Make the Cut",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    date: "2024-04-05",
    slug: "judo-for-everyone-program-launches-at-otoshi-judo-club-to-promote-inclusivity",
    tags: ["Otoshi Club Events"],
    title:
      '"Judo for Everyone" Program Launches at Otoshi Judo Club to Promote Inclusivity',
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    date: "2024-04-22",
    slug: "moncton-welcomes-top-canadian-judokas-for-the-national-team-trials",

    tags: ["Competitions"],
    title: "Moncton Welcomes Top Canadian Judokas for the National Team Trials",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    date: "2024-05-08",
    slug: "otoshi-judokas-win-big-at-the-spring-international-judo-championships-in-toronto",
    tags: ["Otoshi Club Events"],
    title:
      "Otoshi Judokas Win Big at the Spring International Judo Championships in Toronto",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    date: "2024-05-21",
    slug: "otoshi-judo-club-celebrates-10-years-of-excellence-with-a-community-bbq",

    tags: ["Otoshi Club Events"],
    title:
      "Otoshi Judo Club Celebrates 10 Years of Excellence with a Community BBQ",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    date: "2024-06-14",
    slug: "canadian-judo-day-otoshi-club-hosts-free-demonstrations-and-training-sessions",

    tags: ["Otoshi Club Events"],
    title:
      "Canadian Judo Day: Otoshi Club Hosts Free Demonstrations and Training Sessions",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    date: "2024-06-01",
    slug: "canada-day-festivities-otoshi-judo-club-joins-parade-with-a-dazzling-performance",
    tags: ["Canada Judo", "Otoshi Club Events"],
    title:
      "Canada Day Festivities: Otoshi Judo Club Joins Parade with a Dazzling Performance",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    date: "2024-06-20",
    slug: "moncton-s-otoshi-judo-club-organizes-a-summer-training-camp-for-all-ages",
    tags: ["Otoshi Club Events"],
    title:
      "Moncton’s Otoshi Judo Club Organizes a Summer Training Camp for All Ages",
    text: (
      <div>
        <p className="pb-4 last:pb-0">
          MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local martial
          arts community, is opening its doors to aspiring judokas of all ages
          and skill levels. Nestled in the heart of Moncton, the club offers a
          unique blend of traditional judo instruction and modern fitness
          training, creating a space where discipline meets community spirit.
        </p>
        <p className="pb-4 last:pb-0">
          With a team of seasoned instructors, Otoshi Judo Club ensures that
          every participant receives personalized guidance. "Our goal is to make
          judo accessible and enjoyable for everyone," says Sensei Émile Dubois,
          head instructor at the club. "We want parents to see their children
          grow in confidence, and adults to find a place where they can
          challenge themselves while reducing stress."
        </p>
        <p className="pb-4 last:pb-0">
          In addition to its regular classes, the club has announced a series of
          new initiatives, including weekend workshops and community events.
          These programs aim to provide flexibility for busy schedules while
          fostering a sense of camaraderie among members. The club also
          emphasizes inclusivity, offering bilingual instruction in English and
          French to cater to Moncton’s diverse population.
        </p>
        <p className="pb-4 last:pb-0">
          Prospective members are encouraged to visit the Otoshi Judo Club
          website for more information about upcoming events and class
          schedules. The club is currently offering a free trial class for
          newcomers, making it the perfect time to step onto the tatami and
          experience the benefits of judo firsthand.
        </p>
      </div>
    ),
  },
];
