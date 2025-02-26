import InstructorI from "@/types/instructor";
import QuotationI from "@/types/quotation";
import React from "react";
import LocationI from "@/types/location";
import VideoData from "@/types/videoReview";

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

export const blogItems = [
  {
    id: 1,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["autoTransportGuide"],
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 2,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["autoTransportGuide", "tag3"],
    image: "/blog/blogItem_1.webp",
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 3,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["tag3"],
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 4,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["tag3", "tag2"],
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 5,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["tag3"],
    image: "/blog/blogItem_1.webp",
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 6,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["autoTransportGuide", "tag2"],
    image: "/blog/blogItem_1.webp",
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
  {
    id: 7,
    date: "2025-01-25",
    slug: "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    tags: ["autoTransportGuide", "tag3"],
    title:
      "Auto Transport Guide: Everything You Need to Know About Car Shipping Services",
    text: (
      <article>
        <p>
          When it comes to transporting your vehicle across the United States,
          choosing the right <strong>car shipping company</strong> can make all
          the difference. Whether you&apos;re relocating for work, buying a car
          from out of state, or need seasonal vehicle transport, understanding
          the ins and outs of <strong>auto transport services</strong> is
          crucial for a smooth experience.
        </p>

        <h3>Why Choose Professional Auto Transport Services?</h3>

        <p>
          Professional <strong>vehicle shipping services</strong> offer numerous
          advantages over driving your car yourself:
        </p>

        <ul>
          <li>Save time and reduce vehicle wear and tear</li>
          <li>Avoid long-distance driving stress</li>
          <li>Protected transport for luxury and classic cars</li>
          <li>Cost-effective solution for multiple vehicle transport</li>
          <li>Guaranteed insurance coverage during transit</li>
        </ul>

        <h3>Types of Car Transport Services We Offer</h3>

        <h5>Open Transport</h5>
        <p>
          Our standard <strong>open carrier auto transport</strong> is the most
          economical option for shipping your vehicle. This method is perfect
          for regular cars, SUVs, and trucks, offering reliable service at
          competitive rates.
        </p>

        <h5>Enclosed Auto Transport</h5>
        <p>
          For luxury, classic, or high-value vehicles, our{" "}
          <strong>enclosed car shipping</strong> service provides maximum
          protection from weather and road debris during transit.
        </p>

        <h5>Door-to-Door Service</h5>
        <p>
          Experience the convenience of{" "}
          <strong>door-to-door car shipping</strong>, where we pick up and
          deliver your vehicle as close to your specified locations as possible,
          subject to local restrictions.
        </p>

        <h3>How to Prepare Your Vehicle for Shipping</h3>

        <p>
          Ensure a smooth <strong>car transport</strong> experience by following
          these essential steps:
        </p>

        <ol>
          <li>Clean your vehicle thoroughly for accurate inspection</li>
          <li>Document existing damage with photos</li>
          <li>Remove personal items and accessories</li>
          <li>Maintain about a quarter tank of fuel</li>
          <li>Check tire pressure and battery charge</li>
        </ol>

        <h3>Understanding Auto Transport Costs</h3>

        <p>
          Several factors influence <strong>car shipping costs</strong>:
        </p>

        <ul>
          <li>Transport distance and route</li>
          <li>Vehicle size and weight</li>
          <li>Transport type (open vs. enclosed)</li>
          <li>Seasonal demand fluctuations</li>
          <li>Pickup and delivery locations</li>
        </ul>

        <h3>Why Choose Our Auto Transport Company?</h3>

        <p>
          As a leading <strong>vehicle transport company</strong> in the United
          States, we pride ourselves on:
        </p>

        <ul>
          <li>Nationwide coverage with extensive carrier network</li>
          <li>Fully licensed and insured services</li>
          <li>Real-time shipment tracking</li>
          <li>Competitive rates and transparent pricing</li>
          <li>Dedicated customer support throughout the shipping process</li>
        </ul>

        <h3>Popular Auto Transport Routes</h3>

        <p>
          We specialize in major <strong>car shipping routes</strong> across the
          United States, including:
        </p>

        <ul>
          <li>California to Texas auto transport</li>
          <li>Florida to New York car shipping</li>
          <li>Cross-country vehicle transport</li>
          <li>Seasonal routes for snowbirds</li>
        </ul>

        <h3>Get Your Free Car Shipping Quote Today</h3>

        <p>
          Ready to transport your vehicle? Contact our{" "}
          <strong>auto shipping experts</strong> for a free, no-obligation
          quote. Our team is ready to answer your questions and help you choose
          the best shipping solution for your needs.
        </p>

        <p>
          Trust our experienced team to handle your{" "}
          <strong>vehicle transportation</strong> needs with the care and
          professionalism you deserve. With thousands of satisfied customers and
          years of experience in the <strong>auto transport industry</strong>,
          we&apos;re your reliable partner for all your car shipping needs.
        </p>
      </article>
    ),
  },
];

export const videoData: VideoData[] = [
  {
    id: 1,
    videoId: "Q5N920yviZY",
    title: "Great car shipping experience!",
    author: "John D.",
    rating: 5,
    date: "2024-02-15",
  },
  {
    id: 2,
    videoId: "CR6M_sqTVqE",
    title: "Fast and reliable service",
    author: "Sarah M.",
    rating: 5,
    date: "2024-08-07",
  },
  {
    id: 3,
    videoId: "-_3dc6X-Iwo",
    title: "Excellent communication",
    author: "Mike R.",
    rating: 4,
    date: "2024-05-23",
  },
  {
    id: 4,
    videoId: "lYfrKmEYpdA",
    title: "Great car shipping experience!",
    author: "Yael N.",
    rating: 5,
    date: "2024-07-11",
  },
  {
    id: 5,
    videoId: "gCYcHz2k5x0",
    title: "Fast and reliable service",
    author: "David K.",
    rating: 5,
    date: "2024-06-09",
  },
  {
    id: 6,
    videoId: "NpDAFKqeUDw",
    title: "Excellent communication and great car shipping experience!",
    author: "Shahar A.",
    rating: 4,
    date: "2024-11-18",
  },
  {
    id: 7,
    videoId: "Vj0GqUeUstM",
    title: "Great car shipping experience!",
    author: "Ronen A.",
    rating: 5,
    date: "2024-12-20",
  },
  {
    id: 8,
    videoId: "eVTXPUF4Oz4",
    title: "Fast and reliable service",
    author: "Mark M.",
    rating: 4,
    date: "2024-10-12",
  },
  {
    id: 9,
    videoId: "Z-ejodfvbN8",
    title: "Excellent communication and reliable service",
    author: "Stephen S.",
    rating: 4,
    date: "2024-05-01",
  },
  {
    id: 10,
    videoId: "E33TL4zae78",
    title: "Great car shipping experience!",
    author: "Chris O.",
    rating: 5,
    date: "2024-04-13",
  },
  {
    id: 11,
    videoId: "qfc55oC_J38",
    title: "Fast and reliable service",
    author: "Alice C.",
    rating: 5,
    date: "2024-04-29",
  },
  {
    id: 12,
    videoId: "59Q_lhgGANc",
    title: "Excellent communication and reliable service",
    author: "Netta K.",
    rating: 4,
    date: "2024-11-11",
  },
];
