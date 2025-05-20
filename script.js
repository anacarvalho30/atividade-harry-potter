document.addEventListener("DOMContentLoaded", () => {
    
    alert("⚡ Bem-vindo(a) à Hogwarts! Sua jornada mágica começa agora.");
  

    const eventLog = document.getElementById("eventLog");
    const clearLogBtn = document.getElementById("clearLog");
  
    function logEvent(msg) {
      const div = document.createElement("div");
      div.textContent = msg;
      eventLog.appendChild(div);
    }
  
    clearLogBtn.addEventListener("click", () => {
      eventLog.innerHTML = "";
    });
  
    window.addEventListener("resize", () => {
      logEvent("📐 Janela redimensionada em " + new Date().toLocaleTimeString());
    });
  
    
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        const icon = document.createElement("i");
        icon.className = "fas fa-check";
        li.appendChild(icon);
  
        taskList.appendChild(li);
        taskInput.value = "";
  
        logEvent("🧪 Poção adicionada: " + taskText);
      }
    });
  
    
    const clickBtn = document.getElementById("clickBtn");
    const dblclickBtn = document.getElementById("dblclickBtn");
  
    clickBtn.addEventListener("click", () => {
      alert("🖱️ Clique simples detectado!");
      logEvent("🖱️ Clique simples");
    });
  
    dblclickBtn.addEventListener("dblclick", () => {
      alert("✨ Duplo clique mágico!");
      logEvent("✨ Duplo clique");
    });
  

    const keyboardInput = document.getElementById("keyboardInput");
    const keyLog = document.getElementById("keyLog");
  
    keyboardInput.addEventListener("keydown", (e) => {
      keyLog.textContent = `🔤 Tecla pressionada: ${e.key}`;
      logEvent(`🔤 Tecla pressionada: ${e.key}`);
    });
  });
 
const mouseArea = document.getElementById("mouseArea");
const sparkle = mouseArea.querySelector(".sparkle");

mouseArea.addEventListener("mouseover", () => {
  sparkle.style.opacity = "1";
  logEvent("✨ A varinha foi posicionada sobre a área mágica.");
});

mouseArea.addEventListener("mouseout", () => {
  sparkle.style.opacity = "0";
  logEvent("🔚 A varinha foi retirada da área mágica.");
});

mouseArea.addEventListener("mousemove", (e) => {
  const rect = mouseArea.getBoundingClientRect();
  sparkle.style.left = (e.clientX - rect.left - 5) + "px";
  sparkle.style.top = (e.clientY - rect.top - 5) + "px";
});
