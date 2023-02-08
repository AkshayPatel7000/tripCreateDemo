import React from "react";
import { useState } from "react";
import moment from "moment/moment";
import ReactJson from "react-json-view";
function App() {
  const [response, setResponse] = useState({});
  const [inputs, setInputs] = useState({
    category: "One Way",
    driverId: 347,
    tripName: "Trip",
    startOdometer: false,
    endOdometer: false,
    startMeterReading: false,
    endMeterReading: false,
    applyForRecurring: false,
    isRecurring: false,
    vehicleId: 35,
  });

  const [dateTime, setDateTime] = useState({
    endDate: "",
    onwardEndDate: "",
    onwardStartDate: moment().format("YYYY-MM-DD"),
    onwardStartTime: moment().utc().format("HH:mm:ss"),
    onwardEndTime: "",
    returnEndTime: "",
    returnEndDate: "",
    returnStartDate: "",
    returnStartTime: "",
  });
  let post = {
    driverId: inputs.driverId,
    category: inputs.category,
    endDate: dateTime.endDate,
    onwardEndDate: dateTime.onwardEndDate,
    onwardStartDate: dateTime.onwardStartDate,
    returnStartDate: dateTime.returnStartDate,
    returnEndDate: dateTime.returnEndDate,

    onwardEndTime: dateTime.onwardEndTime,
    onwardStartTime: dateTime.onwardStartTime,
    returnEndTime: dateTime.returnEndTime,
    returnStartTime: dateTime.returnStartTime,
    tripName: inputs.tripName + moment().format("YYYY-MM-DD"),

    applyForRecurring: inputs.applyForRecurring,

    isEnabled: true,
    isRecurring: inputs.isRecurring,
    orgId: 1,
    status: "Not Started",
    vehicleId: inputs.vehicleId,
    endMeterReading: inputs.endMeterReading,
    endOdometer: inputs.endOdometer,
    endSelfie: false,
    startMeterReading: inputs.startMeterReading,
    startOdometer: inputs.startOdometer,
    startSelfie: false,
  };
  const SubmitFunc = async () => {
    let response = await fetch("http://13.233.175.113:11014/trips/save-trip", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => setResponse(res));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <label htmlFor="">category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
        >
          <option value="One Way">One Way</option>
          <option value="Round">Round</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Vehicle Id</label>
        <input
          type={"text"}
          name="vehicleId"
          id="vehicleId"
          value={inputs.vehicleId}
          onChange={(e) => setInputs({ ...inputs, vehicleId: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="">driverId</label>
        <input
          type={"text"}
          value={inputs.driverId}
          onChange={(e) => setInputs({ ...inputs, driverId: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="">tripName</label>
        <input
          type={"text"}
          value={inputs.tripName}
          onChange={(e) => setInputs({ ...inputs, tripName: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="">onwardStartDate</label>
        <input
          type="date"
          name=""
          id="onwardStartDate"
          className="form-control"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              onwardStartDate: moment(e.target.value, "YYYY-MM-DD").format(
                "YYYY-MM-DD"
              ),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">onwardStartTime</label>
        <input
          type="time"
          name=""
          id="onwardStartTime"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              onwardStartTime: moment(e.target.value, "hh:mm:ss")
                .utc()
                .format("HH:mm:ss"),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">onwardEndDate</label>
        <input
          type="date"
          name=""
          id="onwardEndDate"
          className="form-control"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              onwardEndDate: moment(e.target.value, "YYYY-MM-DD").format(
                "YYYY-MM-DD"
              ),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">onwardEndTime</label>
        <input
          type="time"
          name=""
          id="onwardEndTime"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              onwardEndTime: moment(e.target.value, "hh:mm:ss")
                .utc()
                .format("HH:mm:ss"),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">returnStartDate</label>
        <input
          type="datetime-local"
          name=""
          id="returnStartDate"
          className="form-control"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              returnStartDate: moment(e.target.value, "YYYY-MM-DD").format(
                "YYYY-MM-DD"
              ),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">returnStartTime</label>
        <input
          type="time"
          name=""
          id="returnStartTime"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              returnStartTime: moment(e.target.value, "hh:mm:ss")
                .utc()
                .format("HH:mm:ss"),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">returnEndDate</label>
        <input
          type="datetime-local"
          name=""
          id="returnEndDate"
          className="form-control"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              returnEndDate: moment(e.target.value, "YYYY-MM-DD").format(
                "YYYY-MM-DD"
              ),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">returnEndTime</label>
        <input
          type="time"
          name=""
          id="returnEndTime"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              returnEndTime: moment(e.target.value, "hh:mm:ss")
                .utc()
                .format("HH:mm:ss"),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">endDate</label>
        <input
          type="datetime-local"
          name=""
          id="endDate"
          className="form-control"
          onChange={(e) => {
            setDateTime({
              ...dateTime,
              endDate: moment(e.target.value, "YYYY-MM-DD").format(
                "YYYY-MM-DD"
              ),
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">applyForRecurring</label>
        <input
          type={"checkbox"}
          name="applyForRecurring"
          className="form-control"
          onChange={(e) => {
            setInputs({
              ...inputs,
              applyForRecurring: !inputs.applyForRecurring,
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="">isRecurring</label>
        <input
          type={"checkbox"}
          name="isRecurring"
          className="form-control"
          onChange={(e) => {
            setInputs({
              ...inputs,
              isRecurring: !inputs.isRecurring,
            });
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{ width: "115px", height: "40px" }}
          onClick={() => SubmitFunc()}
        >
          Submit
        </button>{" "}
      </div>
      <ReactJson src={post} />
      <ReactJson src={response} />
    </div>
  );
}

export default App;
