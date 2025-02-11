import AddressI from "@/types/address";
import CardI from "@/types/card";
import ColorI from "@/types/color";
import FeatureI from "@/types/feature";
import GenderI from "@/types/gender";
import GroupsI from "@/types/groups";
import InstructorI from "@/types/instructor";
import Link from "next/link";
import PrintLocationI from "@/types/printLocation";
import QuotationI from "@/types/quotation";
import React from "react";
import SizeI from "@/types/size";
import StatsI from "@/types/stats";
import StoreItemI from "@/types/storeItem";

export const address: AddressI[] = [
  {
    city: "Dieppe",
    address: "1571 Chemin Melanson Greater Lakeburn, NB E1H 2B9",
    mapLink:
      "!1m18!1m12!1m3!1d2767.7235260250486!2d-64.68603492336719!3d46.07655369237333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0bb7f221012a9%3A0x7d25b701b5060ad4!2s1571%20Melanson%20Rd%2C%20Greater%20Lakeburn%2C%20NB%20E1H%202B8!5e0!3m2!1sen!2sca!4v1730758297318!5m2!1sen!2sca",
  },
  {
    city: "Riverview",
    address: "567 Coverdale Road Riverview, NB E1B 3K7",
    mapLink:
      "!1m18!1m12!1m3!1d2768.4143490760275!2d-64.80955742017466!3d46.06277865069441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0b9067be4069f%3A0x7500516d1b918399!2s567%20Coverdale%20Rd%2C%20Riverview%2C%20NB%20E1B%203K7!5e0!3m2!1sen!2sca!4v1730758794768!5m2!1sen!2sca",
  },
];

export const faq = [
  {
    id: 1,
    title: "Is judo suitable for beginners, even if I’m not in shape?",
    description: () => (
      <>
        Absolutely! Our club welcomes all fitness levels, and our instructors
        are experienced in guiding beginners. You&rsquo;ll progress at your own
        pace in a supportive environment.
      </>
    ),
  },
  {
    id: 2,
    title: "What if I can’t attend every session?",
    description: () => (
      <>
        We understand that life can be busy, so our schedule is flexible. You’re
        free to attend as often as you can, and our instructors will help you
        catch up on any missed lessons.
      </>
    ),
  },
  {
    id: 3,
    title: "Will I feel out of place if I’m older than most students?",
    description: () => (
      <>
        Not at all! Judo is a sport for all ages, and we value diversity within
        our community. Many of our members are adults, and everyone is here to
        learn and grow together.
      </>
    ),
  },
  {
    id: 4,
    title: "Is judo safe for children?",
    description: () => (
      <>
        Safety is a priority at Otoshi Judo Club. Our instructors are trained to
        teach children in a way that emphasizes control, respect, and safety,
        making judo both a fun and secure activity for all ages.
      </>
    ),
  },
  {
    id: 5,
    title: "Are there any hidden fees beyond the membership?",
    description: () => (
      <>
        No surprises here! We believe in transparency, and any costs outside
        membership are communicated clearly. Plus, we offer a two-week free
        trial and various discounts.
      </>
    ),
  },
  {
    id: 6,
    title: "What should I wear to my first class?",
    description: () => (
      <>
        Comfortable athletic wear is perfect for beginners! If you decide to
        continue, we’ll guide you on getting a judo gi (uniform), but there’s no
        need to invest until you’re ready.
      </>
    ),
  },
  {
    id: 7,
    title: "Can I try a few sessions before committing?",
    description: () => (
      <>
        Yes! We offer a{" "}
        <Link
          href="/join"
          className="text-white bg-red-700 px-2 py-1 rounded-xl hover:bg-red-900 transition-color duration-300"
        >
          two-week free trial
        </Link>{" "}
        so you can experience the club firsthand. This way, you can decide if
        Otoshi Judo Club is the right fit for you, risk-free.
      </>
    ),
  },
  {
    id: 8,
    title:
      "Will I be able to practice if I have no prior martial arts experience?",
    description: () => (
      <>
        Absolutely! Many of our members are complete beginners, and our programs
        are designed to teach you from the ground up. You’ll gain skills and
        confidence with each session.
      </>
    ),
  },
  {
    id: 9,
    title: "Is it easy to make friends at the club?",
    description: () => (
      <>
        Our community is warm and welcoming, and we regularly organize social
        events. Members support each other both on and off the mats, so you’ll
        quickly feel like part of the family.
      </>
    ),
  },
  {
    id: 10,
    title: "How does judo benefit mental health?",
    description: () => (
      <>
        Judo isn’t just physical; it promotes focus, discipline, and stress
        relief. Many of our members find that practicing judo positively impacts
        their mental well-being as much as their physical health.
      </>
    ),
  },
];

