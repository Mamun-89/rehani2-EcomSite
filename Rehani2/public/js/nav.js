const createNav=()=>{
    let nav=document.querySelector(".navbar");
    nav.innerHTML=`
    <div class="nav">
    <div class="contact">
    <li class="contact-item"><i class="fas fa-phone-alt icon"></i>+0123456789</li>
    <li class="contact-item"><i class="fas fa-envelope icon"></i>contact@example.com</li>
    </div>
    <div class="search-area">
        <input type="text" name="" id="" class="search-box" placeholder="Search here...">
        <button class="search-btn"><i class="fas fa-search"></i></button>
    </div>
    <div class="admin">
    <li class="user"><i class="fas fa-user icon"></i></li>
    <li class="cart"><i class="fas fa-shopping-cart icon"></i></li>
    </div>
</div>
<div class="navigation">
    <div class="brand-logo">
        <p>Rehani..</p>
    </div>
    <div class="main-menu">

        <div class="mobile-menu">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>
        <ul class="menuList">
            <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#">Product</a></li>
            <li class="menu-item"><a href="#">Popular Item</a></li>
            <li class="menu-item"><a href="#">About</a></li>
            <li class="menu-item"><a href="#">Shipping</a></li>
        </ul>
    </div>
</div>
    `;
}

createNav();

const mobileMenu=document.querySelector(".mobile-menu");
const menuList=document.querySelector(".menuList");


mobileMenu.addEventListener("click",()=>{
    menuList.classList.toggle("change");
});