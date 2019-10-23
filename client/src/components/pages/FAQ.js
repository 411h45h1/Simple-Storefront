import React from "react";
import { Card } from "react-bootstrap";

function FAQ() {
  return (
    <div className="FAQCont">
      <Card>
        <div className="FAQ">
          <h1>FAQ</h1>
          <strong>Store: Terms & Conditions </strong>
          <div>
            <h4 className="FAQTitles">
              <em>Return policy</em>
            </h4>
            <p>
              All sales are final. No refunds or exchanges. For Canadian orders,
              if you were sent the wrong item or if the product is defective
              contact us via email.
            </p>
          </div>

          <div>
            <h4>
              <em>Order Processing</em>
            </h4>
            <p>
              Please allow up to 5 business days to process orders. (For
              international orders only, we are not responsible for duties,
              taxes, or lost shipments.) If you have any other questions
              regarding your order,{" "}
              <b>
                <em>Email: company@hotmail.com</em>
              </b>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FAQ;
