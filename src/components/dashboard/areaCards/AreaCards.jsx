import AreaCard from "./AreaCard";
import "./AreaCards.css";
export default function AreaCards() {
  return (
    <section className="content-area-cards">
      <AreaCard colors={["#e4e8ef", "#475be8"]} 
        percentFillValue={80} 
        cardInfo={{
          title: "Sales",
          value: "$12,000",
          text: "lorem ipsum dolor sit amet, consectetur",
        }}/>

      <AreaCard colors={["#e4e8ef", "#4ce13f"]} 
        percentFillValue={50} 
        cardInfo={{
          title: "today revenue",
          value: "$39,000",
          text: "lorem iaculis non proident du MARKET MARK TILDE",
          color: "#475be8"
        }}/>

      <AreaCard colors={["#e4e8ef", "#f29a2e"]} 
        percentFillValue={40} 
        cardInfo={{
          title: "Escrow",
          value: "$8,000",
          text: "lorem ",

        }}/>
    </section>
  )
}
