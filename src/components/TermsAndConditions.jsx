import React from 'react'


export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full  bg-black text-white  ">
      <div className="flex flex-col items-center  w-full">
        <div className=" strip w-full">
          <div className=" flex flex-col gap-y-[20px] items-center justify-center w-[50%] h-screen m-auto max-md:w-[90%]">
            <h1 className="text-[50px] text-center max-sm:text-[35px]">
              Terms and Conditions
            </h1>
            <p className="text-[20px] text-center max-md:text-[15px]">
              Welcome to Project Astra (“we,” “us,” or “our”). These Terms and
              Conditions (“Terms”) govern your use of our website and the
              purchase of our products. By accessing or using our website, you
              agree to these Terms. If you do not agree, please discontinue use
              of the website.
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-y-[60px] bg-[#090909] w-[75%] p-[30px] max-sm:w-[95%] max-sm:p-[15px]">
          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px]  max-sm:text-[25px]">
                1. Use of the Website
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc mb-[15px] max-sm:pl-[35px]">
                <li>
                  You must be at least 18 years old or have parental/guardian
                  consent to use our website.
                </li>
                <li>
                  You agree to use the website for lawful purposes only and in
                  compliance with all applicable laws and regulations.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                2. Orders and Payments
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p>a. Placing an Order</p>
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  By placing an order, you agree that all information provided
                  (e.g., name, address, payment details) is accurate and
                  complete.
                </li>
                <li>
                  Orders are subject to availability. We reserve the right to
                  cancel or refuse any order at our discretion.
                </li>
              </ul>

              <p>b. Payments</p>
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  All payments must be made in full at the time of purchase.
                </li>
                <li>
                  We use secure third-party payment processors. We are not
                  responsible for payment processing errors or issues arising
                  from third-party services.
                </li>
              </ul>

              <p>c. Pricing</p>
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  Prices listed on the website are in ₹(INR) and are subject to
                  change without prior notice.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                3. Shipping and Delivery
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  We deliver to addresses provided by you. Please ensure your
                  shipping information is accurate.
                </li>
                <li>
                  Delivery times are estimates and may vary depending on your
                  location. We are not responsible for delays caused by shipping
                  carriers or unforeseen circumstances.
                </li>
                <li>
                  In case of delivery issues, contact us at
                  shop@projectastrastore.com.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                4. Returns and Exchanges
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  Due to the exclusive, limited-edition nature of our products,
                  all sales are final unless the product is defective or
                  incorrect.
                </li>
                <li>
                  For defective or incorrect items, contact us within 7 days of
                  delivery at shop@projectastrastore.com with proof of the issue
                  (e.g., photos).
                </li>
                <li>
                  We reserve the right to inspect returned items before
                  processing refunds or exchanges.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                5. Intellectual Property
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  All content on this website, including but not limited to
                  designs, logos, images, and text, is the intellectual property
                  of Project Astra and is protected by copyright, trademark, and
                  other applicable laws.
                </li>
                <li>
                  You may not reproduce, distribute, or use our intellectual
                  property without prior written consent.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                6. Limitation of Liability
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  To the fullest extent permitted by law, we are not liable for
                  any damages, including but not limited to direct, indirect,
                  incidental, or consequential damages, arising from your use of
                  the website or purchase of products.
                </li>
                <li>
                  Our total liability shall not exceed the amount paid by you
                  for the product in question.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                7. User Accounts
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <ul className="pl-[50px] list-disc max-sm:pl-[35px]">
                <li>
                  You may be required to create an account to access certain
                  features of the website. You are responsible for maintaining
                  the confidentiality of your account information.
                </li>
                <li>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                8. Privacy
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p>
                Your use of the website is subject to our [Privacy Policy],
                which explains how we collect, use, and protect your
                information.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                9. Third-Party Links
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content, accuracy, or practices of these
                third-party sites.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                10. Changes to These Terms
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p className="mb-[15px]">
                We reserve the right to update or modify these Terms at any time
                without prior notice. Changes will be effective immediately upon
                posting on the website.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
                11. Governing Law
              </h1>
            </div>
            <div className="max-sm:text-[15px]">
              <p className="mb-[15px]">
                These Terms are governed by and construed in accordance with the
                laws of India, without regard to its conflict of laws
                principles.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div>
              <h1 className="text-[30px] max-sm:text-[25px]">
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
  )
}