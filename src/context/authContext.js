"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cartLength, setCartLength] = useState(() => {
        const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
        return storedCart ? JSON.parse(storedCart).length : 0;  // Get cart length from localStorage
    });
    const [cart, setCart] = useState(() => {
        const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [productIds, setProductIds] = useState(() => {
        const storedProductIds = typeof window !== "undefined" ? localStorage.getItem("products") : null;
        return storedProductIds ? JSON.parse(storedProductIds) : [];
    });

    const addProductsToLocal = (temp) => {
        localStorage.setItem("products", JSON.stringify(temp))
        setProductIds(temp)
    };

    const AddToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCartLength(updatedCart.length); // Update cart length when adding a product
            return updatedCart;
        });
    };

    const deleteFromCart = (id) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCartLength(updatedCart.length); // Update cart length when deleting a product
            return updatedCart;
        });
    };
    const removeItemFromCart = (id, size) => {
        setCart((prevCart) => {
          const updatedCart = prevCart.filter(
            (item) => !(item.id === id && item.size === size)
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return updatedCart;
        });
      };

    const emptyCart = () => {
        setCart([]);
        setProductIds([]);
        localStorage.removeItem("cart");
        localStorage.removeItem("productIds");
        setCartLength(0); // Reset cart length when the cart is emptied
    };

    const checkAuthenticated = async () => {
        const response = await fetch("/api/authenticate");
        const data = await response.json();
        setAuthenticated(data.isAuthenticated);
        setOpen(data.isAuthenticated);
        setLoading(false);
    };

    const checkDate = () => {
        const date = new Date();
        let raw_date = date.toUTCString().split(" ");
        const current_date = parseInt(raw_date[1]);
        return current_date;
    };

    useEffect(() => {
        const date = checkDate();
        if (date > 25) {
            setLoading(false);
            setOpen(true);
            setAuthenticated(true);
        } else {
            checkAuthenticated();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            setAuthenticated, 
            isOpen, 
            setOpen, 
            loading, 
            setLoading, 
            cart, 
            setCart, 
            cartLength, // Provide cartLength here
            setCartLength, // You can use this to update the cart length manually if needed
            productIds, 
            setProductIds, 
            AddToCart, 
            deleteFromCart, 
            emptyCart, 
            addProductsToLocal,
            removeItemFromCart
        }}>
            {children}
        </AuthContext.Provider>
    );
};
