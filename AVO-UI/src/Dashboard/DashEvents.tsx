import { MdDelete } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/header";

const CreateOffers = () => {
  return (
    <div>
      <div className="main-outer pt-3  vh-100">
        <div className="container">
          <Header />
          <h3 className="py-4  fw-semibold">Dashboard</h3>
          <div className="d-flex flex-wrap gap-3  justify-content-md-start mob-break">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded flex-grow-1"
                style={{ minWidth: "280px", maxWidth: "400px" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-3">Active deals</h6>
                    <h3 className="fw-bold">40,689</h3>
                  </div>
                  <div className="user-item">
                    <img
                      src={`/images/icon${index === 1 ? "(1)" : ""}.png`}
                      alt="icon"
                    />
                  </div>
                </div>
                <p className="mt-3 fw-semibold text-muted">
                  <img
                    className="me-2"
                    src="/images/iconleft.png"
                    alt="icon left"
                  />
                  <span>8.5%</span> Up from yesterday
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="bg-white py-4 px-4 rounded mt-5">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3 className="fw-semibold">Offers</h3>
              </div>

              <Button
                variant="outline-dark"
                className="mx-2 btn-success text-white border-white"
                // onClick={() => handleShow("offers")}
              >
                {" "}
                Create Offer +
              </Button>
            </div>
            <div className=" mt-3 table-responsive">
              <table className="table table-outer">
                <thead className="table-light table-header">
                  <tr>
                    <th>Offers</th>
                    <th>Offer name</th>
                    <th>Offer Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      1
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      423
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      $34,295
                    </td>
                    <td className="text-end fw-medium">
                      <MdDelete
                        style={{
                          color: "#FF0000",
                          fontSize: "24px",
                          cursor: "pointer",
                        }}
                        // onClick={() => handleShow("delete")}
                      />
                      <LuPencilLine
                        className="mx-2"
                        style={{
                          color: "#6C6C6C",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        // onClick={() => handleShow("edit")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      1
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      423
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      $34,295
                    </td>
                    <td className="text-end">
                      <MdDelete
                        style={{ color: "#FF0000", fontSize: "24px" }}
                      />
                      <LuPencilLine
                        className="mx-2"
                        style={{ color: "#6C6C6C", fontSize: "20px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      1
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      423
                    </td>
                    <td className="fw-medium" style={{ fontSize: "14px" }}>
                      $34,295
                    </td>
                    <td className="text-end">
                      <MdDelete
                        style={{ color: "#FF0000", fontSize: "24px" }}
                      />
                      <LuPencilLine
                        className="mx-2"
                        style={{ color: "#6C6C6C", fontSize: "20px" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOffers;
