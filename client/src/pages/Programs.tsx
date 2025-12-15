import { useEffect, useState } from "react";

function Programs() {
  const [program, setProgram] = useState();

  useEffect(() => {
    async function getPrograms() {
      try {
        const response = await fetch("http://localhost:3310/api/programs");

        if (!response.ok) {
          throw new Error("Erreur lors de la requête GET");
        }
        const data = await response.json();
        setProgram(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPrograms();
  }, []);
  console.log(program);

  return (
    <div>
      <pre>{JSON.stringify(program, null, 2)}</pre>
    </div>
  );
}
export default Programs;
