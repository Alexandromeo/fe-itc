let kanvas = document.querySelector(".kanvas");

let primary = document.querySelector("#primary");
let success = document.querySelector("#success");
let danger = document.querySelector("#danger");
let warning = document.querySelector("#warning");
let info = document.querySelector("#info");

primary.addEventListener("click", function()
{
    kanvas.setAttribute("class","bg-primary navbar-nav sidebar sidebar-dark accordion kanvas");
});

success.addEventListener("click", function()
{
    kanvas.setAttribute("class","bg-success navbar-nav sidebar sidebar-dark accordion kanvas");
});

danger.addEventListener("click", function()
{
    kanvas.setAttribute("class","bg-danger navbar-nav sidebar sidebar-dark accordion kanvas");
});

warning.addEventListener("click", function()
{
    kanvas.setAttribute("class","bg-warning navbar-nav sidebar sidebar-dark accordion kanvas");
});

info.addEventListener("click", function()
{
    kanvas.setAttribute("class","bg-info navbar-nav sidebar sidebar-dark accordion kanvas");
});