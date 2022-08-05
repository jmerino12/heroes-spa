import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroePage = () => {
  const {heroId, ...rest} = useParams();
  const hero = getHeroById(heroId);
  if(!hero){
    return <Navigate to={'/marvel'} />
  }
  return (
    <h1>{hero.superhero}</h1>
  )
}
