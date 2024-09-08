import { Link, useParams } from "react-router-dom";
import Button from "../reusable/Button";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function Profile() {
  const { firstname } = useParams();

  return (
    <ProfileStyled>
      <div className="profile">
        <p>
          Hey, <span>{firstname}</span>
        </p>
        <Link to="/">
          <Button variant="transparent">Se déconnecter</Button>
        </Link>
      </div>
      <BsPersonCircle size={theme.fonts.size.P4} fill={theme.colors.greyBlue} />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;

    > p {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${theme.colors.greyBlue};

      > span {
        font-weight: ${theme.fonts.weight.bold};
        color: ${theme.colors.primary};
        text-transform: capitalize;
      }
    }
  }
`;
