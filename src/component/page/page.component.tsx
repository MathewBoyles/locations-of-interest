import * as React from "react";

import { About } from "../about/about.component";
import { IModalFunctions, Modal } from "../modal/modal.component";
import { Navbar } from "../navbar/navbar.component";

export const Page: React.FunctionComponent = ({ children }) => {
  const [aboutRef, setAboutRef] = React.useState<IModalFunctions | null>(null);

  return (
    <>
      <Modal
        ref={setAboutRef}
        title="About">
        <About />
      </Modal>

      <Navbar onAboutClick={() => {
        if (aboutRef) aboutRef.show();
      }} />

      {children}
    </>
  );
}
