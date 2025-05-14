'use client';

export default function Home() {

  return (
    <>
      <style>{`
        body {
          background-color: #f3f4f6;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          margin: 4rem auto;
        }
        h1 {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        input[type="text"] {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          width: 100%;
          background-color: #2563eb;
          color: white;
          padding: 0.6rem;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }
        button:hover {
          background-color: #1d4ed8;
        }
        .result {
          margin-top: 1rem;
          text-align: center;
          font-weight: 500;
        }
        .result.success {
          color: green;
        }
        .result.fail {
          color: red;
        }
        hr {
          margin: 2rem 0;
          border: 1px solid #e5e7eb;
        }
        h2 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        ul {
          padding-left: 1.2rem;
          font-size: 0.95rem;
        }
      `}</style>

      <main className="container">
        <h1>User FrontEnd</h1>
      </main>
    </>
  );
}
