document.querySelectorAll('.grid div').forEach(x=>{x.onmouseenter=()=>x.style.transform='translateY(-6px)';x.onmouseleave=()=>x.style.transform='translateY(0)';});
