import { theme } from "../../../themes/standardTheme";

export default function Separate() {
  const hrStyle = {
    width: "100%",
    borderTop: "none",
    borderBottom: `0.2rem solid ${theme.colors.loginSeparate}`,
    margin: "1.416rem 0 2.2rem",
  };

  return <hr style={hrStyle} />;
}
