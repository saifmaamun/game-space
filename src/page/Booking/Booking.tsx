import { Button } from "../../components/ui/button";
import { useGetSingleFacilityQuery } from "../../redux/features/facility/facilityApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetAvailabilityState,
  setDateForAvaiblablityChecking,
  setFacilityForAvaiblablityChecking,
} from "../../redux/features/availablity/availabilitySlice";
import { useAvailityCheckQuery } from "../../redux/features/availablity/availabilityApi";
import {
  resetBookingState,
  setBookingDate,
  setBookingEndTime,
  setBookingFacility,
  setBookingStartTime,
} from "../../redux/features/booking/bookingSlice";
import ConfarmationModal from "../../components/ui/ConfarmationModal";
import { useEffect } from "react";

const Booking = () => {
  // hooks
  const dispatch = useAppDispatch();

  // getting the facility id
  const { id } = useAppSelector((state) => state.facility);
  const { facility: bookingID } = useAppSelector((state) => state.booking);
  const { facility: availableID } = useAppSelector(
    (state) => state.availability
  );

  dispatch(setFacilityForAvaiblablityChecking(id));

  useEffect(() => {
    if (availableID && bookingID !== availableID) {
      dispatch(resetAvailabilityState());
      dispatch(resetBookingState());
    }
  }, [availableID, bookingID, dispatch]);

  // if (availableID && bookingID != availableID) {
  //   dispatch(resetAvailabilityState());
  //   dispatch(resetBookingState());
  // }

  // getting the states
  const { facility, date } = useAppSelector((state) => state.availability);
  const availablityData = { date, facility };
  const { endTime } = useAppSelector((state) => state.booking);

  // all query & mutations
  const { data: facilityData } = useGetSingleFacilityQuery(id);

  const { data: availableSlots } = useAvailityCheckQuery(
    {
      date,
      facility,
    },
    { skip: !date }
  );
  //   const [placeBooking, { data, isLoading, isError }] =
  //     usePlaceBookingMutation();

  //   set start and end time
  const bookingTimeSet = (text: string) => {
    dispatch(setBookingFacility(id));
    dispatch(setBookingStartTime(text.slice(0, 5)));
    dispatch(setBookingEndTime(text.slice(-5)));
    dispatch(setBookingDate(availablityData.date));
  };

  //   booking
  //   const booking = () => {
  //     placeBooking(bookingData);
  //   };

  return (
    <div className="text-center">
      <h1 className="text-orange-600 text-6xl font-bold">BOOKING PAGE</h1>

      <div className="text-start my-20 px-10 py-20 bg-indigo-950 rounded-lg">
        <div className="w-full flex-1 md:flex  justify-around items-center">
          <div className="text-white w-1/2 mb-4">
            <div>
              <h1 className="text-5xl font-bold my-6">
                <span className="text-orange-600">
                  {facilityData?.data.name}
                </span>
              </h1>

              <p className="text-2xl font-norma my-6">
                ${facilityData?.data.pricePerHour}
                <span className="text-2xl font-normal  ms-4 ps-4 border-s-2">
                  Per Hour
                </span>
              </p>
              <p className="flex  font-normal">
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
                {facilityData?.data.location}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal my-6">
                {facilityData?.data.description}
              </h3>
            </div>
          </div>
          {/* form */}
          <div className="justify-center items-center text-black rounded-lg px-12  py-10 bg-orange-600">
            <div className="mb-8">
              <h1 className="text-4xl font-bold">
                Check Available <br /> Schadule
              </h1>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="date" className="text-lg font-semibold">
                  Pick Date
                </label>
              </div>
              <div>
                <input
                  type="date"
                  required
                  className="rounded-md p-2 mb-2 py-1 text-lg"
                  value={date}
                  onChange={(e) =>
                    dispatch(setDateForAvaiblablityChecking(e.target.value))
                  }
                />
              </div>
            </div>

            <div className="py-8  ">
              <h1 className="text-4xl mb-4 font-bold">Available Slots</h1>

              {date && availableSlots ? (
                <div className="grid grid-cols-1 text-center gap-4 text-black sm:grid-cols-2">
                  {availableSlots?.data.map(
                    (slot: { startTime: string; endTime: string }) => (
                      <Button
                        className="bg-white text-black font-semibold text-md hover:text-white px-4 py-2  rounded-md"
                        onClick={(e) =>
                          bookingTimeSet(
                            (e.target as HTMLButtonElement).innerHTML
                          )
                        }
                      >
                        {slot.startTime} - {slot.endTime}
                      </Button>
                    )
                  )}
                </div>
              ) : (
                <h1>Select a Date First</h1>
              )}
            </div>

            {endTime && (
              <div className="text-center ">
                <ConfarmationModal />
                {/* <Button
                onClick={booking}
                className="text-lg  w-full bg-indigo-950"
              >
                Book
              </Button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
