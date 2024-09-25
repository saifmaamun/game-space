import { useGetFacilityQuery } from "../../redux/features/facility/facilityApi";
import FacilityCard from "../../components/ui/FacilityCard";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { IFacility } from "../../types/facility";
import { Skeleton } from "../../components/ui/skeleton";

const ITEMS_PER_PAGE = 10;

const Facility = () => {
  // fetching data
  const { data } = useGetFacilityQuery(undefined);

  // States to track the search term, price filter, and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(Infinity); // Infinity to show all by default

  // Filtered facilities based on the search term and price
  const filteredFacilities = data?.data
    .filter((facility: IFacility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((facility: IFacility) => facility.pricePerHour <= maxPrice);

  // paginations
  // paginations
  const [currentPage, setCurrentPage] = useState<number>(1); // Start at page 1

  // Total bookings count and total pages calculation
  const totalFacilities = filteredFacilities?.length || data?.data.length;
  const totalPages = Math.ceil(totalFacilities / ITEMS_PER_PAGE);

  // Slice data for the current page
  const paginatedFacilities = data?.data?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  console.log(paginatedFacilities);

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
    <div className=" my-12">
      <h1 className="text-5xl font-bold my-8 text-indigo-950">
        Our Facilities
      </h1>

      {/* Search and Price Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-lg font-semibold mb-2">
            Search by Name
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
          />
        </div>

        {/* Price Filter */}
        <div className="flex-1">
          <label
            htmlFor="priceFilter"
            className="block text-lg font-semibold mb-2"
          >
            Max Price Per Hour
          </label>
          <input
            type="number"
            id="priceFilter"
            placeholder="Enter max price"
            value={maxPrice === Infinity ? "" : maxPrice} // Show empty if Infinity
            onChange={(e) => {
              const price = parseFloat(e.target.value);
              setMaxPrice(price ? price : Infinity); // Set Infinity if no value is given
            }}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
          />
        </div>
      </div>
      {!data ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 border-orange-600 ">
          {/* {data?.data.map((facility) => (
          <FacilityCard facility={facility} />
        ))} */}

          {paginatedFacilities?.length > 0 ? (
            paginatedFacilities.map((facility: IFacility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))
          ) : (
            <p>No facilities found.</p>
          )}
        </div>
      )}

      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 border-orange-600 ">
       

        {currentFacilities?.length > 0 ? (
          currentFacilities.map((facility: IFacility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))
        ) : (
          <p>No facilities found.</p>
        )}
      </div> */}

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

export default Facility;
