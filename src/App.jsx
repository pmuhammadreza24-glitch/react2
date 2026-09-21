import Card from "./components/Card";
import student from "./assets/student.png";
import student2 from "./assets/student2.png";
import "./App.css";

function App() {
  return (
    <div className="cards">

      <Card
        picture={student}
        name="Ali"
        studentClass="10"
        grade="A"
      />

      <Card
        picture={student2}
        name="Ahmed"
        studentClass="9"
        grade="B"
      />

    </div>
  );
}

export default App;