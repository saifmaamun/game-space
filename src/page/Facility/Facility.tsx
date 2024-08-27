import { useGetFacilityQuery } from "../../redux/features/facility/facilityApi";
import FacilityCard from "../../components/ui/FacilityCard";

const Facility = () => {
  // fetching data
  const { data } = useGetFacilityQuery(undefined);

  return (
    <div className=" my-12">
      <h1 className="text-5xl font-bold my-8 text-indigo-950">
        Our Facilities
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 border-orange-600 ">
        {data?.data.map((facility) => (
          <FacilityCard facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default Facility;
