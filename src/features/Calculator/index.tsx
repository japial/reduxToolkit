import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { divide5, multiply3 } from "./calculatorSlice";

export default function Calculator() {
  const { value } = useSelector((state: RootState) => state.counter);
  const { calc } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();

  return (
    <div className="card mt-4">
      <div className="card-header">
        Calculated <strong className="text-info">{value ? calc : value}</strong>
      </div>
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  aria-label="Multiply by 3"
                  onClick={() => dispatch(multiply3(value))}
                  className="btn btn-light"
                >
                  Multiply by 3
                </button>
              </td>
              <td>
                <button
                  className="btn btn-light"
                  aria-label="Divide by 5"
                  onClick={() => dispatch(divide5(value))}
                >
                  Divide by 5
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
