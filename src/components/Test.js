import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NEW_MENU_API, RESTAURANT_TYPE_KEY } from "../utils/constants";

const Test = () => {
  const { id } = useParams();

  async function getData() {
    const data = await fetch(NEW_MENU_API+30903);
    //console.log(data);
    const json = await data.json();
    
    console.log(json.data.cards.map((x) => x.card)?.find((x) => x.card["@type"] === RESTAURANT_TYPE_KEY)?.card?.info);

    console.log(json.data.cards.find((x) => x.groupedCard))
    //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  }
  useEffect(() => {
    getData();
  }, []);
  return <h1>This is to test new API</h1>;
};

export default Test;
