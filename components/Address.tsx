import AddressI from "@/types/address";
import React, { FC } from "react";

const Address: FC<{ address: AddressI }> = ({ address }) => {
  return (
    <div className="flex flex-col pb-8 last:pb-0 md:pb-0 max-w-[500px]">
      <p className="pb-1 font-header text-2xl text-blank dark:text-oaccent-700">
        {address.city}
      </p>
      <p className="font-sans pb-3 mb-auto text-black dark:text-owhite">
        {address.address}
      </p>
      <iframe
        className="rounded-xl"
        src={`https://www.google.com/maps/embed?pb=${address.mapLink}`}
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Address;
