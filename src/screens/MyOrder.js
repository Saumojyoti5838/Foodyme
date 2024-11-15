import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: localStorage.getItem('userEmail') })
            });

            const data = await response.json();
            if (data && data.orderData) {
                setOrderData(data.orderData);
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData.length ? orderData.map((order, index) => (
                        <div key={index} className='col-12'>
                            <h3>Order Date: {order[1]}</h3>
                            <div className='row'>
                                {order[0].map((item, idx) => (
                                    <div key={idx} className='col-12 col-md-6 col-lg-3 mb-3'>
                                        <div className="card" style={{ width: "16rem", maxHeight: "360px" }}>
                                            <img src={item.img} className="card-img-top" alt={item.name} style={{ height: "120px", objectFit: "cover" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                    <span className='m-1'>{item.qty}</span>
                                                    <span className='m-1'>{item.size}</span>
                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                        ₹{item.price}/-
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                        </div>
                    )) : <p>No orders found.</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
