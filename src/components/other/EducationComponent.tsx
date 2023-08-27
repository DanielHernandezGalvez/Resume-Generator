import React, { ChangeEvent } from "react";
import { EducationComponentProps } from "../../interface/EducationProps";

const EducationComponent: React.FC<EducationComponentProps> = ({
  educationList,
  setEducationList,
  university,
  setUniversity,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isOngoing,
  setIsOngoing,
  addEducation,
  deleteEducation,
}) => (
  <div className="container justify-content-between flex-wrap col-12">
    <div className="row mx-auto ">
      {/* ... (other JSX) */}
      <input
        className="form-control rounded my-4"
        placeholder="University:"
        value={university}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUniversity(e.target.value)
        }
      />

      <input
        placeholder="Degree:"
        className="form-control rounded my-2"
        value={degree}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDegree(e.target.value)
        }
      />

      <div className="input-group my-4 d-flex justify-content-evenly">
        <div className="d-flex flex-column">
          <label>Start Date:</label>
          <input
            className="form-control rounded"
            value={startDate}
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStartDate(e.target.value)
            }
          />
        </div>
        <div className="d-flex flex-column">
          <label>Do you still studiying here?:</label>
          <input
            type="checkbox"
            checked={isOngoing}
            id="ongoing"
            autoComplete={"off"}
            className="btn-check"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIsOngoing(e.target.checked)
            }
          />
          <label htmlFor="ongoing" className="btn btn-outline-primary">
            Ongoing
          </label>
        </div>
        <div className="d-flex flex-column">
          <label>End Date:</label>
          <input
            className="form-control rounded"
            value={endDate}
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEndDate(e.target.value)
            }
            disabled={isOngoing}
          />
        </div>
      </div>

      <button className="btn btn-primary " onClick={addEducation}>
        Add Education
      </button>

      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>
            {edu.degree} in {edu.university}, {edu.startDate} -{" "}
            {edu.isOngoing ? "Present" : edu.endDate}
            <button
              className="btn btn-danger"
              onClick={() => deleteEducation(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default EducationComponent;
