import { useGetFacilityQuery } from "../../redux/features/facility/facilityApi";
import FacilityCard from "./FacilityCard";

const FeaturedFacilities = () => {
  // fetching data
  const { data } = useGetFacilityQuery(undefined);
  return (
    <div>
      <h1 className="text-3xl font-bold py-4">
        Our Top <span className="text-orange-600">Facilities </span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 border-orange-600 ">
        {data?.data.slice(3).map((facility) => (
          <FacilityCard facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedFacilities;
