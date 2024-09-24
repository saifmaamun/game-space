import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import {
  resetFacility,
  setFacilityDescription,
  setFacilityId,
  setFacilityLocation,
  setFacilityName,
  setFacilityPrice,
  setOldFacility,
} from "../../../redux/features/facility/facilitySlice";
import {
  useEditFacilityMutation,
  useGetSingleFacilityQuery,
} from "../../../redux/features/facility/facilityApi";
import { Button } from "../../../components/ui/button";

const EditFacility = () => {
  // hooks
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { description, location, name, pricePerHour, oldData } = useAppSelector(
    (state) => state.facility
  );

  const [editFacility, { data: editedFacilityData }] =
    useEditFacilityMutation();
  const { data } = useGetSingleFacilityQuery(id);
  dispatch(setFacilityId(id));
  if (data?.data) {
    dispatch(setOldFacility(data?.data));
  }

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFacility = {
      name: name || oldData.name,
      description: description || oldData.description,
      pricePerHour: pricePerHour || oldData.pricePerHour,
      location: location || oldData.location,
    };
    const updatedData = {
      id: id,
      data: updatedFacility,
    };

    try {
      // Await the createFacility call and handle response
      const response = await editFacility(updatedData);

      // Check if the response indicates success
      if (response?.data?.success) {
        dispatch(resetFacility());
        // Navigate to the desired route on success
        navigate("/dashboard/allfacility");
      } else if (response?.error) {
        // If there is no success property or it's false, handle as an error
        // pop a modal
        console.log(response?.error);
      }
    } catch (error) {
      // Log the error for debugging
      console.error("An error occurred while editing the facility:", error);

      // Handle the error case, such as showing a notification or redirecting
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <div className="flex-1 md:flex justify-between items-center  space-2">
        <div className="px-4">
          <h1 className="text-5xl text-orange-600 font-bold my-6">
            <span className="">Previous Data</span>
          </h1>
          <hr />
          <div>
            <h1 className="text-3xl font-bold my-6">
              <span className="">{data?.data.name}</span>
            </h1>

            <p className="text-xl font-normal  my-6">
              ${data?.data.pricePerHour}
              <span className="text-2xl font-normal  ms-4 ps-4 border-s-2">
                Per Hour
              </span>
            </p>
            <p className="flex  font-normal ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
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
            <h3 className="text-lg font-normal   my-6">
              {data?.data.description}
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center text-black rounded-lg px-12  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold ">Edit Facility</h1>
            {/* name */}
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder={oldData.name}
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setFacilityName(e.target.value))}
                />
              </div>
            </div>

            {/* location */}
            <div className="space-y-2">
              <div>
                <label htmlFor="location" className="text-lg font-semibold">
                  Location
                </label>
              </div>
              <div>
                <input
                  type="location"
                  id="location"
                  placeholder={oldData.location}
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) =>
                    dispatch(setFacilityLocation(e.target.value))
                  }
                />
              </div>
            </div>

            {/* price */}
            <div className="space-y-2">
              <div>
                <label htmlFor="price" className="text-lg font-semibold">
                  Price
                </label>
              </div>
              <div>
                <input
                  type="number"
                  id="price"
                  placeholder={oldData.pricePerHour}
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) =>
                    dispatch(setFacilityPrice(parseInt(e.target.value)))
                  }
                />
              </div>
            </div>

            {/* description */}
            <div className="space-y-2">
              <div>
                <label htmlFor="description" className="text-lg font-semibold">
                  Description
                </label>
              </div>
              <div>
                <textarea
                  id="description"
                  placeholder={oldData.description}
                  className="rounded-sm w-fit p-2 py-1 text-lg"
                  onChange={(e) =>
                    dispatch(setFacilityDescription(e.target.value))
                  }
                />
              </div>
            </div>

            <Button className="text-lg bg-indigo-950 ">
              <input type="submit" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFacility;
