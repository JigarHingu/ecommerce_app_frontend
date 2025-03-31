import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// this is not the right method to verify stripe , right method is with the help of WEB HOOKS **

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) return null;

      // API call to verify the payment status
      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success && success === "true") {
        // Payment success: clear the cart and navigate to the orders page
        setCartItems({});
        toast.success("Payment successful....");
        navigate("/orders");
      } else {
        // Payment canceled or failed: keep the cart and return to the cart page
        toast.error("Payment was canceled....");
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during payment verification. Returning to cart...");
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Verifying payment, please wait...</p>
    </div>
  );
};

export default Verify;
