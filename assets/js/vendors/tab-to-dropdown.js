document.addEventListener("DOMContentLoaded",function(){var t,e,o=document.querySelector(".tabs-to-dropdown");function n(t){t=t.target.closest(".dropdown");const e=t.querySelector(".dropdown-toggle").textContent.trim();t.querySelectorAll(".dropdown-menu a").forEach(function(t){t.textContent.trim()===e?t.classList.add("d-none"):t.classList.remove("d-none")})}function r(t){t.preventDefault();var t=t.target,e=t.getAttribute("data-index"),o=t.textContent.trim(),t=t.closest(".dropdown");t.querySelector(".dropdown-toggle").textContent=o,t.closest(".tabs-to-dropdown").querySelector(`.nav-pills li:nth-child(${parseInt(e)+1}) a`).click()}function d(t){var t=t.target,e=[...t.parentNode.children].indexOf(t),t=t.closest(".tabs-to-dropdown"),o=t.querySelectorAll(".dropdown-menu a");t.querySelector(".dropdown-toggle").textContent=o[e].textContent}e=`
        <div class="dropdown d-lg-none mb-4 ">
          <button class="btn btn-light w-100 d-flex justify-content-between dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${(e=(t=o).querySelector(".nav-line-bottom")).querySelector("li:first-child a").textContent.trim()}
          </button>
          <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
            ${function(t){let o="";return t.forEach(function(t,e){t=t.querySelector("a").textContent.trim();o+=`<a class="dropdown-item" href="#!" data-index="${e}">${t}</a>`}),o}(e.querySelectorAll("li"))}
          </div>
        </div>
      `,t.insertAdjacentHTML("afterbegin",e),o.querySelectorAll(".dropdown").forEach(function(t){t.addEventListener("show.bs.dropdown",n),t.querySelectorAll(".dropdown-menu a").forEach(function(t){t.addEventListener("click",r)})}),o.querySelectorAll('a[data-bs-toggle="pill"]').forEach(function(t){t.addEventListener("shown.bs.tab",d)})});