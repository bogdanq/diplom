import { Box } from "@mui/material";
import styled from "styled-components";
import furniture from "../assets/sub-menu/furniture.svg";
import furniture2 from "../assets/sub-menu/furniture2.svg";
import furniture3 from "../assets/sub-menu/furniture3.svg";
import furniture4 from "../assets/sub-menu/furniture4.svg";
import print from "../assets/sub-menu/print.svg";
import blocks from "../assets/sub-menu/blocks.svg";
import { Link } from "./header";

export const subMenu = [
  {
    title: "Столы и стулья",
    link: "/catalog/tables",
    img: furniture4,
    desc: `Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
    illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
    explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
    odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
    voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum`,
  },
  {
    title: "Прочая мебель",
    link: "/catalog/other",
    img: furniture,
    desc: `
    Sit amet justo donec enim diam vulputate ut. Sit amet tellus cras adipiscing. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Convallis tellus id interdum velit laoreet id. Ipsum a arcu cursus vitae congue mauris rhoncus aenean
    `,
  },
  {
    title: "Кухни",
    link: "/catalog/kitchen",
    img: furniture3,
    desc: "Morbi tristique senectus et netus et malesuada fames ac. Enim blandit volutpat maecenas volutpat blandit. Id ornare arcu odio ut. In vitae turpis massa sed elementum. Maecenas sed enim ut sem viverra aliquet eget sit. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Leo integer malesuada nunc vel risus commodo viverra maecenas.",
  },
  {
    title: "Уф-печат",
    link: "/catalog/print",
    img: print,
    desc: "Ac felis donec et odio pellentesque diam. Adipiscing commodo elit at imperdiet. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Faucibus in ornare quam viverra orci. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Natoque penatibus et magnis dis parturient. Dignissim cras tincidunt lobortis feugiat vivamus at.",
  },
  {
    title: "Материалы",
    link: "/catalog/material",
    img: blocks,
    desc: ". Neque convallis a cras semper auctor neque vitae tempus quam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Vulputate eu scelerisque felis imperdiet proin. Lectus magna fringilla urna porttitor rhoncus dolor. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Etiam non quam lacus suspendisse faucibus interdum posuere lorem.",
  },
  {
    title: "Столы",
    link: "/catalog/table",
    img: furniture4,
    desc: "Accumsan lacus vel facilisis volutpat est velit egestas dui. Enim eu turpis egestas pretium aenean. Lectus vestibulum mattis ullamcorper velit. Id neque aliquam vestibulum morbi blandit. Purus viverra accumsan in nisl nisi scelerisque eu. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. In fermentum posuere urna nec. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque",
  },
  {
    title: "Купэ",
    link: "/catalog/closet",
    img: furniture2,
    desc: "Accumsan lacus vel facilisis volutpat. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. In nulla posuere sollicitudin aliquam ultrices. Parturient montes nascetur ridiculus mus mauris. Tortor posuere ac ut consequat semper viverra. Volutpat est velit egestas dui id ornare arcu odio ut. Nisi quis eleifend quam adipiscing. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in.",
  },
];

const SubMenuItem = styled(Box)`
  display: flex;
  padding-top: 20px;
  align-items: center;

  & img {
    margin-right: 10px;
  }
`;

export const CatalogMenu = () => {
  return (
    <div>
      {subMenu.map((i, idx) => (
        <SubMenuItem key={idx}>
          <img width="20px" src={i.img} alt="furniture" />
          <Link to={i.link}>{i.title}</Link>
        </SubMenuItem>
      ))}
    </div>
  );
};
