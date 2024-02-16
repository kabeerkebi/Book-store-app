import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.PublishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Any thing you want to write </p>
        <p className="my-2">
          Everything has collapsed around Emma and Nathan: an accident left her
          without employment; they need to vacate their rental in 60 days; they
          put earnest money down on a house but Nathan was just laid off so
          they’re going to lose the down payment; and Emma just found out she is
          unexpectedly pregnant. Emma hasn’t been totally forthcoming about her
          past with Nathan, but now is the time to tell him the full story of an
          asset that could assist them — her murdered parents’ mansion (not a
          dilapidated farmhouse), co-owned with her two sisters. This primarily
          is Emma’s story and her return to the murder house prompts the return
          of older sister Juliette/JJ and the need to contact younger sister
          Daphne. The three were split up 15 years ago — JJ disappeared to
          college; Emma and Daphne were put in foster care. And they haven’t
          talked during all that time.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
