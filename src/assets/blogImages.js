import blog1 from "./blog1.jpg";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.jpg";

export const getBlogImageFile = (filename) => {
  switch (filename) {
    case "blog1.jpg":
      return blog1;
    case "blog2.jpg":
      return blog2;
    case "blog3.jpg":
      return blog3;

    default:
      break;
  }
};
