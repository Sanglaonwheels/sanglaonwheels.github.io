/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:#0f172a;
    color:#fff;
    line-height:1.6;
}

/* Navbar */

.navbar{
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8%;
    background:rgba(0,0,0,.45);
    backdrop-filter:blur(12px);
    z-index:1000;
}

.logo{
    color:#FFD700;
    font-size:28px;
    font-weight:700;
}

.navbar ul{
    display:flex;
    list-style:none;
}

.navbar ul li{
    margin-left:30px;
}

.navbar ul li a{
    color:#fff;
    text-decoration:none;
    transition:.3s;
}

.navbar ul li a:hover{
    color:#FFD700;
}

/* Hero */

.hero{
    height:100vh;
    background:
    linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
    url("images/hero.jpg") center/cover no-repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
}

.hero-content h1{
    font-size:60px;
    margin-bottom:20px;
}

.hero-content p{
    font-size:22px;
    margin-bottom:35px;
}

/* Buttons */

.btn,
.btn2{
    display:inline-block;
    margin:10px;
    padding:15px 35px;
    border-radius:50px;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

.btn{
    background:#FFD700;
    color:#000;
}

.btn:hover{
    transform:translateY(-5px);
}

.btn2{
    background:#25D366;
    color:#fff;
}

.btn2:hover{
    transform:translateY(-5px);
}

/* Services */

.services{
    padding:90px 8%;
    background:#111827;
}

.services h2{
    text-align:center;
    color:#FFD700;
    margin-bottom:40px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:#1f2937;
    border-radius:18px;
    padding:30px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
    box-shadow:0 12px 30px rgba(255,215,0,.25);
}

.card h3{
    color:#FFD700;
    margin-bottom:15px;
}

/* Fleet */

.fleet{
    padding:90px 8%;
    background:#0f172a;
}

.fleet h2{
    text-align:center;
    color:#FFD700;
    margin-bottom:40px;
}

.fleet-box{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.vehicle{
    background:#1e293b;
    border-radius:20px;
    overflow:hidden;
    transition:.3s;
}

.vehicle img{
    width:100%;
    height:240px;
    object-fit:cover;
}

.vehicle h3{
    color:#FFD700;
    padding:15px;
}

.vehicle p{
    padding:0 15px 20px;
}

.vehicle:hover{
    transform:scale(1.03);
}
