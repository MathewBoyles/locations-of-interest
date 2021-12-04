import * as React from "react";
import { ReactNode } from "react";

import "./sideBySide.scss";

export interface ISideBySideProps {
  selectedBlock?: number;
  content1: ReactNode;
  content2?: ReactNode;
  content3?: ReactNode;
}

export const SideBySide: React.FunctionComponent<ISideBySideProps> = ({ selectedBlock, content1, content2, content3 }) => {
  return (
    <main className={[
      "sideBySide",
      selectedBlock ? "sideBySide--has-selected" : "sideBySide--none-selected",
    ].filter((c) => !!c).join(" ")} id="sideBySide">
      <div className={[
        "sideBySide__block",
        selectedBlock !== 1 && "sideBySide__block--default-hidden",
        selectedBlock && selectedBlock !== 1 && "sideBySide__block--hidden",
      ].filter((c) => !!c).join(" ")}>{content1}</div>

      <div className={[
        "sideBySide__block",
        selectedBlock && selectedBlock !== 2 && "sideBySide__block--hidden",
      ].filter((c) => !!c).join(" ")}>{content2}</div>

      <div className={[
        "sideBySide__block",
        selectedBlock !== 3 && "sideBySide__block--hidden",
      ].filter((c) => !!c).join(" ")}>{content3}</div>
    </main>
  );
}
