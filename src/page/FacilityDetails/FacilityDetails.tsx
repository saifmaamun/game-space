import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useAppDispatch } from "../../redux/hooks";
import { setFacilityId } from "../../redux/features/facility/facilitySlice";

const FacilityDetails = () => {
  //   hoosk
  const dispatch = useAppDispatch();
  const { id } = useParams();
  //   setting the id for the facility
  dispatch(setFacilityId(id));
  // get single Facility query
  const { data } = useGetSingleFacilityQuery(id);

  return (
    <div className="flex-1 md:flex justify-around items-center text-black space-y-6 gap-6 my-16 border rounded-3xl px-6 py-16 shadow-md">
      <div>
        <div>
          <h1 className="text-5xl font-bold my-6">
            <span className="text-orange-600">{data?.data.name}</span>
          </h1>

          <p className="text-2xl font-normal text-gray-600 my-6">
            ${data?.data.pricePerHour}
            <span className="text-2xl font-normal text-gray-600 ms-4 ps-4 border-s-2">
              Per Hour
            </span>
          </p>
          <p className="flex  font-normal text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {data?.data.location}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-normal text-gray-600  my-6">
            {data?.data.description}
          </h3>
        </div>
        <div>
          <Link to="/booking">
            <Button className="py-8 w-full text-xl rounded-xl border bg-indigo-950  font-bold hover:bg-orange-600  hover:text-indigo-950">
              Book
            </Button>
          </Link>
        </div>
      </div>
      <div className=" rounded-3xl shadow-2xl">
        <img
          className=" rounded-3xl shadow-2xl"
          src={data?.data.imgUrl}
          alt={`image of ${data?.data.name}`}
        />
      </div>
    </div>
  );
};

export default FacilityDetails;
