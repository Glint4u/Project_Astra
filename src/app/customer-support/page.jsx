"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import API_URLS from "../constants/api_urls";

function Page() {
    const [openIndexes, setOpenIndexes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_num: "",
        contact_reason: "",
        message: "",
    });

    const toggleOption = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToastId = toast.loading("Submitting Form..."); 
        setLoading(true)
        try {
            const response = await fetch(API_URLS.CONTACT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error("Failed to submit the form");
            }
    
            toast.dismiss(loadingToastId);
            toast.success("Form submitted successfully!");
    
            setFormData({
                name: "",
                email: "",
                mobile_num: "",
                contact_reason: "",
                message: "",
            });
            setLoading(false)
            return
        } catch (error) {
            setLoading(false)
            toast.dismiss(loadingToastId);
            toast.error("There was an error submitting the form. Please try again.");
        }
    };
    

    const faqs = [
        {
            question: "I PLACED MULTIPLE ORDERS, CAN I COMBINE THEM?",
            answer: "Unfortunately, we are unable to combine multiple orders once they have been placed."
        },
        {
            question: "I RECEIVED A DAMAGED PRODUCT, WHAT SHOULD I DO?",
            answer: "If you receive a damaged product, please contact our customer support with photos of the damage for assistance."
        },
        {
            question: "CAN I RETURN MY ONLINE ORDER IN STORE?",
            answer: "Returns for online orders can only be processed through our online return system and not in physical stores."
        },
        {
            question: "I RECEIVED A TRACKING NUMBER, BUT THE SHIPMENT HASN'T MOVED.",
            answer: "Please allow 24-48 hours for tracking updates. If the issue persists, contact the shipping carrier for more details."
        },
        {
            question: "CAN I RETURN COLLABORATION ITEMS?",
            answer: "Collaboration items are final sale and cannot be returned or exchanged."
        },
        {
            question: "IF AN ITEM IS SOLD OUT, WHEN WILL IT BE AVAILABLE AGAIN?",
            answer: "Restock availability varies. Subscribe to our newsletter or check the website for updates."
        },
        {
            question: "MY ORDER IS A GIFT, DO YOU INCLUDE THE PRICE IN THE PACKAGE?",
            answer: "No, we do not include pricing details in the package for gift orders."
        },
        {
            question: "DO YOU OFFER GIFT RECEIPTS OR GIFT CARDS?",
            answer: "Yes, we offer both gift receipts and gift cards. Please check our website for more details."
        },
        {
            question: "I RECEIVED AN ITEM FROM STUSSY.COM AS A GIFT. CAN I RETURN IT OR EXCHANGE IT?",
            answer: "Gift returns or exchanges require proof of purchase and are subject to our return policy."
        },
        {
            question: "CAN I GET SOME FREE STICKERS?",
            answer: "We occasionally include free stickers with orders, but they are not guaranteed."
        }
    ];
    
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} /> 
            <div className="bg-black main-container min-h-screen h-fit w-full flex items-center justify-center pt-[200px] pb-[100px] ">
                <div className="sub-main-container h-full flex items-start justify-between w-full max-md:flex-col max-md:gap-y-[100px]">
                    {/* Left Container */}
                    <div className="left-container w-[50%] flex flex-col items-center gap-y-[30px] max-md:w-full">
                        <h3 className="text-white text-[20px]">CONTACT US</h3>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                            className="flex flex-col gap-y-[30px] text-white w-[70%] max-md:w-full max-md:px-[20px]"
                        >
                            <input
                                required
                                className="bg-transparent border-b border-white/50 outline-none pb-[18px] placeholder:text-[13px]"
                                type="text"
                                name="name"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    });
                                }}
                                value={formData.name}
                                placeholder="NAME"
                                disabled={loading}

                            />
                            <input
                                required
                                className="bg-transparent border-b border-white/50 outline-none pb-[18px] placeholder:text-[13px]"
                                name="mobile number"
                                type="text"
                                value={formData.mobile_num}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        mobile_num: e.target.value,
                                    });
                                }}
                                placeholder="MOBILE NUMBER"
                                disabled={loading}

                            />
                            <input
                                required
                                className="bg-transparent border-b border-white/50 outline-none pb-[18px] placeholder:text-[13px]"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    });
                                }}
                                placeholder="EMAIL"
                                disabled={loading}

                            />
                            <select
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        contact_reason: e.target.value,
                                    });
                                }}
                                value={formData.contact_reason}
                                name=""
                                id=""
                                disabled={loading}

                                className=" focus:bg-black/70 bg-transparent border-b border-white/50 outline-none pb-[18px] placeholder:text-[13px]"
                            >
                                <option value="Please Select">
                                    Please Select
                                </option>
                                <option value="Order Status">Order Status</option>
                                <option value="Return Order">Return Order</option>
                                <option value="Address Update Request">Address Update Request</option>
                                <option value="Shipping/Tracking">Shipping/Tracking</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    });
                                }}
                                placeholder="MESSAGE"
                                className="resize-none bg-transparent border-b border-white/50 outline-none pb-[18px] placeholder:text-[13px]"
                                name=""
                                id=""
                                disabled={loading}
                            ></textarea>

                            <button
                                type="submit"
                                className={`bg-white text-black h-[50px] ${loading ? "cursor-not-allowed bg-[#ffffffaf]" : "cursor-pointer"} `}
                                disabled={loading}
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Right Container */}
                    <div className="right-container w-[50%] flex flex-col items-center gap-y-[30px] md:max-h-[600px] h-fit max-md:w-full">
                        <h3 className="text-white text-[20px]">
                            Frequently Asked Questions
                        </h3>
                        <div className="flex flex-col gap-y-[30px] text-white w-[70%] md:overflow-y-auto max-md:w-full max-md:px-[20px]">
                            {faqs.map((items, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-[20px] items-start w-full max-md:text-[13px]"
                                >
                                    <div className="flex items-center justify-between w-full max-md:gap-x-[20px]">
                                        <p>{items.question}</p>
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => toggleOption(index)}
                                        >
                                            <ChevronDown color="white" />
                                        </button>
                                    </div>
                                    {openIndexes.includes(index) && (
                                        <div className="h-fit text-white/60 mt-2 max-md:text-[13px]">
                                            {items.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