export const stats: StatsI[] = [
  {
    id: 1,
    targetNumber: 10,
    increment: 1,
    suffix: " years",
    text: "Serving the community with high-quality judo training",
  },
  {
    id: 2,
    targetNumber: 30,
    increment: 1,
    suffix: "+",
    text: "Medals won by Otoshi students in regional competitions in the past 5 years",
  },
  {
    id: 3,
    targetNumber: 80,
    increment: 10,
    suffix: "%",
    text: "Member retention rate, reflecting a positive training experience",
  },
];

export const groups: GroupsI[] = [
  {
    city: {
      value: "dieppe",
      label: "Dieppe",
    },
    location: {
      address: "1571 Chemin Melanson Greater Lakeburn",
      postalCode: "E1H 2B9",
      mapLink:
        "!1m18!1m12!1m3!1d2767.7235260250486!2d-64.68603492336719!3d46.07655369237333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0bb7f221012a9%3A0x7d25b701b5060ad4!2s1571%20Melanson%20Rd%2C%20Greater%20Lakeburn%2C%20NB%20E1H%202B8!5e0!3m2!1sen!2sca!4v1730758297318!5m2!1sen!2sca",
    },
    groups: [
      {
        id: "ninjas",
        name: {
          en: "Ninjas",
          fr: "Ninjas",
        },
        age: { min: 4, max: 6 },
        cost: 50,
        schedule: [
          {
            day: { en: "Saturday", fr: "Samedi" },
            timeStart: "09:00",
            timeEnd: "09:45",
          },
        ],
      },
      {
        id: "beginners",
        name: {
          en: "Beginners",
          fr: "Débutants",
        },
        age: { min: 6, max: 10 },
        cost: 80,
        schedule: [
          {
            day: { en: "Tuesday", fr: "Mardi" },
            timeStart: "17:00",
            timeEnd: "18:00",
          },
          {
            day: { en: "Tuesday", fr: "Mardi" },
            timeStart: "18:00",
            timeEnd: "19:00",
          },
          {
            day: { en: "Thursday", fr: "Jeudi" },
            timeStart: "17:00",
            timeEnd: "18:00",
          },
          {
            day: { en: "Thursday", fr: "Jeudi" },
            timeStart: "18:00",
            timeEnd: "19:00",
          },
        ],
      },
      {
        id: "intermediates-regular",
        name: {
          en: "Regular Intermediates",
          fr: "Intermédiaires réguliers",
        },
        age: { min: 10, max: 14 },
        cost: 90,
        schedule: [
          {
            day: { en: "Monday", fr: "Lundi" },
            timeStart: "18:00",
            timeEnd: "19:30",
          },
          {
            day: { en: "Friday", fr: "Vendredi" },
            timeStart: "18:00",
            timeEnd: "19:30",
          },
        ],
      },
      {
        id: "intermediates-competitive",
        name: {
          en: "Competitive Intermediates",
          fr: "Intermédiaires compétitifs",
        },
        age: { min: 10, max: 14 },
        cost: 135,
        schedule: [
          {
            day: { en: "Monday", fr: "Lundi" },
            timeStart: "18:00",
            timeEnd: "19:30",
          },
          {
            day: { en: "Wednesday", fr: "Mercredi" },
            timeStart: "18:00",
            timeEnd: "19:30",
          },
          {
            day: { en: "Friday", fr: "Vendredi" },
            timeStart: "18:00",
            timeEnd: "19:30",
          },
        ],
      },
      {
        id: "adults-and-teens",
        name: {
          en: "Adults & Teens",
          fr: "Adultes & Ados",
        },
        age: { min: 14, max: null },
        cost: 90,
        schedule: [
          {
            day: { en: "Monday", fr: "Lundi" },
            timeStart: "19:30",
            timeEnd: "21:00",
          },
          {
            day: { en: "Wednesday", fr: "Mercredi" },
            timeStart: "19:30",
            timeEnd: "21:00",
          },
        ],
      },
      {
        id: "elites",
        name: {
          en: "Elites",
          fr: "Elites",
        },
        age: null,
        cost: 195,
        schedule: [
          {
            day: { en: "Tuesday", fr: "Mardi" },
            timeStart: "19:00",
            timeEnd: "21:00",
          },
          {
            day: { en: "Thursday", fr: "Jeudi" },
            timeStart: "19:00",
            timeEnd: "21:00",
          },
          {
            day: { en: "Friday", fr: "Vendredi" },
            timeStart: "19:30",
            timeEnd: "21:00",
          },
          {
            day: { en: "Saturday", fr: "Samedi" },
            timeStart: "10:00",
            timeEnd: "12:00",
          },
        ],
      },
    ],
  },
  {
    city: {
      value: "riverview",
      label: "Riverview",
    },
    location: {
      address: "567 Coverdale Road Riverview",
      postalCode: "E1B 3K7",
      mapLink:
        "!1m18!1m12!1m3!1d2768.4143490760275!2d-64.80955742017466!3d46.06277865069441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0b9067be4069f%3A0x7500516d1b918399!2s567%20Coverdale%20Rd%2C%20Riverview%2C%20NB%20E1B%203K7!5e0!3m2!1sen!2sca!4v1730758794768!5m2!1sen!2sca",
    },
    groups: [
      {
        id: "beginners",
        name: {
          en: "Beginners",
          fr: "Débutants",
        },
        age: { min: 6, max: 10 },
        cost: 80,
        schedule: [
          {
            day: { en: "Monday", fr: "Lundi" },
            timeStart: "18:00",
            timeEnd: "19:00",
          },
          {
            day: { en: "Wednesday", fr: "Mercredi" },
            timeStart: "18:00",
            timeEnd: "19:00",
          },
        ],
      },
      {
        id: "intermediates-regular",
        name: {
          en: "Regular Intermediates",
          fr: "Intermédiaires réguliers",
        },
        age: { min: 11, max: null },
        cost: 85,
        schedule: [
          {
            day: { en: "Monday", fr: "Lundi" },
            timeStart: "19:15",
            timeEnd: "20:30",
          },
          {
            day: { en: "Wednesday", fr: "Mercredi" },
            timeStart: "19:15",
            timeEnd: "20:30",
          },
        ],
      },
    ],
  },
];

