import "./Pet.css";
import { useParams } from "react-router-dom"


const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (

    <article key={pet.id}>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>


  );

};

export default Pet;
