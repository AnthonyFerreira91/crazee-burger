import { theme } from "../../../themes/standardTheme";

export default function Separate() {
  const hrStyle = {
    width: "70%",
    borderTop: "none",
    borderBottom: `1px solid ${theme.colors?.primary}`,
  };

  return <hr style={hrStyle} />;
}
