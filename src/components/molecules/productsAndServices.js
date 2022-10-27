import Card from "./basicCard";

export default function ProductsAndServices() {
  return (
    <div className="padding_five_vert_box">
      <Card
        subTitle="Cartão consignado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Peça já o seu"
      />

      <Card
        subTitle="Crédito consignado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Simule agora"
      />

      <Card
        subTitle="Antecipação saque aniversario FGTS"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
        buttonValue="Confira aqui"
      />
    </div>
  );
}
