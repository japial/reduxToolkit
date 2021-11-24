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
    <div className="card">
      <div className="card-header">
        Counter <strong className="text-primary">{count}</strong>
      </div>
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                  className="btn btn-light"
                >
                  Increment
                </button>
              </td>
              <td>
                <button
                  aria-label="Increment value"
                  onClick={() => dispatch(incrementByAmount(4))}
                  className="btn btn-light"
                >
                  Increment by 4
                </button>
              </td>
              <td>
                <button
                  className="btn btn-light"
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </button>
              </td>
              <td>
                <button
                  className="btn btn-light"
                  aria-label="Square It"
                  onClick={() => dispatch(square())}
                >
                  Square
                </button>
              </td>
              <td>
                <button
                  className="btn btn-light"
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
    </div>
  );
}
