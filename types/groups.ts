import { DaysOfWeekEn } from "@/types/days-of-week";
import { DaysOfWeekFr } from "@/types/days-of-week";

export interface ScheduleI {
  day: {
    en: DaysOfWeekEn;
    fr: DaysOfWeekFr;
  };
  timeStart: string;
  timeEnd: string;
}

export interface GroupI {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  age: {
    min: number;
    max: number | null;
  } | null;
  cost: number;
  schedule: ScheduleI[];
}

export default interface GroupsI {
  city: {
    value: string;
    label: string;
  };
  location: {
    address: string;
    postalCode: string;
    mapLink: string;
  };
  groups: GroupI[];
}
