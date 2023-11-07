import Person from "../components/Person";
import { persons } from "../data/persons";

export default function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
}
