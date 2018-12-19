import styled from "@emotion/styled";
import { TopAppBar } from "rmwc/TopAppBar";

import { AppState } from "../../interfaces/common";

const colorHeader = "rgba(0, 121, 193, 1)";
const colorHeaderTransparent = "rgba(0, 121, 193, 0.7)";

// need to type as any, current limitation with @emotion/styled
const TopAppBarContainer: any = styled(TopAppBar)`
  position: fixed;
  background: ${(props: AppState) =>
    props.mode === "list" ? colorHeader : colorHeaderTransparent};
`;

export default TopAppBarContainer;