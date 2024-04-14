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
      <h1 className="text-3xl font-bold lg:text-center ">Book Marked Property:</h1>
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
      {estateCardLS.map((items) => (
        <BookMarkCard key={items.id} items={items}></BookMarkCard>
      ))}
      </div>
    </div>
  );
};

export default BookMark;
