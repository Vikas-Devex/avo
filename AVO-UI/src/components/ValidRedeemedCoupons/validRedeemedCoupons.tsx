import React from "react";
import { redeemOfferByAdmin } from "../../services/slices/business/businessSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store/store";
import { useNavigate } from "react-router-dom";

interface RedeemOffer {
  description: string;
  discount_percentage:  string;
  end_date:  string;
  id: number;
  image: string;
  is_published: number;
  price: string;
  redeemed_at: string;
  start_date: string;
  title:string;
}
const ValidRedeemedCoupons = ({ validUserCoupons, validUserDetail }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const formatDateTime = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, ".");
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `${formattedDate} - ${formattedTime}`;
  };

  const handleRedeemOffer = (item: RedeemOffer) => {
    const payload = {offer_id: item.id, user_id: validUserDetail?.id};
    dispatch(redeemOfferByAdmin({payload: payload, navigate}));
  };

  return (
    <div className="container table-w">
      <div className="bg-white py-4 px-4 rounded mt-5">
        <div className="d-flex justify-content-between">
          <div className="">
            <h3 className="fw-semibold">Redeemed Offers</h3>
          </div>
        </div>
        <div className=" mt-3 table-responsive">
          <table className="table table-outer">
            <thead className="table-light table-header">
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Discount%</th>
                <th>Redeemed At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {validUserCoupons &&
                validUserCoupons?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.title}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        ${item?.price}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.discount_percentage}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item?.redeemed_at)}
                      </td>
                      <td className="fw-medium">
                        <div className="w-50 text-start">
                          <button
                            className="btn btn-success fw-medium"
                            onClick={() => handleRedeemOffer(item)}
                          >
                            Redeem
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ValidRedeemedCoupons;
