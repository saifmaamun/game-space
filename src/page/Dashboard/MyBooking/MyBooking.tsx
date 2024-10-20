import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  useCancelBookingMutation,
  useUsersBookingQuery,
} from "../../../redux/features/booking/bookingApi";
import { format } from "date-fns";

const MyBooking = () => {
  // get users booking
  const { data: bookings, isLoading } = useUsersBookingQuery(undefined);
  const [cancelBooking, { data: cancleBookingData }] =
    useCancelBookingMutation();
  console.log(cancleBookingData);
  console.log(bookings);

  const handelDelete = (id: string) => {
    cancelBooking(id);
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <h1 className="text-2xl font-bold">My Booking {bookings?.data.length}</h1>
      {isLoading ? (
        <div className="space-y-2 mt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-9/12" />
          <Skeleton className="h-4 w-8/12" />
          <Skeleton className="h-4 w-7/12" />
          <Skeleton className="h-4 w-6/12" />
          <Skeleton className="h-4 w-5/12" />
          <Skeleton className="h-4 w-4/12" />
          <Skeleton className="h-4 w-3/12" />
          <Skeleton className="h-4 w-2/12" />
          <Skeleton className="h-4 w-1/12" />
        </div>
      ) : !bookings?.data ? (
        <Table>
          <TableCaption>No Booking Yet.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Facility Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="text-right">Cancelation</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Facility Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="text-right">Cancelation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings?.data.map(
              (bookingData: {
                _id: string;
                facility: {
                  name: string;

                  location: string;
                };
                date: Date;
                startTime: string;

                endTime: string;

                payableAmount: number;
              }) => (
                <TableRow key={bookingData._id}>
                  <TableCell className="font-medium">
                    {bookingData.facility.name}
                  </TableCell>
                  <TableCell>
                    {format(new Date(bookingData.date), "dd MMMM yyyy")}
                  </TableCell>
                  <TableCell>
                    {bookingData.startTime}-{bookingData.endTime}
                  </TableCell>
                  <TableCell>{bookingData.facility.location}</TableCell>
                  <TableCell className="">
                    {bookingData.payableAmount}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      className="bg-transparent"
                      onClick={() => handelDelete(bookingData._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 text-orange-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default MyBooking;
