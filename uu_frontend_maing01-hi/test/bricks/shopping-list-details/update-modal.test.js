import UuFrontend from "uu_frontend_maing01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuFrontend.Bricks.ShoppingListDetails.UpdateModal`, () => {
  testProperties(UuFrontend.Bricks.ShoppingListDetails.UpdateModal, CONFIG);
});
