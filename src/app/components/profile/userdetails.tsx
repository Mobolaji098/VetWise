import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchUserDetails } from "@/redux/features/userSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserDetails() {
    const router = useRouter();
  const dispatch = useAppDispatch();  // Use custom hook
  const userDetails = useAppSelector((state) => state.userReducer.userDetails);
  const status = useAppSelector((state) => state.userReducer.status);
  const error = useAppSelector((state) => state.userReducer.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserDetails());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    router.push("/login");
    return <div>Error: {error}</div>;
  }

  console.log(userDetails, status, error);
  return <div>{userDetails && userDetails.username}</div>;
}
