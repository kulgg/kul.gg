import { HiOutlineCalendar } from "@react-icons/all-files/hi/HiOutlineCalendar";
import { HiOutlineOfficeBuilding } from "@react-icons/all-files/hi/HiOutlineOfficeBuilding";

export default function Education() {
  return (
    <div className="flex flex-col gap-6 mt-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
        <div className="col-span-1 text-md text-gray-100">
          M.Sc. Computer Science
        </div>
        <div>
          <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
            <HiOutlineOfficeBuilding className="w-4 h-4" />
            Blah Blah University
          </div>
          <div className="col-span-1 text-sm flex gap-2 items-center text-gray-300">
            <HiOutlineCalendar className="w-4 h-4" />
            May 2020 - February 2021
          </div>
        </div>
      </div>
    </div>
  );
}
