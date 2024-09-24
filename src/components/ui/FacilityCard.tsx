import { Link } from "react-router-dom";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FacilityCard = ({ facility }: { facility: any }) => {
  const { _id, name, description, pricePerHour, location } = facility;

  return (
    <Card className="border-indigo-950 space-y-4 text-indigo-950">
      <CardHeader>
        <CardTitle className="text-indigo-950 hover:text-orange-600 text-3xl font-bold">
          {name}
        </CardTitle>
        <CardDescription className=" font-medium text-base flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-orange-600"
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
          {location}
        </CardDescription>
      </CardHeader>
      <div className="px-4">
        <div className="px-2 border-t-2 border-orange-600 "></div>
      </div>
      <CardFooter className="flex justify-between items-center">
        <CardDescription className=" font-medium text-base">
          Price Per Hour: $
          <span className="text-orange-600">{pricePerHour}</span>
        </CardDescription>
        <Button className=" hover:bg-orange-600 bg-indigo-950  hover:font-semibold">
          <Link to={`/facility/${facility._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FacilityCard;
