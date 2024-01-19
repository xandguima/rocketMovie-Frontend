import { ContainerMovie } from "./style";

import { Tag } from "../../components/Tag";
import { Star } from "../../components/Star";
export function MovieNote({data,...rest}){
  return(
    <ContainerMovie {...rest}>
      <header>
        <h1>{data.title}</h1>
        <div>
          <Star isFilled/>
          <Star isFilled/>
          <Star isFilled/>
          <Star isFilled/>
          <Star/>
        </div>
      </header>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag=>
              <Tag key={tag.id} title={tag.name}/>
            ) 
          }
        </footer>
      }
    </ContainerMovie>
  )
}