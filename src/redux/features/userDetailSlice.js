import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://657d38f5853beeefdb9a6748.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//show user
export const showUserApi = createAsyncThunk("showUserApi", async () => {
  const resp = await fetch("https://657d38f5853beeefdb9a6748.mockapi.io/crud");
  try {
    const jsonData = await resp.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    return error;
  }
});

//delete user
export const deleteUserApi = createAsyncThunk("deleteUserApi", async (item) => {
  const res = await fetch(
    `https://657d38f5853beeefdb9a6748.mockapi.io/crud/${item.id}`,
    { method: "DELETE" }
  );
  try {
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
});

//update User
export const updateUserApi = createAsyncThunk("updateUserApi", async (item) => {
  const res = await fetch(
    `https://657d38f5853beeefdb9a6748.mockapi.io/crud/${item.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }
  );
  try {
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
});

//initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userDetail = createSlice({
  name: "userDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUserApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUserApi.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUserApi.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(deleteUserApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserApi.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((el) => el.id !== id);
      }
    });
    builder.addCase(updateUserApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserApi.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.map((el) =>
          el.id === id ? action.payload : el
        );
      }
    });
  },
});

export default userDetail.reducer;
