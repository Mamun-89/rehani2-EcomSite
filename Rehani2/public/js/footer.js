const createFooter=()=>{
    let footer=document.querySelector("footer");
    footer.innerHTML=`
    <div class="footer-container">
    <div class="footer-logo">
        <h2>Rehani..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam culpa quos quisquam ipsam obcaecati, ea labore libero cumque enim?</p>
        
    </div>
    <div class="links">
        <h2>links</h2>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">gallery</a></li>
    </div>
    <div class="category">
        <h2>category</h2>
        <li><a href="#">cloths</a></li>
        <li><a href="#">grocery</a></li>
        <li><a href="#">electronics</a></li>
        <li><a href="#">sports</a></li>
        <li><a href="#">accessories</a></li>
    </div>
    <div class="outlet-info">
        <h2>Our outlet</h2>
        <p>198 west street</p>
        <p>toronto</p>
        <p>canada</p>
    </div>
</div>
<div class="social-links">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-google-plus-g"></i></a>
</div>
    `;
};

createFooter();