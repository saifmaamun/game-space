/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { Button } from "./button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { IFacility } from "../../types/facility";

const FacilityCard = ({ facility }: { facility: IFacility }) => {
  const { _id, name, description, pricePerHour, location } = facility;
  console.log(_id, description);

  // css properties
  const cardContainerStyle = {
    perspective: "1500px", // Increased perspective for depth
    display: "inline-block",
    margin: "20px", // Margin for spacing
  };

  const cardStyle = {
    transition:
      "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
    backgroundColor: "white", // Card background color
    padding: "20px", // Padding for content
    borderRadius: "12px", // Slightly more rounded corners
    height: "100%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Default shadow
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (e: { currentTarget: any }) => {
    const card = e.currentTarget;
    card.style.transform = "rotateY(10deg) rotateX(10deg) translateZ(20px)"; // Enhanced tilt
    card.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.3)"; // Stronger shadow on hover
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseLeave = (e: { currentTarget: any }) => {
    const card = e.currentTarget;
    card.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)"; // Reset transform
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)"; // Reset shadow
  };
  // css properties

  return (
    <div style={cardContainerStyle}>
      <Card
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="shadow-lg border-0 space-y-4 text-indigo-950 transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-3 hover:shadow-xl"
      >
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
    </div>
  );
};

export default FacilityCard;
