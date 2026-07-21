/* Animation */

.hidden{
opacity:0;
transform:translateY(60px);
transition:1s;
}

.show{
opacity:1;
transform:translateY(0);
}

/* Top Button */

#topBtn{
position:fixed;
right:30px;
bottom:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#d4af37;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.3);
}

/* WhatsApp */

#whatsappBtn{
position:fixed;
left:30px;
bottom:30px;
width:65px;
height:65px;
background:#25D366;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:34px;
text-decoration:none;
color:white;
box-shadow:0 10px 25px rgba(0,0,0,.4);
z-index:999;
transition:.3s;
}

#whatsappBtn:hover{
transform:scale(1.1);
}
