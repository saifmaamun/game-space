interface User {
  _id: string; // Unique identifier for the user
  name: string; // Name of the user
  email: string; // Email of the user
  phone: string; // Phone number of the user
  role: "user" | "admin"; // User role
  address: string; // Address of the user
  __v: number; // Version key for document management (from MongoDB)
}

interface Facility {
  _id: string; // Unique identifier for the facility
  name: string; // Name of the facility
  description: string; // Description of the facility
  pricePerHour: number; // Price per hour for booking
  location: string; // Location of the facility
  isDeleted: boolean; // Indicates if the facility is deleted
}

export interface IBooking {
  _id: string; // Unique identifier for the booking
  date: string; // Date of the booking in ISO format
  startTime: string; // Start time of the booking
  endTime: string; // End time of the booking
  user: User; // User object associated with the booking
  facility: Facility; // Facility object associated with the booking
  payableAmount: number; // Total amount to be paid
  isBooked: string; // Booking status (e.g., confirmed)
  __v: number; // Version key for document management (from MongoDB)
}
