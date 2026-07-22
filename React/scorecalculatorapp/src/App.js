import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>

      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={480}
        goal={5}
      />

    </div>
  );
}

export default App;
