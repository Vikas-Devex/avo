import React from "react";
const RedeemedCoupons = ({
  handleShowOffer,
  redeemedOffersData,
  formatDateTime,
  handleViewOffer,
  handleShowOfferModal,
  handleEditOffer,
  handlePublishUnpublishOffer,
}) => {

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
                <th>Max usage</th>
                <th>Usage count</th>
                <th>Redeemed at</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {redeemedOffersData &&
                redeemedOffersData?.redeemedCoupons?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.title}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.max_usage}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        ${item?.usage_count}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item?.redeemed_at)}
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

export default RedeemedCoupons;
