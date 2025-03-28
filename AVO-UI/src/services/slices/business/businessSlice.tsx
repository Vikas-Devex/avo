import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http/baseUrl";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { getUserDetails } from "../auth/signUpSlice";

export const createBusiness = createAsyncThunk<
  any,
  { payload: any; navigate: (path: string) => void }
>(
  "business/createBusiness",
  async ({ payload, navigate }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post("Avo/register-business", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        toast.success(" Business created successfully!");
        Cookies.set(
          "user_data",
          JSON.stringify(response?.data?.data?.updated_user),
          {
            expires: 30,
          }
        );
        dispatch(getUserDetails());
        navigate("/dashboard");
        return response.data;
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Create business failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during craete business");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllEmployees = createAsyncThunk<any>(
  "business/getAllEmployees",
  async (business_id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(
        `Avo/employee-history`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Get all offers failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get all offers");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllOffers = createAsyncThunk<any>(
  "business/getAllOffers",
  async (business_id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(
        `Avo/business-offer-list?business_id=${business_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        return response.data;
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Create employee failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get all offers");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createEmployee = createAsyncThunk<
  any,
  { payload: any; business_id: any }
>(
  "business/createEmployee",
  async ({ payload, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post("Avo/add-employee", payload);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        if (response.data.status === 200) {
          toast.success(" Employee created successfully!");
          dispatch(getAllEmployees(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Create employee failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during create employee");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateEmployee = createAsyncThunk<
  any,
  { payload: any; business_id: any }
>(
  "business/createEmployee",
  async ({ payload, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.put("Avo/update-employee", payload);
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success(" Employee updated successfully!");
          dispatch(getAllEmployees(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Create employee failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during create employee");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteEmployee = createAsyncThunk<
  any,
  { employee_id: any; business_id: any }
>(
  "business/deleteEmployee",
  async ({ employee_id, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.delete(
        `Avo/delete-employees/?employee_id=${employee_id}`
      );
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success(" Employee deleted successfully!");
          dispatch(getAllEmployees(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Delete employee failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete employee");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const createOffer = createAsyncThunk<
  any,
  { payload: any; business_id: any }
>(
  "business/createOffer",
  async ({ payload, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post("Avo/create-offer", payload);
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success("Offer created successfully!");
          dispatch(getAllOffers(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Create offer failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during create offer");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteOffer = createAsyncThunk<
  any,
  { offer_id: any; business_id: any }
>(
  "business/deleteOffer",
  async ({ offer_id, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.delete(`Avo/delete-offer/?id=${offer_id}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        if (response.data.status === 200) {
          toast.success("Offer deleted successfully!");
          dispatch(getAllOffers(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Delete offer failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during delete offer");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const publishUnpublishOffer = createAsyncThunk<
  any,
  { payload:any; offer_id: any; business_id: any}
>(
  "business/publishUnpublishOffer",
  async ({ payload, offer_id, business_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post(`Avo/publish-offer?id=${offer_id}`, payload);
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success("Offer updated successfully!");
          dispatch(getAllOffers(business_id));
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Publish unpublish offer failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during publish unpublish offer");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getCommunityPublishedOffers = createAsyncThunk<
  any,
  { limit:Number; page: Number; }
>(
  "business/getCommunityPublishedOffers",
  async ({ limit, page }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(`Avo/publish-offer-list?limit=${limit}&page=${page}`);
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        if (response.data.status === 200) {
          return response.data;
        } else {
          toast.error(response.data.data.error);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Get offers failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get offers");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const redeemPublishedOffer = createAsyncThunk<
  any,
  { payload: any }
>(
  "business/redeemPublishedOffer",
  async ({ payload }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post("Avo/redeem-coupon", payload);
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success("Coupon redeemed successfully!");
          return response.data;
        } else {
          toast.error(response.data.data.message);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Add redeem coupon failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during add redeem coupon");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getRedeemedCoupons = createAsyncThunk<
  any,
  { user_id:Number; }
>(
  "business/getRedeemedCoupons",
  async ({ user_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(`Avo/redeemed-coupons?user_id=${user_id}`);
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          return response.data;
        } else {
          toast.error(response.data.data.message);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Get coupon failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get coupon");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getValidUserById = createAsyncThunk<
  any,
  { user_id: number }
>(
  "business/getEmployeeById",
  async ({ user_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(
        `Avo/user-details-byId/?id=${user_id}`
      );
      if (response.status === 200) {
        dispatch(stopLoadingActivity());
        if (response.data.status === 200) {
          toast.success("Valid user!");
          return response.data;
        } else {
          toast.error(response?.data?.data?.message);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Get employee failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get employee");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAllRedeemedCoupons = createAsyncThunk<
  any,
  { user_id: number }
>(
  "business/getAllRedeemedCoupons",
  async ({ user_id }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.get(
        `Avo/valid-coupons/?user_id=${user_id}`
      );
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success("coupons fetched successfully!");
          return response.data;
        } else {
          toast.error(response?.data?.data?.message);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("Get all coupons failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during get all coupons");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const redeemOfferByAdmin = createAsyncThunk<
  any,
  { payload: {offer_id: number, user_id: number}; navigate: (path: string) => void }
>(
  "business/redeemOfferByAdmin",
  async ({ payload, navigate }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await api.post(
        "Avo/use-coupon", payload
      );
      if (response.status === 200) {
        if (response.data.status === 200) {
          dispatch(stopLoadingActivity());
          toast.success("coupons redeemed successfully!");
          navigate("/dashboard");
          getAllRedeemedCoupons({user_id: payload?.user_id})
          return response.data;
        } else {
          toast.error(response?.data?.data?.message);
        }
      } else {
        toast.error("Something went wrong!");
        return rejectWithValue("coupon redeem failed!");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("An error occurred during redeem coupon");
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  userData: {},
  employeesData: [],
  offersData: [],
  publishedOffersData: [],
  redeemedCouponsData: [],
  validUserDetail: {},
  userCoupons: []
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBusiness.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(createBusiness.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getAllEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employeesData = action.payload.data;
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offersData = action.payload.data;
      })
      .addCase(getAllOffers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getCommunityPublishedOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommunityPublishedOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.publishedOffersData = action.payload.data;
      })
      .addCase(getCommunityPublishedOffers.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getRedeemedCoupons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRedeemedCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.redeemedCouponsData = action.payload.data;
      })
      .addCase(getRedeemedCoupons.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getValidUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getValidUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.validUserDetail = action?.payload?.data;
      })
      .addCase(getValidUserById.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(getAllRedeemedCoupons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRedeemedCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.userCoupons = action?.payload?.data;
      })
      .addCase(getAllRedeemedCoupons.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default businessSlice.reducer;
