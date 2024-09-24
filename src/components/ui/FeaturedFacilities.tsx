import { useGetFacilityQuery } from "../../redux/features/facility/facilityApi";
import { IFacility } from "../../types/facility";
import FacilityCard from "./FacilityCard";

const FeaturedFacilities = () => {
  // fetching data
  const { data } = useGetFacilityQuery(undefined);
  return (
    // <div className="bg-indigo-950 p-8 rounded-xl text-white">
    <div className="">
      <h1 className="text-3xl font-bold py-4">
        Our Top <span className="text-orange-600">Facilities </span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 ">
        {data?.data.slice(3).map((facility: IFacility) => (
          <FacilityCard facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedFacilities;
