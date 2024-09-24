import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useAllBookingQuery } from "../../../redux/features/booking/bookingApi";
import { format } from "date-fns";

const AllBooking = () => {
  // fetching data
  const { data } = useAllBookingQuery(undefined);
  console.log(data);

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <h1 className="text-2xl font-bold"> All Bookings</h1>
      <Table>
        <TableCaption>A list of all bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">User</TableHead>
            <TableHead className="">Facility Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time Slot</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((bookingData) => (
            <TableRow key={bookingData._id}>
              <TableCell className="font-medium">
                {bookingData.user.name.toUpperCase()}
              </TableCell>
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
              <TableCell className="">{bookingData.payableAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBooking;
