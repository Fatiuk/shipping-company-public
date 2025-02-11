"use client";
import React, { FC } from "react";
import { useGlobalContext } from "@/context/context";
import { DaysOfWeekI } from "@/types/days-of-week";
import { groups as data } from "@/app/data";
import { City } from "@/types/city";
import { Lang } from "@/types/lang";

const Schedule: FC<{ slug: string }> = ({ slug }: { slug: string }) => {
  const { lang, city: citySelected, setCity } = useGlobalContext();

  const cityOptions = data.map((group) => ({
    value: group.city.label,
    label: group.city.label,
  }));

  const daysOfWeek: DaysOfWeekI = {
    Monday: {
      en: "Monday",
      fr: "Lundi",
    },
    Tuesday: {
      en: "Tuesday",
      fr: "Mardi",
    },
    Wednesday: {
      en: "Wednesday",
      fr: "Mercredi",
    },
    Thursday: {
      en: "Thursday",
      fr: "Jeudi",
    },
    Friday: {
      en: "Friday",
      fr: "Vendredi",
    },
    Saturday: {
      en: "Saturday",
      fr: "Samedi",
    },
    Sunday: {
      en: "Sunday",
      fr: "Dimanche",
    },
  };

  return (
    <section className="py-6 font-sans">
      <div className="flex flex-row flex-wrap py-4 gap-x-2">
        {cityOptions.map((city) => (
          <p
            className={`rounded-xl px-3 py-1 hover:bg-oblue-100 dark:hover:bg-oaccent-600 text-black dark:text-white dark:hover:text-black hover:cursor-pointer ${
              city.label === citySelected
                ? "bg-oblue-600 hover:bg-oblue-600 text-white dark:bg-oaccent-900 dark:hover:bg-oaccent-900 text-white dark:text-black"
                : ""
            }`}
            key={city.value}
            onClick={() => setCity(city.label as City)}
          >
            {city.label}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(daysOfWeek).map(([day, dayLang]) => {
          const groups = data
            .find((entry) => entry.city.label === citySelected)
            ?.groups.filter((group) => {
              if (!slug) {
                return group.schedule.some(
                  (scheduleEntry) =>
                    scheduleEntry.day[lang as Lang] === dayLang[lang as Lang]
                );
              }
              return (
                group.schedule.some(
                  (scheduleEntry) =>
                    scheduleEntry.day[lang as Lang] === dayLang[lang as Lang]
                ) && group.id.includes(slug)
              );
            });
          return (
            <div key={day} className="flex flex-col items-stretch p-4 w-full">
              <h3 className="font-header text-xl border border-1 border-transparent border-b-oblue-900 mb-4 dark:text-oaccent-700">
                {dayLang[lang as Lang]}
              </h3>
              {groups?.map((group) => (
                <div key={group.id} className="pb-4 last:pb-0">
                  <h4 className="font-bold text-oaccent-700 pb-2">
                    {group.name[lang as Lang]}
                  </h4>
                  {group.schedule
                    .filter(
                      (scheduleEntry) =>
                        scheduleEntry.day[lang as Lang] ===
                        dayLang[lang as Lang]
                    )
                    .map((scheduleEntry, index) => (
                      <p key={index}>
                        {scheduleEntry.timeStart}–{scheduleEntry.timeEnd}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule;
