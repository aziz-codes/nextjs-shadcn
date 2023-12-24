"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="m-6 w-full max-w-xl">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Home;
