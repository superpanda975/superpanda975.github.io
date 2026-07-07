/* --- Global Reset & Base Styling --- */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: #f0f3f5;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

main {
    max-width: 700px;
    width: 90%;
    margin: 2rem auto;
}

section {
    background: #ffffff;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-align: center;
}

/* --- Goal Counter Visuals --- */
.counter-box {
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem auto;
    max-width: 200px;
}

#goalCount {
    font-size: 4rem;
    font-weight: bold;
    color: #e74c3c;
    display: block;
    line-height: 1;
}

/* --- Buttons --- */
button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(39, 174, 96, 0.3);
    transition: all 0.2s ease;
}

button:hover {
    background-color: #219653;
    transform: translateY(-2px);
}

.team-grid {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
}

.team-card {
    background: #fdfdfd;
    border: 1px solid #e2e8f0;
    padding: 1rem;
    border-radius: 8px;
    flex: 1;
}

.mini-btn {
    padding: 6px 12px;
    font-size: 0.9rem;
    background-color: #34495e;
    box-shadow: none;
}

.mini-btn:hover {
    background-color: #2c3e50;
}

footer {
    margin-top: auto;
    color: #7f8c8d;
    padding: 2rem;
}
