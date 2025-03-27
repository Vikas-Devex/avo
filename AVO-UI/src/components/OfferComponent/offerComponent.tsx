import React from "react";
import { Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { MdPublishedWithChanges } from "react-icons/md";
import { MdOutlineUnpublished } from "react-icons/md";
const OfferComponent = ({
  handleShowOffer,
  offersData,
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
            <h3 className="fw-semibold">Offers</h3>
          </div>

          <Button
            variant="outline-dark"
            className="mx-2 btn-success text-white border-white"
            onClick={() => handleShowOffer("create-offer")}
          >
            {" "}
            Create Offer +
          </Button>
        </div>
        <div className=" mt-3 table-responsive">
          <table className="table table-outer">
            <thead className="table-light table-header">
              <tr>
                <th>Title</th>
                <th>Max usage</th>
                <th>Price</th>
                <th>Discount%</th>
                <th>Start date</th>
                <th>End date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {offersData &&
                offersData?.offers?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.title}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.max_usage}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        ${item?.price}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {item?.discount_percentage}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item?.start_date)}
                      </td>
                      <td className="fw-medium" style={{ fontSize: "14px" }}>
                        {formatDateTime(item?.end_date)}
                      </td>
                      <td className="text-end fw-medium">
                        {item?.is_published === 0 ? 
                        <MdOutlineUnpublished 
                        className="mx-1 offer-icons"
                        onClick={() => handlePublishUnpublishOffer(item, "publish-unpublish")}
                        /> :
                        <MdPublishedWithChanges
                        className="mx-1 offer-icons"
                        onClick={() => handlePublishUnpublishOffer(item, "publish-unpublish")}
                         />}
                        <FaEye
                          className="mx-1 offer-icons"
                          
                          onClick={() => handleViewOffer(item, "view-offer")}
                        />
                        <MdDelete
                          className="mx-1 delete-icon"
                          onClick={() => handleShowOfferModal(item, "delete")}
                        />
                        <LuPencilLine
                          className="mx-1 edit-icon"
                          onClick={() => handleEditOffer(item, "edit")}
                        />
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

export default OfferComponent;
