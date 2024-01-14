import { useState } from "react";

import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />

      <DateInput
        label="Final"
        value={final}
        onChange={(e) => setFinal(e.target.value)}
      />
    </form>
  );
};

export default DateRange;
