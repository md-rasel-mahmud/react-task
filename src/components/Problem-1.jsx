import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  // -> STATE FOR GET VALUE FROM INPUT
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  // -> DATA STATE FOR TABLE
  const [data, setData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // -> PUSH VALUE TO DATA STATE
    if (name === "" || status === "") {
      alert("Please fill the form");
      return;
    }

    // -> PUSH VALUE TO DATA STATE
    setData((prev) => [...prev, { name, status }]);

    // -> RESET INPUT VALUE
    setName("");
    setStatus("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={name}
                onChange={({ target: { value } }) => setName(value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={status}
                onChange={({ target: { value } }) => setStatus(value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-capitalize">
              {data
                .filter((item) => {
                  // -> FILTER DATA BASED ON SHOW STATE
                  if (show === "all") return true;
                  if (show === "active")
                    return item.status.toLowerCase() === "active";
                  if (show === "completed")
                    return item.status.toLowerCase() === "completed";
                })
                .sort((a, b) => {
                  // -> SORT DATA BASED ON STATUS
                  const statusPriority = {
                    active: 1,
                    completed: 2,
                  };

                  // -> IF STATUS IS NOT IN PRIORITY THEN IT WILL BE 3
                  const statusA = statusPriority[a.status.toLowerCase()] || 3;
                  const statusB = statusPriority[b.status.toLowerCase()] || 3;

                  // -> SORT DATA BASED ON STATUS
                  return statusA - statusB;
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
