import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllRedeemedCoupons, getValidUserById } from "../services/slices/business/businessSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store/store";
import Header from "../components/Header/header";
import ValidRedeemedCoupons from "../components/ValidRedeemedCoupons/validRedeemedCoupons";
const ViewValidEmployee = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { validUserDetail, userCoupons }: any = useSelector(
    (state: RootState) => state.business
  );

  useEffect(() => {
    dispatch(getValidUserById({ user_id: id }));
  }, [id, dispatch]);

  const handleRedeemCoupons = (user) => {
    if(user?.id){
        dispatch(getAllRedeemedCoupons({user_id: user?.id}));
    }
  }
  
  return (
    <div>
      {validUserDetail ? (
        <div className="main-outer pt-3  ">
          <div className="container">
            <Header />
            <div className="shadow-lg p-4 my-4 rounded">
              <h3 className="fw-semibold fs-5 mb-3">Valid User</h3>
              <div className="d-flex gap-4">
                <div className="">
                  <img
                    className="shadow-lg rounded-circle profile-img-width"
                    src={validUserDetail?.profile_photo}
                    alt="img"
                  />
                </div>
                <div>
                  <h4>{validUserDetail?.name}</h4>
                  <p>{validUserDetail?.role}</p>
                  <h6>{validUserDetail?.email}</h6>
                </div>
              </div>
              <div className="w-50 text-start mb-2 mt-2">
                <button
                  className="btn btn-success fw-medium"
                  onClick={()=>handleRedeemCoupons(validUserDetail)}
                >
                  Get Coupons
                </button>

                <button
                  className="btn btn-success fw-medium ms-2"
                  onClick={()=>navigate("/dashboard")}
                >
                 Back to Dashboard
                </button>
              </div>
            </div>
          </div>

          {userCoupons?.length ? <ValidRedeemedCoupons validUserCoupons={userCoupons} validUserDetail={validUserDetail} /> : null}
        </div>
      ) : (
        <div>Employee not found</div>
      )}
    </div>
  );
};

export default ViewValidEmployee;
