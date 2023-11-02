import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Tag from "./Tag";
import { calendars } from "@/data/calendars";

const CustomToolbar = ({ date, onNavigate, calendar, setCalendar }) => {
  return (
    <div className="flex justify-center items-center w-full my-3">
      <div className="w-full flex justify-between items-center">
        <div className=" w-full flex justify-start items-center text-3xl font-lexend font-bold">
          <FaArrowLeft
            onClick={() => onNavigate("PREV")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
          <div className="text-center text-3xl p-1">
            {new Date(
              date.setDate(date.getDate() - date.getDay())
            ).toLocaleString("default", {
              month: "short",
              day: "2-digit",
            })}{" "}
            -{" "}
            {new Date(
              date.setDate(date.getDate() - date.getDay() + 6)
            ).toLocaleString("default", { month: "short", day: "2-digit" })}
          </div>
          <FaArrowRight
            onClick={() => onNavigate("NEXT")}
            className="hover:text-acm-darkgray hover:cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-between">
          <Tag
            title="CS 009ABC"
            onClick={() => setCalendar(calendars["Python"])}
            selected={calendar.name === "Python (CS9A/B/C)"}
          />
          <Tag
            title="CS 010ABC"
            onClick={() => setCalendar(calendars["Software"])}
            selected={calendar.name === "Software (CS10A/B/C)"}
          />
          <Tag
            title="CS 011"
            onClick={() => setCalendar(calendars["Discrete"])}
            selected={calendar.name === "Discrete Math (CS011)"}
          />
          <Tag
            title="CS 061"
            onClick={() => setCalendar(calendars["Architecture"])}
            selected={calendar.name === "Computer Systems (CS61)"}
          />
          <Tag
            title="CS 100"
            onClick={() => setCalendar(calendars["Construction"])}
            selected={calendar.name === "Software Construction (CS100)"}
          />
          <Tag
            title="CS 111/141"
            onClick={() => setCalendar(calendars["Algorithms"])}
            selected={calendar.name === "Algorithms (CS111/141)"}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
