document.addEventListener("DOMContentLoaded", () => {
    // Referenzen zu den Zeigern
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
  
    /**
     * Setzt die aktuelle Zeit für die Uhr.
     */
    function setDate() {
      const now = new Date();
  
      // Seconds
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90; // Offset für Design
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
      // Minutues
      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
      // Hours
      const hours = now.getHours();
      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
  
    // Uhrzeit jede Sekunde aktualisieren
    setInterval(setDate, 1000);
    setDate(); // Initiale Zeigerposition setzen
  });
  