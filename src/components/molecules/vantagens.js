import Card from "./iconInfocard";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SouthIcon from "@mui/icons-material/South";

export default function ProductsAndServices() {
  return (
    <div className="new">
      <Card
        icon={<SpeedIcon />}
        subTitle="Rapidez e segurança"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
      />

      <Card
        icon={<PhoneIphoneIcon />}
        subTitle="Atendimento 100% online"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
      />

      <Card
        icon={<EmojiEmotionsIcon />}
        subTitle="Relacionamento humanizado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
      />

      <Card
        icon={<SouthIcon />}
        subTitle="Menores taxas do mercado"
        text="Lorem ipsum dolor sit amet,
              adipiscing elit.  Aenean com 
              Aenean massa."
      />
    </div>
  );
}
