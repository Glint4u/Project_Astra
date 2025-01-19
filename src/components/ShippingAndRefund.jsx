import React from "react";

export default function ShippingAndRefund() {
  return (
    <div className="flex flex-col w-full  bg-black text-white ">
      <div className="flex flex-col items-center  w-full">
        <div className=" strip w-full">
          <div className=" flex flex-col gap-y-[20px] items-center justify-center w-[50%] h-screen m-auto max-md:w-[90%]">
            <h1 className="text-[50px]  text-center max-sm:text-[35px]">
              Shipping, Delivery, and Refund Policy
            </h1>
            <p className="text-[20px]  text-center max-md:text-[15px]">
              At Project Astra, we are committed to providing a premium shopping
              experience. This policy outlines our shipping, delivery, and
              refund process to ensure transparency for our customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-y-[60px] bg-[#090909] w-[75%] p-[30px] max-sm:w-[95%] max-sm:p-[15px]">
          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px]  max-sm:text-[25px]">
                1. Shipping Policy
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p>a. Processing Time</p>
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>Orders are shipped 7 days after the order is placed.</li>
                <li>
                  Processing times may vary during exclusive drops or
                  high-demand periods.
                </li>
              </ul>

              <p>b. Shipping Charges</p>
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>
                  Delivery is free for all orders, including prepaid and Cash on
                  Delivery (COD) options.
                </li>
                <li>
                  Prepaid orders receive an additional discount, making them the
                  preferred payment method.
                </li>
              </ul>

              <p>c. Priority for VIP List</p>
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  Customers on our VIP List enjoy priority delivery for faster
                  shipping and a more exclusive experience.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px]  max-sm:text-[25px]">
                2. Delivery Policy
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>
                  Estimated delivery times vary depending on your location. We
                  aim to deliver your order within 3–10 business days after
                  shipping.
                </li>
                <li>
                  Delivery times are estimates and subject to delays due to
                  shipping carrier issues, holidays, or unforeseen
                  circumstances.
                </li>
              </ul>

              <p className="mb-[5px]">Important Note:</p>
              <p>
                Please ensure the shipping address provided at checkout is
                accurate. Project Astra is not responsible for delays or failed
                deliveries due to incorrect or incomplete addresses.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px]  max-sm:text-[25px]">
                3. Refund and Return Policy
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p>a. No Returns or Refunds</p>
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>
                  All sales are final. We do not accept returns or issue refunds
                  unless the product is damaged or defective upon delivery.
                </li>
              </ul>

              <p>b. Damaged or Defective Products</p>
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>
                  If you receive a damaged or defective product, please contact
                  us within
                </li>
              </ul>
              <p>
                48 hours of delivery at shop@projectastrastore.com with the
                following:
              </p>

              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>Order number</li>
                <li>Clear photos of the damaged/defective item</li>
                <li>Description of the issue</li>
                <li>
                  Once the issue is verified, we will arrange a replacement or
                  refund at our discretion.
                </li>
              </ul>

              <p>c. Conditions for Refund or Replacement</p>
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  The item must be unused, with original tags and packaging
                  intact.
                </li>
                <li>
                  We reserve the right to deny a refund or replacement if the
                  damage is found to be caused after delivery.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px]  max-sm:text-[25px]">
                12. Contact Us
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p className="mb-[15px]">
                For any questions about this Privacy Policy or your personal
                information, contact us at:
              </p>
              <p>Project Astra Support Team</p>
              <p>Email: shop@projectastrastore.com</p>
              <p>Phone: 9904990808 (WhatsApp only)</p>
            </div>
          </section>

          <p>
            This Privacy Policy is part of our commitment to transparency and
            customer trust. Thank you for choosing Project Astra.
          </p>
        </div>
      </div>
    </div>
  );
}