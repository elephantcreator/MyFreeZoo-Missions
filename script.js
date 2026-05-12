fetch("missions.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("missions-container");

        data.forEach(mission => {
            const card = document.createElement("div");
            card.className = "mission-card";

            card.innerHTML = `
                <h2>${mission.level}</h2>

                <div class="section">
                    <h3>Aufgaben</h3>
                    <ul>
                        ${mission.tasks.map(t => `<li>${t}</li>`).join("")}
                    </ul>
                </div>

                <div class="section">
                    <h3>Belohnung</h3>
                    <ul>
                        ${mission.rewards.map(r => `<li>${r}</li>`).join("")}
                    </ul>
                </div>

                <details class="details-box">
                    <summary>Günstigste Lösung anzeigen</summary>
                    <ul>
                        ${mission.solution.map(s => `<li>${s}</li>`).join("")}
                    </ul>
                </details>
            `;

            container.appendChild(card);
        });
    });
