import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";
import AddEmployee from "../components/AddEmployee/addEmployee";
import {
  deleteEmployee,
  deleteOffer,
  getAllEmployees,
  getAllOffers,
  getRedeemedCoupons,
} from "../services/slices/business/businessSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store/store";
import AddOffer from "../components/AddOffer/addOffer";
import DeleteModal from "../components/DeleteModal/deleteModal";
import ViewEmployee from "../components/ViewEmployee/viewEmployee";
import ViewOffer from "../components/ViewOffer/viewOffer";
import OfferComponent from "../components/OfferComponent/offerComponent";
import EmployeComponent from "../components/EmployeComponent/employeComponent";
import PublishUnpublish from "../components/PublishUnpublish/publishUnpublish";
import RedeemedCoupons from "../components/redeemedCoupons/redeemedCoupons";
import DashboardSection from "../components/dashboardSection/dashboardSection";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [modalType, setModalType] = useState("");
  const [employeeItem, setEmployeeItem] = useState<any>({});
  const [offerItem, setOfferItem] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();

  const { employeesData, offersData, redeemedCouponsData }: any = useSelector(
    (state: RootState) => state.business
  );
  const userDetails: any = useSelector(
    (state: RootState) => state.auth.userDetails
  );
  const handleShowEmployeModal = (item: any, type: string) => {
    setModalType(type);
    setShowEmployeeModal(true);
    setEmployeeItem(item);
  };

  const handleShowOfferModal = (item: any, type: string) => {
    setModalType(type);
    setShowOfferModal(true);
    setOfferItem(item);
  };

  const handleClose = () => {
    setShow(false);
    setShowEmployeeModal(false);
    setShowOfferModal(false);
    setModalType("");
  };
  const handleViewEmployee = (item: any, type: string) => {
    setModalType(type);
    setEmployeeItem(item);
    setShow(true);
  };

  const handleViewOffer = (item: any, type: string) => {
    setModalType(type);
    setOfferItem(item);
    setShow(true);
  };
  const handlePublishUnpublishOffer = (item: any, type: string) => {
    setModalType(type);
    setOfferItem(item);
    setShow(true);
  };
  const handleShowEmployee = (type: string) => {
    setModalType(type);
    setShowEmployee(true);
  };

  const handleShowOffer = (type: string) => {
    setModalType(type);
    setShowOffer(true);
    setOfferItem({});
  };

  const handleCloseEmployee = () => {
    setShowEmployee(false);
    setModalType("");
    setEmployeeItem({});
  };

  const handleCloseOffer = () => {
    setShowOffer(false);
    setModalType("");
    setOfferItem({});
  };

  useEffect(() => {
    if(userDetails?.business_id){
      dispatch(getAllEmployees(userDetails?.business_id));
      dispatch(getAllOffers(userDetails?.business_id));
      dispatch(getRedeemedCoupons({user_id: userDetails?.id}));
    }
  }, [userDetails?.id, userDetails?.business_id, dispatch]);

  const handleEditEmployee = (item: any, type: string) => {
    setEmployeeItem(item);
    setShowEmployee(true);
    setModalType(type);
  };

  const handleEditOffer = (item: any, type: string) => {
    setOfferItem(item);
    setShowOffer(true);
    setModalType(type);
  };

  const deleteEmployeeItem = (item: any) => {
    dispatch(
      deleteEmployee({
        employee_id: item?.id,
        business_id: userDetails?.business_id,
      })
    );
    setShowEmployeeModal(false);
  };

  const deleteOfferItem = (item: any) => {
    dispatch(
      deleteOffer({
        offer_id: item?.id,
        business_id: userDetails?.business_id,
      })
    );
    setShowOfferModal(false);
  };
  const formatDateTime = (dateString: any) => {
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
  return (
    <div>
      <div className="main-outer pt-3  h-100">
        <div className="container">
          <Header />
          <h3 className="py-4  fw-semibold">Dashboard</h3>
          <DashboardSection />
        </div>
        {userDetails?.role==="business_admin" ? 
        <EmployeComponent
          handleShowEmployee={handleShowEmployee}
          employeesData={employeesData}
          formatDateTime={formatDateTime}
          handleViewEmployee={handleViewEmployee}
          handleShowEmployeModal={handleShowEmployeModal}
          handleEditEmployee={handleEditEmployee}
        /> : null }
        {userDetails?.role==="business_admin" ? <OfferComponent
          handleShowOffer={handleShowOffer}
          offersData={offersData}
          formatDateTime={formatDateTime}
          handleViewOffer={handleViewOffer}
          handleShowOfferModal={handleShowOfferModal}
          handleEditOffer={handleEditOffer}
          handlePublishUnpublishOffer={handlePublishUnpublishOffer}
        /> : null }

        <RedeemedCoupons
          handleShowOffer={handleShowOffer}
          redeemedOffersData={redeemedCouponsData}
          formatDateTime={formatDateTime}
          handleViewOffer={handleViewOffer}
          handleShowOfferModal={handleShowOfferModal}
          handleEditOffer={handleEditOffer}
          handlePublishUnpublishOffer={handlePublishUnpublishOffer}
        />
        {/* Modal */}
        <AddEmployee
          showEmployee={showEmployee}
          handleCloseEmployee={handleCloseEmployee}
          modalType={modalType}
          employeeItem={employeeItem}
        />

        <AddOffer
          showOffer={showOffer}
          handleCloseOffer={handleCloseOffer}
          modalType={modalType}
          offerItem={modalType==="create-offer" ? null: offerItem}
        />

        <DeleteModal
          title="Delete Employee"
          show={showEmployeeModal}
          handleClose={handleClose}
          modalType={modalType}
          deleteDataItem={deleteEmployeeItem}
          dataItem={employeeItem}
        />

        <DeleteModal
          title="Delete Offer"
          show={showOfferModal}
          handleClose={handleClose}
          modalType={modalType}
          deleteDataItem={deleteOfferItem}
          dataItem={offerItem}
        />

        {modalType === "view-employee" && (
          <ViewEmployee
            show={show}
            handleClose={handleClose}
            employeeItem={employeeItem}
            formatDateTime={formatDateTime}
          />
        )}

        {modalType === "view-offer" && (
          <ViewOffer
            show={show}
            handleClose={handleClose}
            offerItem={offerItem}
            formatDateTime={formatDateTime}
          />
        )}

        {modalType === "publish-unpublish" && (
          <PublishUnpublish
            show={show}
            handleClose={handleClose}
            offerItem={offerItem}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard; // ✅ Fixed component name casing
