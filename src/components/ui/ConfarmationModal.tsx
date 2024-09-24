import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "./alert-dialog";
import { Button } from "./button";
import { useAppSelector } from "../../redux/hooks";
import { usePlaceBookingMutation } from "../../redux/features/booking/bookingApi";
import { useNavigate } from "react-router-dom";

const ConfarmationModal = () => {
  const navigate = useNavigate();
  const bookingData = useAppSelector((state) => state.booking);
  const [placeBooking, { data }] = usePlaceBookingMutation();

  //   booking
  const booking = async () => {
    try {
      const res = await placeBooking(bookingData);

      if (res.data.success) {
        window.location.href = res.data.data.payment_url;
      } else {
        console.error("Order creation failed:", res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    // await placeBooking(bookingData);

    // navigate("/booking/details");
  };

  return (
    <AlertDialog>
      <Button className="text-lg  w-fit py-4 px-12 p bg-indigo-950">
        <AlertDialogTrigger> Book</AlertDialogTrigger>
      </Button>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button className="text-lg  w-full bg-indigo-950">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </Button>
          <Button onClick={booking} className="text-lg  w-full bg-indigo-950">
            <AlertDialogAction>Continue</AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfarmationModal;
