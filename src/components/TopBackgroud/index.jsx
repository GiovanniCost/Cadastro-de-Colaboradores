import { TopBackgrod } from "./style";
import usersimg from "../../assets/users.png";

const TopDefault = () => {
  return (
    <TopBackgrod>
      <img src={usersimg} alt="imagem-usuarios" />
    </TopBackgrod>
  );
};
export default TopDefault;
