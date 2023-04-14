// sidebar toggler start 

let sidebarToggler = document.getElementById('sidebar-toggler').addEventListener('click', openSidebar);

let sidebarCloser = document.getElementById('close-btn').addEventListener('click', closeSidebar);

    let sidebar = document.getElementById('sidebar-menu');
function openSidebar(){
    sidebar.style.transform = 'translateX(0)';
}

function closeSidebar(){
    sidebar.style.transform = 'translateX(-100%)';
}

console.log(sidebarToggler)

// sidebar toggler end 