import Instructor from "@/components/Instructor";
import InstructorI from "@/types/instructor";
import React, { FC } from "react";

interface InstructorsPropI {
  instructors: InstructorI[];
}

const Instructors: FC<InstructorsPropI> = ({ instructors }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {instructors.map((instructor) => (
          <Instructor key={instructor.name} instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default Instructors;
