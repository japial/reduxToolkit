import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  square,
  reset,
  incrementByAmount,
} from "./counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={5}>
              <strong className="m20">{count}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                className="m20"
              >
                Increment
              </button>
            </td>
            <td>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(incrementByAmount(4))}
                className="m20"
              >
                Increment by 4
              </button>
            </td>
            <td>
              <button
                className="m20"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </td>
            <td>
              <button
                className="m20"
                aria-label="Square It"
                onClick={() => dispatch(square())}
              >
                Square
              </button>
            </td>
            <td>
              <button
                className="m20"
                aria-label="Reset"
                onClick={() => dispatch(reset())}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
