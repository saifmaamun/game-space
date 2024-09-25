import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  useDeleteFacilityMutation,
  useGetFacilityQuery,
} from "../../../redux/features/facility/facilityApi";
import { IFacility } from "../../../types/facility";
import { Skeleton } from "../../../components/ui/skeleton";
const AllFacility = () => {
  // hooks

  const [deleteFacility] = useDeleteFacilityMutation();

  // fetching data
  const { data } = useGetFacilityQuery(undefined);

  // delete facility
  const handleDelete = (id: string) => {
    deleteFacility(id);
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <div className="flex justify-between my-4">
        <h1 className="text-2xl font-bold">
          Total Facilities :{data?.data.length}
        </h1>
        <Button className="bg-orange-600">
          <Link to="/dashboard/addfacility">Add New Facility</Link>
        </Button>
      </div>
      {!data?.data ? (
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
          <TableHeader>
            <TableRow>
              <TableHead className="text-base text-orange-600">
                Facility Name
              </TableHead>
              <TableHead className="text-base text-orange-600">
                Location
              </TableHead>
              <TableHead className="text-base text-orange-600">
                description
              </TableHead>
              <TableHead className="text-base text-orange-600">
                Amount
              </TableHead>
              <TableHead className="text-right text-base text-orange-600">
                Edit
              </TableHead>
              <TableHead className="text-right text-base text-orange-600">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data.map((facility: IFacility) => (
              <TableRow key={facility._id}>
                <TableCell className="font-medium">{facility.name}</TableCell>

                <TableCell>{facility.location}</TableCell>
                <TableCell>{facility.description}</TableCell>
                <TableCell className="">{facility.pricePerHour}</TableCell>
                <TableCell className="text-right">
                  <Button className="bg-transparent">
                    <Link to={`/dashboard/editfacility/${facility._id}`}>
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    className="bg-transparent"
                    onClick={() => handleDelete(facility._id)}
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
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AllFacility;
