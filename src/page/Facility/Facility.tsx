import { useGetFacilityQuery } from "../../redux/features/facility/facilityApi";
import FacilityCard from "../../components/ui/FacilityCard";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

const ITEMS_PER_PAGE = 10;

const Facility = () => {
  // fetching data
  const { data } = useGetFacilityQuery(undefined);

  // States to track the search term, price filter, and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(Infinity); // Infinity to show all by default
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered facilities based on the search term and price
  const filteredFacilities = data?.data
    .filter((facility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((facility) => facility.pricePerHour <= maxPrice);

  // Calculate total facilities and pages

  const totalFacilities = filteredFacilities?.length;
  const totalPages = Math.ceil(totalFacilities / ITEMS_PER_PAGE);

  // Get the facilities for the current page
  const currentFacilities = filteredFacilities?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2  py-4 border-orange-600 ">
        {/* {data?.data.map((facility) => (
          <FacilityCard facility={facility} />
        ))} */}

        {currentFacilities?.length > 0 ? (
          currentFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))
        ) : (
          <p>No facilities found.</p>
        )}
      </div>

      {/* Pagination Component */}
      <div className="pt-16">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* Page Number Links */}
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                  size={undefined}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Facility;
