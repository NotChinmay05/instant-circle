import React from "react";

export default function GlobalStyle (){
    return (
        <style>
            {`
            :root {
                --bg-primary: #080231; /* Deep Indigo */
                --accent-blue: #00aaff; /* Bright Sky Blue */
                --bg-card: #3730a3; /* Dark Indigo */
                --red: #af0e0eff; /* CTA Pink/Red */
                --text-white: #ffffff;
                --text-sky: #93c5fd; /* Sky-300 */
                --text-gray: #d1d5db; /* Gray-300 */
            }

            body {
                margin: 0;
            }

            button{
              background-color: var(--red);
              height: 50px;
              width: 80px;
              border: 0;
              border-radius: 15px;
              color: var(--text-gray);
            }

            .app-container {
                min-height: 100vh;
                background-image: radial-gradient(var(--accent-blue) 1px, transparent 1px);
	              background-size: 32px 32px;
	              background-color: var(--bg-primary);
                font-family: 'Inter', sans-serif;
            }
            .max-width-wrapper {
                max-width: 100vw; /* Equivalent to max-w-7xl */
                margin-left: auto;
                margin-right: auto;
                padding-left: 5px;
                padding-right: 5px;
                
            }

            .nav {
                height: 15vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--text-sky);
                background-color: var(--bg-primary);
                position: sticky;
            }


            .feature-card {
              padding: 1.5rem;
              border-radius: 1rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
              background-color: var(--bg-card);
              color: var(--text-white);
              margin: 1.5rem 1rem;
              transition: transform 0.3s ease;
            }
            .feature-card:hover { transform: scale(1.02); }
            .card-content {
              display: flex;
              align-items: center;
              gap: 2rem;
            }
            
            .card-content.left-aligned { justify-content: flex-start; }
            .card-content.right-aligned { justify-content: space-between; }
            .card-text-container {
              flex: 1;
            }
            .card-title {
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--text-sky);
              margin-bottom: 0.25rem;
            }
            .card-description {
              font-size: 0.875rem;
              color: var(--text-gray);
            }

            .app-footer {
                height: 20vh;
                padding: 1.5rem;
                background-color: var(--accent-blue);
                color: var(--text-white);
                font-size: 0.875rem;
                margin-top: 2rem;
            }
            .footer-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .footer-contact {
                padding-top: 0.5rem;
                border-top: 1px solid #38bdf8; /* sky-400 */
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            `}
        </style>
    );
}