export const genders: GenderI[] = [
  {
    value: "male",
    label: {
      en: "male",
      fr: "masculin",
    },
  },
  {
    value: "female",
    label: {
      en: "female",
      fr: "femelle",
    },
  },
  {
    value: "nonbinary",
    label: {
      en: "non-binary",
      fr: "non binaire",
    },
  },
];

export const instructors: InstructorI[] = [
  {
    name: "Malcolm Pelletier",
    img: "/instructors/malcolm-pelletier.jpg",
    ctaLink: "/instructors/malcolm-pelletier",
    slug: "malcolm-pelletier",
    en: {
      title: "Head Coach",
      bio: "Malcolm has been a shodan since he was 16. He started judo as a family with his parents and brother. He earned 12 national medals, including two Canadian champion titles. He placed 7th at the Pan American Cadet Championships in Cordoba, Argentina, 7th at the Cadet European Cup in Follonica, Italy and 7th at the Cadet Canada Cup in Montreal. He is a former member of the provincial team, NB, and a former member of the provincial Elite team, Quebec. He started judo at the Oromocto Dragons Club, then spent a year with Judo Otoshi before moving to Montreal to be part of the sport-study at Shidokan in Montreal. He then trained full-time at the INSQ at the National Judo Centre. He enjoys teaching others how to improve and succeed. He is the recipient of the President’s Award at the Konica Minolta Sport’s Awards, awarded by Sport NB.",
    },
    fr: {
      title: "Entraîneur-chef",
      bio: "Malcolm est un shodan depuis qu'il a 16 ans. Il a commencé le judo en famille avec ses parents et son frère. Il a remporté 12 médailles nationales, dont deux titres de champion canadien. Il s'est classé 7e aux Championnats panaméricains cadets à Cordoba, en Argentine, 7e à la Coupe d'Europe cadette à Follonica, en Italie et 7e à la Coupe Cadet Canada à Montréal. Il est un ancien membre de l'équipe provinciale du Nouveau-Brunswick et un ancien membre de l'équipe provinciale Élite du Québec. Il a commencé le judo au Club des Dragons d'Oromocto, puis a passé un an avec Judo Otoshi avant de déménager à Montréal pour faire partie du sport-études au Shidokan à Montréal. Il s'entraîne ensuite à temps plein à l'INSQ au Centre National de Judo. Il aime apprendre aux autres comment s'améliorer et réussir. Il est le récipiendaire du Prix du Président lors des Konica Minolta Sport’s Awards, décernés par Sport NB.",
    },
  },
  {
    name: "Vicky Nadeau",
    img: "/instructors/vicky-nadeau.jpg",
    ctaLink: "/instructors/vicky-nadeau",
    slug: "vicky-nadeau",
    en: {
      title: "Coach",
      bio: "Vicky has been practicing judo since she was 10. She is Shodan from the Bushido Club of Clair, N.B. During her time with the club, she won 2 bronze medals at the Canada Games in 1999 and a silver medal at the Canadian Championships in 2001. In addition to being named Athlete of the Year at Cité des Jeunes at the end of high school, she was named Athlete of the Year by Judo NB in 2001. Vicky has worked with children and adolescents for over 20 years. She is a learning support teacher at the Antonine-Maillet school in Dieppe. She also taught physical education for nearly 10 years, which is where her passion for sports comes from. She has been teaching judo for 8 years. She has a good sense of leadership, good discipline and the ability to establish a good relationship of trust with young people. She is certified as a Judo Instructor by the National Coaching Certification Program (NCCP).",
    },
    fr: {
      title: "Entraîneur",
      bio: "Vicky fait du judo depuis qu'elle a 10 ans. Durant son passage au club, elle a remporté 2 médailles de bronze aux Jeux du Canada en 1999 et une médaille d'argent aux Championnats canadiens en 2001. En plus d'être nommée Athlète de l'année à la Cité des Jeunes à la fin de ses études secondaires, elle a été nommée athlète de l'année par Judo NB en 2001. Vicky travaille auprès des enfants et des adolescents depuis plus de 20 ans. Elle enseigne le soutien aux apprentissages à l'école Antonine-Maillet de Dieppe. Elle a aussi enseigné l'éducation physique pendant près de 10 ans, d'où sa passion pour le sport. Elle enseigne le judo depuis 8 ans. Elle a un bon sens du leadership, une bonne discipline et la capacité d'établir une bonne relation de confiance avec les jeunes. Elle est certifiée comme instructrice de judo par le Programme national de certification des entraîneurs (PNCE).",
    },
  },
  {
    name: "Michel Bourgoin",
    img: "/instructors/michel-bourgoin.jpg",
    ctaLink: "/instructors/michel-bourgoin",
    slug: "michel-bourgoin",
    en: {
      title: "Coach",
      bio: "Michel is a Shodan in judo, having also started judo at the age of 8 at the Edmundston Judo Otoshi Club with Sensei Jules Bossé. He participated and won several national tournaments when he was younger. Having taken a break from competitions during his studies, he missed judo but never lost interest. A keen analyst, he tries to help athletes to do their best judo and make them confident. Also Shodan in Jiu Traditional Japanese Jitsu (Seibu-No Jutsu) and purple belt in Brazilian Jiu Jitsu, he continues his training in the art of Budo. He is certified as a Judo Instructor by the Coaching Certification Program (NCCP).",
    },
    fr: {
      title: "Entraîneur",
      bio: "Michel est un Shodan en judo, ayant également commencé le judo à l'âge de 8 ans au Club de judo Otoshi d'Edmundston avec Sensei Jules Bossé. Il a participé et gagné plusieurs tournois nationaux quand il était plus jeune. Ayant pris une pause dans les compétitions pendant ses études, le judo lui manque, mais ne s'en désintéresse jamais. Analyste passionné, il essaie d'aider les athlètes à faire de leur mieux en judo et à leur donner confiance. Également Shodan en jiu-jitsu traditionnel japonais (Seibu-No Jutsu) et ceinture violette en jiu-jitsu brésilien, il poursuit sa formation dans l'art du Budo. Il est certifié comme instructeur de judo par le Programme de certification des entraîneurs (PNCE).",
    },
  },
  {
    name: "Samuel Nadeau",
    img: "/instructors/samuel-nadeau.jpg",
    ctaLink: "/instructors/samuel-nadeau",
    slug: "samuel-nadeau",
    en: {
      title: "Coach & Logistics",
      bio: "Samuel is Shodan. He helps a lot with the group of beginners and the competitive-elite class. Samuel works at the Académie Sports-Arts-Études as a sports project coordinator. As an athlete, he started his judo in Moncton and then spent time at Judo Otoshi club. He then went to the Oromocto Judo Dragons Club and then the Fredericton Judo Club before returning to Dieppe. Now, Samuel enjoys volunteering his time to coach the athletes of the Judo Otoshi club. Having competed in the 2019 Canada Games, he was selected as the Manager of Team NB at the 2023 Canada Games in Prince Edward Island. He is certified as a Judo Instructor by the Coaching Certification Program (NCCP).",
    },
    fr: {
      title: "Coach et logistique",
      bio: "Samuel est Shodan. Il aide beaucoup avec le groupe de débutants et la classe compétitive-élite. Samuel travaille à l'Académie Sports-Arts-Études comme coordonnateur de projets sportifs. En tant qu'athlète, il a commencé le judo à Moncton et a ensuite passé du temps au club de judo Otoshi. Il fréquente ensuite le Club de Judo Dragons d'Oromocto puis le Club de Judo de Fredericton avant de retourner à Dieppe. Aujourd'hui, Samuel aime donner de son temps pour entraîner les athlètes du club de judo Otoshi. Après avoir participé aux Jeux du Canada 2019, il a été sélectionné comme gérant d'Équipe NB aux Jeux du Canada 2023 à l'Île-du-Prince-Édouard. Il est certifié comme instructeur de judo par le Programme de certification des entraîneurs (PNCE).",
    },
  },
  {
    name: "Mahée Savoie",
    img: "/instructors/mahee-savoie.jpg",
    ctaLink: "/instructors/mahee-savoie",
    slug: "mahee-savoie",
    en: {
      title: "Coach",
      bio: "Mahée is our first female Shodan, belt obtained on the competitive course in December 2022. She will soon be moving to Montreal to train with the national judo team. She will study at Cégep Maisonneuve in science. Her best results in competition were 2nd at the Canada Games (2023), 2nd at the National Elite Senior Championships (2022), 1st at the Ontario Open in Senior (2022), 2nd at the Quebec Open in Senior (2022), as well as several tours in Europe with Judo Canada. She has been helping with coaching at the club and in competition with the youngest for several years. She started martial arts at the age of 4 (Japanese jiu-jitsu) and judo at the age of 8. Her first club is Judo Otoshi. She is certified as a Judo Instructor by the National Coaching Certification Program (NCCP).",
    },
    fr: {
      title: "Entraîneur",
      bio: "Mahée est notre première Shodan féminine, ceinture obtenue sur le parcours compétitif en décembre 2022. Elle déménagera bientôt à Montréal pour s'entraîner avec l'équipe nationale de judo. Elle étudiera au cégep Maisonneuve en sciences. Ses meilleurs résultats en compétition ont été 2e aux Jeux du Canada (2023), 2e aux Championnats nationaux élite senior (2022), 1re à l'Omnium de l'Ontario chez les seniors (2022), 2e à l'Omnium du Québec chez les seniors (2022), ainsi que plusieurs tournées en Europe avec Judo Canada. Elle aide au coaching au club et en compétition auprès des plus jeunes depuis plusieurs années. Elle a commencé les arts martiaux à l'âge de 4 ans (jiu-jitsu japonais) et le judo à l'âge de 8 ans. Elle est certifiée comme instructrice de judo par le Programme national de certification des entraîneurs (PNCE).",
    },
  },
  {
    name: "Lauren Purinton",
    img: "/instructors/lauren-purinton.jpg",
    ctaLink: "/instructors/lauren-purinton",
    slug: "lauren-purinton",
    en: {
      title: "Assistant Coach",
      bio: "Lauren is a Shodan in judo. She is a business administration student at the Université de Moncton. She was invited to the Elite 8 competition in 2017 and reached a 5th position at the Sportif International in Scotland in 2016. She is a double medallist at the Quebec Open, with a bronze and silver medal. She has been doing judo since the age of 5 at the Shimpokai Judo Club in Saint John. At the age of 14, she joined us in Dieppe to attend the Otoshi judo club. She in enjoying the classes and her return to judo.",
    },
    fr: {
      title: "Entraîneur adjoint",
      bio: "Lauren est une Shodan en judo. Elle est étudiante en administration des affaires à l'Université de Moncton. Elle a été invitée à la compétition Élite 8 en 2017 et a atteint la 5e position au Sportif International en Écosse en 2016. Elle est double médaillée à l'Open de Québec, avec une médaille de bronze et une d'argent. Elle pratique le judo depuis l'âge de 5 ans au Shimpokai Judo Club de Saint John. À l'âge de 14 ans, elle se joint à nous à Dieppe pour assister au club de judo Otoshi. Elle profite des cours et de son retour au judo.",
    },
  },
  {
    name: "Louis-Philippe Leblanc",
    img: "/instructors/louis-philippe-leblanc.jpg",
    ctaLink: "/instructors/louis-philippe-leblanc",
    slug: "louis-philippe-leblanc",
    en: {
      title: "Assistant Coach",
      bio: "Louis-Philippe started judo in Hull, Quebec in 1998. He was 16 years old at the time. This sport then accompanied him to the cities where he lived for studies or work, such as Sherbrooke, Montreal, Rivière-du-Loup, Winnipeg and now Dieppe. Over the course of his career, he has participated in about 15 competitions in Quebec and Ontario. He had the chance to train at the Shidokan in Montreal with Sensei Hiroshi Nakamura. That’s where he got his brown belt in 2006. He earned his black belt at the University of Manitoba Judo Club with sensei Mamoru «Moe» Oye. Since 2022, he has had a new challenge: helping his daughters and other young judokas to progress in this beautiful sport.",
    },
    fr: {
      title: "Entraîneur adjoint",
      bio: "Louis-Philippe a commencé le judo à Hull, Québec en 1998. Il avait alors 16 ans. Ce sport l'a ensuite accompagné dans les villes où il a vécu pour ses études ou son travail, comme Sherbrooke, Montréal, Rivière-du-Loup, Winnipeg et maintenant Dieppe. Au cours de sa carrière, il a participé à une quinzaine de compétitions au Québec et en Ontario. Il a eu la chance de s'entraîner au Shidokan de Montréal avec Sensei Hiroshi Nakamura. C'est là qu'il a obtenu sa ceinture marron en 2006. Il a obtenu sa ceinture noire au Club de judo de l'Université du Manitoba avec le sensei Mamoru « Moe » Oye. Depuis 2022, il a un nouveau défi : aider ses filles et autres jeunes judokas à progresser dans ce beau sport.",
    },
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

export const achievements: StatsI[] = [
  {
    id: 1,
    targetNumber: 10,
    increment: 1,
    suffix: " champs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum nulla non aliquet lobortis. Nullam eget ligula magna.",
  },
  {
    id: 2,
    targetNumber: 20,
    increment: 1,
    suffix: " medals",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum nulla non aliquet lobortis. Nullam eget ligula magna.",
  },
  {
    id: 3,
    targetNumber: 300,
    increment: 10,
    suffix: " judokas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum nulla non aliquet lobortis. Nullam eget ligula magna.",
  },
];

export const newsItems = [
  {
    id: 1,
    date: "2024-01-12",
    slug: "otoshi-judo-club-launches-beginner-friendly-workshop-for-new-year-enthusiasts",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Otoshi Judo Club Launches Beginner-Friendly Workshop for New Year Enthusiasts",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Le club de judo Otoshi organise un atelier adapté aux débutants pour les amateurs du Nouvel An",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d&rsquo;enseignement de judo
            traditionnel et d'entraînement physique moderne, créant un espace où
            la discipline rencontre l&rsquo;esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d&rsquo;instructeurs chevronnés, Otoshi Judo Club
            veille à ce que chaque participant reçoive des conseils
            personnalisés. « Notre objectif est de rendre le judo accessible et
            agréable pour tous », explique Sensei Émile Dubois, instructeur en
            chef du club. "On veut que les parents voient leurs enfants grandir
            en confiance et que les adultes trouvent un endroit où ils peuvent
            se mettre au défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l&rsquo;accent sur l&rsquo;inclusion, en offrant un enseignement
            bilingue en anglais et en français pour répondre aux besoins de la
            population diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d&rsquo;informations sur les événements à
            venir et les horaires des cours. Le club offre présentement un cours
            d&rsquo;essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 2,
    date: "2024-01-26",
    slug: "moncton-hosts-atlantic-judo-championships-featuring-rising-stars-from-otoshi",
    en: {
      tags: ["Competitions"],
      title:
        "Moncton Hosts Atlantic Judo Championships, Featuring Rising Stars from Otoshi",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Competitions"],
      title:
        "Moncton accueille les Championnats de judo de l'Atlantique, mettant en vedette les étoiles montantes d'Otoshi",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 3,
    date: "2024-02-10",
    slug: "otoshi-judokas-shine-at-the-winter-provincial-judo-tournament-in-fredericton",
    en: {
      tags: ["Competitions"],
      title:
        "Otoshi Judokas Shine at the Winter Provincial Judo Tournament in Fredericton",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Competitions"],
      title:
        "Les judokas Otoshi brillent au tournoi provincial hivernal de judo à Fredericton",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 4,
    date: "2024-03-03",
    slug: "otoshi-judo-club-organizes-annual-fundraiser-for-kids-judo-program",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Otoshi Judo Club Organizes Annual Fundraiser for Kids' Judo Program",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Le club de judo Otoshi organise une collecte de fonds annuelle pour le programme de judo pour enfants",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 5,
    date: "2024-03-15",
    slug: "canadian-judo-federation-announces-national-ranking-updates-otoshi-athletes-make-the-cut",
    en: {
      tags: ["Canada Judo"],
      title:
        "Canadian Judo Federation Announces National Ranking Updates: Otoshi Athletes Make the Cut",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Judo canadien"],
      title:
        "La Fédération canadienne de judo annonce des mises à jour du classement national : les athlètes Otoshi se qualifient",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 6,
    date: "2024-04-05",
    slug: "judo-for-everyone-program-launches-at-otoshi-judo-club-to-promote-inclusivity",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        '"Judo for Everyone" Program Launches at Otoshi Judo Club to Promote Inclusivity',
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Lancement du programme « Judo pour tous » au club de judo Otoshi pour promouvoir l'inclusivité",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 7,
    date: "2024-04-22",
    slug: "moncton-welcomes-top-canadian-judokas-for-the-national-team-trials",
    en: {
      tags: ["Competitions"],
      title:
        "Moncton Welcomes Top Canadian Judokas for the National Team Trials",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Competitions"],
      title:
        "Moncton accueille les meilleurs judokas canadiens pour les essais de l'équipe nationale",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 8,
    date: "2024-05-08",
    slug: "otoshi-judokas-win-big-at-the-spring-international-judo-championships-in-toronto",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Otoshi Judokas Win Big at the Spring International Judo Championships in Toronto",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Les judokas Otoshi remportent gros aux Championnats internationaux de judo du printemps à Toronto",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 9,
    date: "2024-05-21",
    slug: "otoshi-judo-club-celebrates-10-years-of-excellence-with-a-community-bbq",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Otoshi Judo Club Celebrates 10 Years of Excellence with a Community BBQ",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Le club de judo Otoshi célèbre 10 ans d'excellence avec un barbecue communautaire",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 10,
    date: "2024-06-14",
    slug: "canadian-judo-day-otoshi-club-hosts-free-demonstrations-and-training-sessions",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Canadian Judo Day: Otoshi Club Hosts Free Demonstrations and Training Sessions",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Journée canadienne du judo : le club Otoshi organise des démonstrations et des séances d'entraînement gratuites",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 11,
    date: "2024-06-01",
    slug: "canada-day-festivities-otoshi-judo-club-joins-parade-with-a-dazzling-performance",
    en: {
      tags: ["Canada Judo", "Otoshi Club Events"],
      title:
        "Canada Day Festivities: Otoshi Judo Club Joins Parade with a Dazzling Performance",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Judo canadien", "Événements du Club Otoshi"],
      title:
        "Festivités de la fête du Canada : le club de judo Otoshi se joint au défilé avec une performance éblouissante",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 12,
    date: "2024-06-20",
    slug: "moncton-s-otoshi-judo-club-organizes-a-summer-training-camp-for-all-ages",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Moncton’s Otoshi Judo Club Organizes a Summer Training Camp for All Ages",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Le Club de judo Otoshi de Moncton organise un camp d'entraînement d'été pour tous les âges",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 13,
    date: "2024-08-05",
    slug: "team-otoshi-dominates-the-regional-judo-league-finals-in-halifax",
    en: {
      tags: ["Otoshi Club Events"],
      title: "Team Otoshi Dominates the Regional Judo League Finals in Halifax",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "L'équipe Otoshi domine les finales de la Ligue régionale de judo à Halifax",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 14,
    date: "2024-09-10",
    slug: "back-to-school-special-otoshi-judo-club-offers-discounts-for-student-members",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Back-to-School Special: Otoshi Judo Club Offers Discounts for Student Members",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Spécial rentrée scolaire : le club de judo Otoshi offre des rabais aux membres étudiants",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 15,
    date: "2024-09-25",
    slug: "otoshi-judokas-prepare-for-the-pan-canadian-judo-tournament-in-montreal",
    en: {
      tags: ["Otoshi Club Events", "Competitions"],
      title:
        "Otoshi Judokas Prepare for the Pan-Canadian Judo Tournament in Montreal",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi", "Competitions"],
      title:
        "Otoshi Judokas se prépare pour le tournoi pancanadien de judo à Montréal",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 16,
    date: "2024-10-18",
    slug: "local-heroes-otoshi-judokas-bring-home-gold-from-the-fall-open-judo-cup",
    en: {
      tags: ["Otoshi Club Events", "Canada Judo"],
      title:
        "Local Heroes: Otoshi Judokas Bring Home Gold from the Fall Open Judo Cup",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi", "Judo canadien"],
      title:
        "Héros locaux : les judokas Otoshi remportent l'or de la Coupe de judo ouverte d'automne",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 17,
    date: "2024-10-31",
    slug: "spooky-fun-at-otoshi-judo-club-s-halloween-themed-family-training-session",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Spooky Fun at Otoshi Judo Club’s Halloween-Themed Family Training Session",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Du plaisir effrayant lors de la séance d'entraînement familiale sur le thème d'Halloween du Otoshi Judo Club",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 18,
    date: "2024-11-12",
    slug: "judo-canada-hosts-advanced-coaching-workshop-in-moncton-welcoming-otoshi-coaches",
    en: {
      tags: ["Canada Judo", "Otoshi Club Events"],
      title:
        "Judo Canada Hosts Advanced Coaching Workshop in Moncton, Welcoming Otoshi Coaches",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Judo canadien", "Événements du Club Otoshi"],
      title:
        "Judo Canada organise un atelier d'entraînement avancé à Moncton, accueillant les entraîneurs Otoshi",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 19,
    date: "2024-11-30",
    slug: "otoshi-judo-club-partners-with-local-schools-for-anti-bullying-campaign",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Otoshi Judo Club Partners with Local Schools for Anti-Bullying Campaign",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone," says Sensei Émile
            Dubois, head instructor at the club. "We want parents to see their
            children grow in confidence, and adults to find a place where they
            can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Le club de judo Otoshi s'associe aux écoles locales pour une campagne anti-intimidation",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
  {
    id: 20,
    date: "2024-12-15",
    slug: "holiday-cheer-otoshi-judo-club-hosts-end-of-year-gala-and-award-ceremony",
    en: {
      tags: ["Otoshi Club Events"],
      title:
        "Holiday Cheer: Otoshi Judo Club Hosts End-of-Year Gala and Award Ceremony",
      // text: <p>test123</p>,
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – The Otoshi Judo Club, a cornerstone of the local
            martial arts community, is opening its doors to aspiring judokas of
            all ages and skill levels. Nestled in the heart of Moncton, the club
            offers a unique blend of traditional judo instruction and modern
            fitness training, creating a space where discipline meets community
            spirit.
          </p>
          <p className="pb-4 last:pb-0">
            With a team of seasoned instructors, Otoshi Judo Club ensures that
            every participant receives personalized guidance. "Our goal is to
            make judo accessible and enjoyable for everyone,&quot; says Sensei
            Émile Dubois, head instructor at the club. "We want parents to see
            their children grow in confidence, and adults to find a place where
            they can challenge themselves while reducing stress."
          </p>
          <p className="pb-4 last:pb-0">
            In addition to its regular classes, the club has announced a series
            of new initiatives, including weekend workshops and community
            events. These programs aim to provide flexibility for busy schedules
            while fostering a sense of camaraderie among members. The club also
            emphasizes inclusivity, offering bilingual instruction in English
            and French to cater to Moncton’s diverse population.
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
    fr: {
      tags: ["Événements du Club Otoshi"],
      title:
        "Joyeux Noël : le club de judo Otoshi organise un gala de fin d'année et une cérémonie de remise de prix",
      text: (
        <div>
          <p className="pb-4 last:pb-0">
            MONCTON, NB – Le club de judo Otoshi, pierre angulaire de la
            communauté locale des arts martiaux, ouvre ses portes aux aspirants
            judokas de tous âges et de tous niveaux. Niché au cœur de Moncton,
            le club offre un mélange unique d'enseignement de judo traditionnel
            et d'entraînement physique moderne, créant un espace où la
            discipline rencontre l'esprit communautaire.
          </p>
          <p className="pb-4 last:pb-0">
            Avec une équipe d'instructeurs chevronnés, Otoshi Judo Club veille à
            ce que chaque participant reçoive des conseils personnalisés. «
            Notre objectif est de rendre le judo accessible et agréable pour
            tous », explique Sensei Émile Dubois, instructeur en chef du club.
            "On veut que les parents voient leurs enfants grandir en confiance
            et que les adultes trouvent un endroit où ils peuvent se mettre au
            défi tout en réduisant le stress."
          </p>
          <p className="pb-4 last:pb-0">
            En plus de ses cours réguliers, le club a annoncé une série de
            nouvelles initiatives, notamment des ateliers de fin de semaine et
            des événements communautaires. Ces programmes visent à offrir de la
            flexibilité pour les horaires chargés tout en favorisant un
            sentiment de camaraderie entre les membres. Le club met également
            l'accent sur l'inclusion, en offrant un enseignement bilingue en
            anglais et en français pour répondre aux besoins de la population
            diversifiée de Moncton.
          </p>
          <p className="pb-4 last:pb-0">
            Les membres potentiels sont encouragés à visiter le site Web du
            Otoshi Judo Club pour plus d'informations sur les événements à venir
            et les horaires des cours. Le club offre présentement un cours
            d'essai gratuit pour les nouveaux arrivants, ce qui en fait le
            moment idéal pour monter sur le tatami et découvrir les bienfaits du
            judo.
          </p>
        </div>
      ),
    },
  },
];

export const itemColors: ColorI[] = [
  {
    colorClass: "bg-black",
    en: "Black",
    fr: "Noir",
  },
  {
    colorClass: "bg-oblue-900",
    en: "Blue",
    fr: "Bleu",
  },
  {
    colorClass: "bg-cyan-400",
    en: "Cyan",
    fr: "Cyan",
  },
  {
    colorClass: "bg-green-400",
    en: "Green",
    fr: "Vert",
  },
  {
    colorClass: "bg-orange-400",
    en: "Orange",
    fr: "Orange",
  },
  {
    colorClass: "bg-red-600",
    en: "Red",
    fr: "Rouge",
  },
  {
    colorClass: "bg-purple-400",
    en: "Violet",
    fr: "Violet",
  },
  {
    colorClass: "bg-white",
    en: "White",
    fr: "Blanc",
  },
  {
    colorClass: "bg-yellow-400",
    en: "Yellow",
    fr: "Jaune",
  },
];

export const itemSizes: SizeI[] = ["S", "M", "L", "XL", "2XL", "3XL"];

export const itemPrintLocations: PrintLocationI[] = [
  {
    name: "front",
    en: "Front",
    fr: "Avant",
  },
  {
    name: "back",
    en: "Back",
    fr: "Retour",
  },
];

export const storeItems: StoreItemI[] = [
  {
    price: 25.49,
    slug: "crescent-kick",
    thumbs: ["flatlay.webp", "mens.webp", "two_model.webp", "womens.webp"],
    title: "Crescent Kick Kicking in the Crescent",
  },
  {
    price: 25.49,
    slug: "daruma-otoshi",
    thumbs: ["flatlay.webp", "mens.webp", "two_model.webp", "womens.webp"],
    title: "だるま落とし",
  },
  {
    price: 27.62,
    slug: "in-kano-we-trust",
    thumbs: ["flatlay.webp", "mens.webp", "two_model.webp", "womens.webp"],
    title: "In Kano We Trust",
  },
  {
    price: 32.49,
    slug: "jesus-has-your-back",
    thumbs: ["flatlay.webp", "mens.webp", "two_model.webp", "womens.webp"],
    title: "Jesus Has Your Back",
  },
  {
    price: 27.49,
    slug: "judo-impact",
    thumbs: ["flatlay.webp", "mens.webp", "two_model.webp", "womens.webp"],
    title: "Judo Impact",
  },
];
