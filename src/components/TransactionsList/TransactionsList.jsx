
import React from "react";
import { ReactComponent as EditIcon } from 'images/Icon.svg';
import { Table } from "./TransactionsList.styled";


export function TransactionsList () {
  return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>
              <button className="editButton"><EditIcon/></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>
              <button className="editButton"><EditIcon/></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>
              <button className="editButton"><EditIcon/></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>
              <button className="editButton"><EditIcon/></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300.00</td>
            <td>
              <button className="editButton"><EditIcon/></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
  );
};
