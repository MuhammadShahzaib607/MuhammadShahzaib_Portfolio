import React, { useState } from "react";
import "./contact.scss";

const Contact = ({ darkMode }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [alert, setAlert] = useState(null); // custom alert state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)
            const res = await fetch("https://fin-tracker-five-virid.vercel.app/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setAlert("✅ Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
                setIsLoading(false)
            } else {
                setAlert("❌ Failed to send message: " + data.msg);
                                setIsLoading(false)
            }
        } catch (error) {
            setAlert("❌ Something went wrong!");
                            setIsLoading(false)
        }

        // Auto hide after 3s
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };

    return (
        <section className={`contactPage ${darkMode ? "dark" : "light"}`}>
            <div className="container">
                <h2 className="heading">Get in Touch</h2>
                <p className="subText">
                    Feel free to reach out for collaborations, freelance work, or just to say hello!
                </p>

                {/* Custom Alert */}
                {alert && <div className="customAlert">{alert}</div>}

                {/* Contact Form */}
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    ></textarea>
                    {
                        isLoading ?
                        <div className="loader"></div> :
                        <button type="submit" className="btn">Send Message</button>
                    }
                </form>
            </div>
        </section>
    );
};

export default Contact;
