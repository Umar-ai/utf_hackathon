import { useState, useEffect } from "react";
import axios from "axios";
import { desire_mock } from "../mocks/desire.mock.js";

function DisplayDesire() {
  const [desire, setDesire] = useState(desire_mock.data);

  useEffect(() => {
    async function showDesire() {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/desire/create_desire",
          { name: "umar", desire: "life is good" }
        );
        console.log("API response:", res.data);
        setDesire(res.data.data);
      } catch (err) {
        console.error("API failed, showing mock instead:", err);
      }
    }
    showDesire();
  }, []);

  return (
    <article className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
        {desire.name}'s desire
      </p>
      <p className="text-xl font-medium leading-relaxed text-slate-800">
        {desire.desire}
      </p>
    </article>
  );
}

export default DisplayDesire;