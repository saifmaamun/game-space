import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useCreateFacilityMutation } from "../../../redux/features/facility/facilityApi";
import {
  resetFacility,
  setFacilityDescription,
  setFacilityImageUrl,
  setFacilityLocation,
  setFacilityName,
  setFacilityPrice,
} from "../../../redux/features/facility/facilitySlice";

const AddFacility = () => {
  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { description, imgUrl, location, name, pricePerHour } = useAppSelector(
    (state) => state.facility
  );
  const [createFacility, { data, isLoading, isError }] =
    useCreateFacilityMutation();
  console.log(data, isLoading, isError);

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newFacility = {
      name,
      description,
      imgUrl,
      pricePerHour,
      location,
    };
    try {
      // Await the createFacility call and handle response
      const response = await createFacility(newFacility);

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
      console.error("An error occurred while creating the facility:", error);

      // Handle the error case, such as showing a notification or redirecting
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <div className="flex-1 md:flex justify-between items-center ">
        <div></div>
        <div className="flex justify-center items-center text-black rounded-lg px-12  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold ">Add New Facility</h1>
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
                  value={name}
                  required
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
                  value={location}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) =>
                    dispatch(setFacilityLocation(e.target.value))
                  }
                />
              </div>
            </div>

            {/* image url */}
            <div className="space-y-2">
              <div>
                <label htmlFor="image" className="text-lg font-semibold">
                  Image URL
                </label>
              </div>
              <div>
                <input
                  type="url"
                  id="image"
                  value={imgUrl}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) =>
                    dispatch(setFacilityImageUrl(e.target.value))
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
                  value={pricePerHour}
                  required
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
                  value={description}
                  required
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

export default AddFacility;
