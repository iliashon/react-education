export default function PetInfo({ animal, age, hasPet }) {
  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h2>Don't have animal</h2>
  );
}
