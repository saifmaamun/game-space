import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { useAppSelector } from "../../redux/hooks";

const BookedDetails = () => {
  const { date, endTime, facility, startTime } = useAppSelector(
    (state) => state.booking
  );
  const { data: facilityData } = useGetSingleFacilityQuery(facility);

  return (
    <div className="text-center mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl font-bold my-6">
          <span className="text-orange-600">{facilityData?.data.name}</span>
        </h1>
        <span className=" ms-4 font-semibold">Booked</span>
      </div>

      <p className="text-2xl font-normal my-6">Date: {date}</p>
      <p className="text-2xl font-normal my-6">Start Time: {startTime}</p>
      <p className="text-2xl font-normal my-6">Start Time: {endTime}</p>
    </div>
  );
};

export default BookedDetails;
