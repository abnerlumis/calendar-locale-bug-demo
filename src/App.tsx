import { useState } from "react";
import { Calendar } from "./components/ui/calendar";
import { enUS, es } from "react-day-picker/locale";
import { Button } from "./components/ui/button";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [locale, setLocale] = useState(enUS);
  return (
    <div className="m-auto w-fit space-y-6 mt-10">
      <div className="flex justify-center items-center gap-2">
        <Button onClick={() => setLocale(enUS)}>English</Button>
        <Button onClick={() => setLocale(es)}>Español</Button>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
        locale={locale}
      />
    </div>
  );
}

export default App;
