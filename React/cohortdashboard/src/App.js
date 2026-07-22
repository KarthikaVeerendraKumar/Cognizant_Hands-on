import CohortDetails from "./Components/CohortDetails";

function App() {

  return (

    <div>

      <h1>My Academy Dashboard</h1>

      <CohortDetails
        title="React"
        startedOn="15-Jul-2026"
        status="Ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        title="Java"
        startedOn="10-Jun-2026"
        status="Completed"
        coach="Robert"
        trainer="James"
      />

      <CohortDetails
        title="Angular"
        startedOn="20-Jul-2026"
        status="Ongoing"
        coach="William"
        trainer="Thomas"
      />

      <CohortDetails
        title="Spring Boot"
        startedOn="05-May-2026"
        status="Completed"
        coach="Richard"
        trainer="Joseph"
      />

    </div>

  );

}

export default App;