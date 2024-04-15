import { Helmet } from "react-helmet";
import useGetBookMark from "../Hooks/useGetBookMark";
import BookMarkCard from "../components/BookMarkCard";
import NoBookMarkData from "../components/NoBookMarkData";

const BookMark = () => {
  const { estateCardLS = [] } = useGetBookMark();
  if (estateCardLS.length<=0) {
    return <NoBookMarkData></NoBookMarkData>
  }
  return (
    <div className="container mx-auto p-4 mt-6">
       <Helmet>
        <title>Elite Haven || Book Mark</title>
      </Helmet>
      <h1 className="text-3xl font-bold lg:text-center border-b-2 border-dashed pb-4">Book Marked Property:</h1>
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
      {estateCardLS.map((items) => (
        <BookMarkCard key={items.id} items={items}></BookMarkCard>
      ))}
      </div>
    </div>
  );
};

export default BookMark;
