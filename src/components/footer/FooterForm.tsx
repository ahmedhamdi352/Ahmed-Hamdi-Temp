"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        );
        window.location.href = `mailto:ahmedhamdi352@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <form className="form-contact bs-light-mode" onSubmit={handleSubmit}>
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

            <div className="button-submit">
                <button className="tf-btn style-1 animate-hover-btn" type="submit">
                    <span>Send Message</span>
                </button>
            </div>

            <div className="item-shape">
                <img src="/assets/images/item/small-comet.webp" loading="lazy" decoding="async" alt="item" />
            </div>
        </form>
    );
}
