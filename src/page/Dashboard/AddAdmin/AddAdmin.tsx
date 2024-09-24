import { Button } from "../../../components/ui/button";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  resetForm,
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
} from "../../../redux/features/register/registerSlice";
import { IRegisterFormInput } from "../../../types/userData";
import { useSignUpMutation } from "../../../redux/features/register/registerApi";

const AddAdmin = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { address, email, name, password, phone, role } = useAppSelector(
    (state) => state.register
  );
  const [signUp, { data: signinData, error, isError, isSuccess, isLoading }] =
    useSignUpMutation();

  // get all users data
  const { data: allUsers } = useGetAllUsersQuery(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: IRegisterFormInput = {
      name,
      address,
      email,
      password,
      phone,
      role: "admin",
    };
    const user = await signUp(userData);
    dispatch(resetForm());
  };

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <div className="flex-1 md:flex justify-between items-center  space-2">
        <div className="px-4">
          <h1 className="text-5xl text-orange-600 font-bold my-6">
            <span className="">Users Data</span>
          </h1>
          <hr />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-base text-orange-600">
                  User's Name
                </TableHead>
                <TableHead className="text-base text-orange-600">
                  Email
                </TableHead>

                <TableHead className="text-right text-base text-orange-600">
                  Role
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers?.data.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">{user.name}</TableCell>

                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-right">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center items-center text-black rounded-lg px-16  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold">Add Admin</h1>
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
              </div>
              <div>
                <input
                  onChange={(e) => dispatch(setName(e.target.value))}
                  type="text"
                  id="name"
                  // value={name}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  // {...register("name")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-lg font-semibold">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  // value={email}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="password" className="text-lg font-semibold">
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  // value={password}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="phone" className="text-lg font-semibold">
                  Phone
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  // value={phone}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label htmlFor="address" className="text-lg font-semibold">
                  Address
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="address"
                  // value={address}
                  required
                  className="rounded-sm p-2 py-1 mb-2 text-lg"
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                />
              </div>
            </div>
            <Button className="mt-4 text-lg">
              <input type="submit" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
