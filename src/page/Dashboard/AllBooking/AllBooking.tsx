import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useAllBookingQuery } from "../../../redux/features/booking/bookingApi";
import { format } from "date-fns";
import { IBooking } from "../../../types/bookings";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import { useState } from "react";
import { Skeleton } from "../../../components/ui/skeleton";

const ITEMS_PER_PAGE = 10;

const AllBooking = () => {
  // fetching data
  const { data: bookings } = useAllBookingQuery(undefined);
  console.log(bookings);

  // paginations
  const [currentPage, setCurrentPage] = useState<number>(1); // Start at page 1

  // Total bookings count and total pages calculation
  const totalBookings = bookings?.data?.length || 0;
  const totalPages = Math.ceil(totalBookings / ITEMS_PER_PAGE);

  // Slice data for the current page
  const paginatedBookings = bookings?.data?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  console.log(paginatedBookings);

  // Function to generate page numbers (previous 2, current, next 2)
  const getPageNumbers = (): number[] => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <h1 className="text-2xl font-bold"> All Bookings</h1>
      {!bookings ? (
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
      ) : (
        <Table>
          <TableCaption>A list of all bookings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">User</TableHead>
              <TableHead className="">Facility Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              {/* <TableHead>Location</TableHead> */}
              <TableHead className="">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedBookings?.map((bookingData: IBooking) => (
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
                {/* <TableCell>{bookingData.facility.location}</TableCell> */}
                <TableCell className="">{bookingData.payableAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Pagination Component */}
      <div className="pt-16">
        <Pagination>
          <PaginationContent>
            {/* Previous Button */}
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => handlePageClick(e, currentPage - 1)}
                  className="text-white"
                >
                  Previous
                </PaginationPrevious>
              </PaginationItem>
            )}

            {/* Dynamic Page Number Links */}
            {getPageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageClick(e, page)}
                  isActive={currentPage === page}
                  className={`text-orange-600 ${
                    currentPage === page ? "font-bold" : ""
                  }`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next Button */}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => handlePageClick(e, currentPage + 1)}
                  className="text-white"
                >
                  Next
                </PaginationNext>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllBooking;
