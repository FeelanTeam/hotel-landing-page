import React from "react";
import { Divider } from "antd";
import PageWrapper from "../../components/PageWrapper";

const items: string[] = ["Apple", "Banana", "Cherry"];
const numberedItems: string[] = items.map(
  (item, index) => `${index + 1} . ${item}`
);

const items2: string[] = ["Apple", "Banana", "Cherry"];
const numberedItems2: string[] = items2.map((item2) => `${item2}`);

const TermsAndConditions = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-extralight pb-10 pt-16">
        Terms And Conditions
      </h1>
      <Divider
        style={{ borderColor: "LightGray" }}
      />
      <PageWrapper>
        <div className="pb-20 pt-3">
          <ul className="list-disc list-inside pl-10">
            {numberedItems.map((item, index) => (
              <li key={index} className="text-xl font-medium leading-10">
                {item}
              </li>
            ))}
          </ul>
          <h1 className="text-xl font-semibold pt-10">Reservation Notice :</h1>
          <ol className="list-decimal list-inside pl-10 pt-5">
            {numberedItems2.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ol>
          <h1 className="font-semibold pt-20">
            Property Cancellation Policy :
          </h1>
          <ol className="list-decimal list-inside pl-10 pt-5">
            <li>
              Return deposit <b>100%</b> when the reservation be cancelled
              before
              <b>14</b> days.
            </li>
            <li>
              Return deposit <b>70%</b> when the reservation be cancelled before
              <b>10 ~ 13</b> days.
            </li>
            <li>
              Return deposit <b>50%</b> when the reservation be cancelled before{" "}
              <b>7 ~ 9</b> days.
            </li>
            <li>
              Return deposit <b>40%</b> when the reservation be cancelled before{" "}
              <b>4 ~ 6</b> days.
            </li>
            <li>
              Return deposit <b>30%</b> when the reservation be cancelled before{" "}
              <b>2 ~ 3</b> days.
            </li>
            <li>
              Return deposit <b>20%</b> when the reservation be cancelled before{" "}
              <b>1</b>
              day.
            </li>
            <li>
              Deposit <b>non-refundable</b> when the reservation be cancelled by{" "}
              <b>check in</b>
              date.
            </li>
          </ol>
        </div>
      </PageWrapper>
    </div>
  );
};

export default TermsAndConditions;
