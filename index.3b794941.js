document.querySelectorAll(".tree li").forEach(function(e){var t=Array.from(e.childNodes).find(function(e){return e.nodeType===Node.TEXT_NODE}),n=document.createElement("span");n.textContent=t.textContent.trim(),t.replaceWith(n),e.querySelector("span").addEventListener("click",function(t){t.stopPropagation();var n=e.querySelector("ul");n&&(n.style.display="none"===n.style.display?"block":"none")})});
//# sourceMappingURL=index.3b794941.js.map
