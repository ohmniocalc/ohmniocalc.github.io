function toggleMenu(){const m=document.getElementById("mobileMenu");if(m)m.classList.toggle("open")}
function copyEmail(){navigator.clipboard?.writeText("franciscortegamadrid@gmail.com").then(()=>{const b=document.getElementById("copyEmailBtn");if(b){const old=b.textContent;b.textContent="Copiado";setTimeout(()=>b.textContent=old,1300)}})}
function buildMail(){
  const name=document.getElementById("name")?.value.trim()||"";
  const company=document.getElementById("company")?.value.trim()||"";
  const email=document.getElementById("email")?.value.trim()||"";
  const phone=document.getElementById("phone")?.value.trim()||"";
  const msg=document.getElementById("message")?.value.trim()||"";
  const subject=encodeURIComponent("Consulta · apoyo de oficina técnica eléctrica");
  const body=[
    "Hola Francisco,",
    "",
    "Soy "+(name||"[nombre]")+(company?" de "+company:"")+".",
    "",
    "Te escribo por este trabajo/pendiente:",
    msg||"[describe brevemente qué necesitas]",
    "",
    email?"Email de contacto: "+email:"",
    phone?"Teléfono: "+phone:"",
    "",
    "Gracias."
  ].filter((x,i,a)=>!(x===""&&a[i-1]==="")).join("\n");
  window.location.href="mailto:franciscortegamadrid@gmail.com?subject="+subject+"&body="+encodeURIComponent(body);
}
function printSamples(){window.print()}
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-current]").forEach(el=>{
    const page=location.pathname.split("/").pop()||"index.html";
    if(el.getAttribute("href")===page)el.style.color="var(--green)";
  });
});