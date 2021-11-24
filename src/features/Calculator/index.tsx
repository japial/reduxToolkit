import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { divide5, multiply3 } from "./calculatorSlice";

export default function Calculator() {
  const { value } = useSelector((state: RootState) => state.counter);
  const { calc } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <button
                aria-label="Multiply by 3"
                onClick={() => dispatch(multiply3(value))}
                className="m20"
              >
                Multiply by 3
              </button>
            </td>
            <td>
              <button
                className="m20"
                aria-label="Divide by 5"
                onClick={() => dispatch(divide5(value))}
              >
                Divide by 5
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2}>
              <strong className="m20">{value ? calc : value}</strong>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
