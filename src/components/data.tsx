import {
  EmojiHappyIcon,
  FastForwardIcon,
  CursorClickIcon,
  PhoneIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../../public/img/banner.png";

const benefit = {
  image: benefitOneImg,
  bullets: [
    {
      title: "Rapidez e segurança",
      desc: "Lorem ipsum dolor sit amet, adipiscing elit. Aenean com Aenean massa.",
      icon: <FastForwardIcon />,
    },
    {
      title: "Atendimento 100% online",
      desc: "Here you can add the next benefit point.",
      icon: <PhoneIcon />,
    },
    {
      title: "Relacionamento humanizado",
      desc: "This will be your last bullet point in this section.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Menores taxas do mercado",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

export { benefit };
