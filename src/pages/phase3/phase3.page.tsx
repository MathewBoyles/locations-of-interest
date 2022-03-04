import * as React from "react";

import { Page } from "../../component/page/page.component";
import { SearchShoutout } from "../../component/searchShoutout/searchShoutout.component";
import { Footer } from "../../component/footer/footer.component";
import { SideBySide } from "../../component/sideBySide/sideBySide.component";
import { Phase3 } from "../../component/phase3/phase3.component";

export const Phase3Page: React.FunctionComponent = () => {
  return (
    <Page>
      <SearchShoutout hideCopy />

      <SideBySide
        selectedBlock={1}
        content1={<Phase3 />}
      />

      <Footer />
    </Page>
  );
}
