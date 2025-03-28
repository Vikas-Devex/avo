import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store/store";
import { getCommunityPublishedOffers, redeemPublishedOffer } from "../services/slices/business/businessSlice";
import DashboardSection from "../components/dashboardSection/dashboardSection";
const CommunityOffers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { publishedOffersData }:any = useSelector((state: RootState) => state.business);
  useEffect(()=>{
    dispatch(getCommunityPublishedOffers({limit:10, page:1}))
  }, [dispatch]);


  const redeemOffer = (item: any) => {
    const data = {offer_id: item?.id, business_id: item?.business_id};
    dispatch(redeemPublishedOffer({payload: data}));
  }
  const formatDateTime = (dateString: any) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, ".");
    return `${formattedDate}`;
  };
  return (
    <div className="main-outer pt-3 vh-100  ">
      <div className="container">
        <Header />
        <h3 className="py-4  fw-semibold">Community Offer</h3>
        <DashboardSection />
        <div className="offers  mt-3 ">
          <h3 className="fw-semibold text-[35px] mb-3">
            Offer listing for community
          </h3>
          <div className="row">
            {publishedOffersData && publishedOffersData?.offers?.map((item: any, index:number)=>{
              return(
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 " key={index}>
                  <div className="offer1 shadow-lg p-3  rounded">
                    <div className="d-flex justify-content-between">
                      <h2 className="fw-semibold fs-6 text-secondary">
                       {item?.title}
                      </h2>{" "}
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64293 17C2.99883 17 2.38111 16.7441 1.92567 16.2887C1.47022 15.8333 1.21436 15.2155 1.21436 14.5714V9.71429C1.21436 9.0702 1.47022 8.45248 1.92567 7.99704C2.38111 7.54159 2.99883 7.28572 3.64293 7.28572H30.3572C31.0013 7.28572 31.619 7.54159 32.0745 7.99704C32.5299 8.45248 32.7858 9.0702 32.7858 9.71429V14.5714C32.7858 15.2155 32.5299 15.8333 32.0745 16.2887C31.619 16.7441 31.0013 17 30.3572 17M3.64293 17H30.3572M3.64293 17V30.3572C3.64293 31.0012 3.89879 31.619 4.35424 32.0744C4.80968 32.5299 5.4274 32.7857 6.0715 32.7857H27.9286C28.5727 32.7857 29.1905 32.5299 29.6459 32.0744C30.1013 31.619 30.3572 31.0012 30.3572 30.3572V17M17.0001 7.28572V32.7857M17.0001 7.28572L24.2858 1.21429M17.0001 7.28572L9.71436 1.21429"
                          stroke="#00B69B"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h2
                      className="fw-semibold fs-6 text-secondary"
                    >
                      Max Usage: {item?.max_usage}
                    </h2>
                    <p
                      className=" text-secondary"
                    >
                      Start Date: {formatDateTime(item?.start_date)}
                    </p>
                    <p
                      className=" text-secondary"
                    >
                      End Date: {formatDateTime(item?.end_date)}
                    </p>
                    <h3
                      className="fw-semibold discount-percentage"
                    >
                      {item?.discount_percentage.split(".")[0]}% OFF
                    </h3>


                    <button
                      type="button"
                      className="btn btn-success px-3 fw-medium "
                      onClick={()=> redeemOffer(item)}
                    >
                      Redeem offer
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOffers;
