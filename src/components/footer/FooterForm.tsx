"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        budget: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleSelectBudget = (value: string) => {
        setFormData((prev) => ({ ...prev, budget: value }));
    };

    return (
        <form className="form-contact bs-light-mode">
            <div className="d-grid gap_24 mb_24">
                <fieldset>
                    <input id="name" type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
                </fieldset>
                <fieldset>
                    <input id="email" type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required />
                </fieldset>
                <fieldset>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Your Message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </fieldset>
            </div>

            <ul className="list-tag">
                {["< $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - 20,000", "< $20,000"].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className={`text_white text-body-1 font-3 ${formData.budget === item ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleSelectBudget(item);
                            }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="button-submit">
                <button className="tf-btn style-1 animate-hover-btn" type="submit">
                    <span>Get Started !</span>
                </button>
            </div>

            <div className="item-shape">
                <img src="/assets/images/item/small-comet.webp" loading="lazy" decoding="async" alt="item" />
            </div>
        </form>
    );
}
