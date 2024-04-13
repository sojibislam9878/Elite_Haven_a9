import { useEffect, useState } from "react";
import { getBookMark } from "../utils/getBookMark";

const useGetBookMark = () => {
  const [estateCardLS, setEstateCardLS] = useState();
  useEffect(() => {
    setEstateCardLS(getBookMark());
  }, []);
  return { estateCardLS };
};

export default useGetBookMark;
