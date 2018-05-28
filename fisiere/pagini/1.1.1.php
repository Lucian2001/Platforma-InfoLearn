<div id="animation-side">
 <div class="container12">
     <div id="errorPanel"></div>
<p>{{eroare}}</p>
<b>&nbsp&nbsp&nbsp{{textTanc}}</b>
<img ng-src="{{tancComplet}}" width="52%" heigth="52%" style="margin-left:24%;margin-top:7%;z-index:2">

  </div>
</div>


<div class="expl-box-fi2" ng-fi-text="   Pentru a putea să-ți începi aventura învățarii trebuie mai întâi trebuie să-ți creezi un tanc.Trebuie să apeși pe fiecare bloc, punând toate componentele necesare unui tanc. Când ai terminat apasă pe butonul Run."></div>

<style>
    .expl-box-fi2 {
		margin-top: -4.5%;;
            border-style: none;
			height: 25%;
            width:70%;
             text-align: justify;
             margin-left:3%;
            color:black;
         text-indent: 10px;

		}

</style>
<script>
    generareScor(1,8);    
$("#object1").hide();
    $(".imagineComponentaTanc").show();
   timer();
</script>
