interface ContactIconLinksProps {
    className?: string;
}

export default function ContactIconLinks({ className = "" }: ContactIconLinksProps) {
    return (
        <ul className={`list-icon d-flex contact-icon-links ${className}`}>
            <li>
                <a href="mailto:ahmedhamdi352@gmail.com" aria-label="Email Ahmed Hamdi">
                    <span className="icon-EnvelopeSimple" />
                </a>
            </li>
            <li>
                <a
                    href="https://wa.me/971522016367"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Ahmed Hamdi on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.04 2a9.84 9.84 0 0 0-8.4 14.96L2.05 22l5.18-1.52A9.94 9.94 0 1 0 12.04 2Zm0 17.99a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.9.92-2.99-.2-.31a8.08 8.08 0 1 1 6.78 3.71Zm4.43-6.05c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2a7.31 7.31 0 0 1-1.35-1.68c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                    </svg>
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/ahmed-hamdi-226359174/"
                    className="icon-LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ahmed Hamdi on LinkedIn"
                />
            </li>
        </ul>
    );
}
