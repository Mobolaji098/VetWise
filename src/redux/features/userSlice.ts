import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the user interface
interface IUser {
  id: string;
  username: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
}

// Define the state interface
interface UserState {
  userDetails: IUser | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: UserState = {
  userDetails: null,
  status: 'idle',
  error: null,
};

// Async thunk for fetching user details
export const fetchUserDetails = createAsyncThunk<
  IUser, // Return type
  void, // Argument type (none in this case)
  { rejectValue: string } // ThunkApiConfig
>(
  'user/fetchUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/users/me');
      return response.data as IUser;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch user details');
    }
  }
);

// Create the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.status = 'succeeded';
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

// Export the reducer
export default userSlice.reducer;
