window.addEventListener('mousemove', function(e) {

if (document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;

     var innerTextx = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;
    
    var hoverText2 = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent;
    
    var hoverText1 = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3)").textContent;
    
   var figtop = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-cumulative-vacc > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
        
   document.querySelector("#tooltip-box-cumulative-vacc").style.left = ((leftx+ widthx/2+ window.scrollX-180/2).toString()).concat("px");
   document.querySelector("#tooltip-box-cumulative-vacc").style.top = ((figtop+window.scrollY-96).toString()).concat("px");
    
   document.querySelector("#vertical-line-cumulative-vacc").style.left = ((leftx+ widthx/2+ window.scrollX).toString()).concat("px");
   document.querySelector("#vertical-line-cumulative-vacc").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-cumulative-vacc").style.height = ((figheight).toString()).concat("px");
    
    document.querySelector("#tooltip-box-cumulative-vacc").innerHTML = 
        
        "<div>" + 
        "<span style='font-size: 14px;'>" +
          innerTextx + 
        "</span>" +
         "<br>" +
         "<strong style='font-size: 16px; color: rgb(85, 170, 0);'>" + 
           hoverText1 +  " vaccinated" +
         "</strong>" +
         "<br>" + 
         "<span style='font-size: 14px;'>" + "per 100 inhabitants" +
         "</span>" +
         "<br>" + 
         "<span style='font-size: 14px;'>" + "out of which" +
         "</span>" +
          "<br>" + 
         "<strong style='font-size: 16px; color: rgb(21, 167, 166);'>"  + 
           hoverText2 + " fully vaccinated" + 
           "</strong>"
        "</div>"
        
        ;
   
   document.querySelector("#tooltip-box-cumulative-vacc").style.display = "block";
   document.querySelector("#vertical-line-cumulative-vacc").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-cumulative-vacc").style.display = "none";
   document.querySelector("#vertical-line-cumulative-vacc").style.display = "none";

}
});



window.addEventListener('mousemove', function(e) {

if (document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;

     var innerTextx = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;
    
   var figtop = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
        
   document.querySelector("#tooltip-box-daily-vacc").style.left = ((leftx+ widthx/2+ window.scrollX-250/2).toString()).concat("px");
   document.querySelector("#tooltip-box-daily-vacc").style.top = ((figtop+window.scrollY-96).toString()).concat("px");
    
   document.querySelector("#vertical-line-daily-vacc").style.left = ((leftx+ widthx/2+ window.scrollX).toString()).concat("px");
   document.querySelector("#vertical-line-daily-vacc").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-daily-vacc").style.height = ((figheight).toString()).concat("px");
    
     var hoverText1 = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent;
    
    var hoverText2 = document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3)").textContent;
    
    var hoverval1 = parseInt((document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent).replace(/,/, '')); 
    
    var hoverval2 = parseInt((document.querySelector("#figure-daily-vacc > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3)").textContent).replace(/,/, '')); 
 
    
    document.querySelector("#tooltip-box-daily-vacc").innerHTML = 
        
        "<div>" + 
        "<span style='font-size: 14px;'>" +
          innerTextx + 
        "</span>" +
         "<br>" +
         "<strong style='font-size: 16px;'>" + (hoverval1+hoverval2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 
         "</strong>" +
           "<span>"  + 
          " total vaccinations" + 
              "</span>" + 
         "<br>" + 
         "<span style='font-size: 14px;'>" + "comprising of" +
         "</span>" +
         "<br>" + 
         "<span style='color: rgb(85, 170, 0);'>" +  
          "<strong style='font-size: 16px;'>" +
           hoverText2 +
         "</strong>" + "<span>" + " first vaccinations" + 
           "</span></span>" + 
               "<br>" + 
              " <span style='color: rgb(21, 167, 166);'>" + 
                   "<strong style='font-size: 16px;'>" + 
                       hoverText1  + 
         "</strong><span>" + " complete vaccinations" + 
         "</span></span></div>"
        ;
       
   
   document.querySelector("#tooltip-box-daily-vacc").style.display = "block";
   document.querySelector("#vertical-line-daily-vacc").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-daily-vacc").style.display = "none";
   document.querySelector("#vertical-line-daily-vacc").style.display = "none";

}
});



window.addEventListener('mousemove', function(e) {

if (document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;
    
    var innerTextx = document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;

    
   var figtop = document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
        
   document.querySelector("#tooltip-box-icu").style.left = ((leftx+ widthx/2 + window.scrollX-284/2-1).toString()).concat("px");
   document.querySelector("#tooltip-box-icu").style.top = ((figtop+window.scrollY-82).toString()).concat("px");
    
   document.querySelector("#vertical-line-icu").style.left = ((leftx+ widthx/2 + window.scrollX-1).toString()).concat("px");
   document.querySelector("#vertical-line-icu").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-icu").style.height = ((figheight).toString()).concat("px");
    
   var bedsCovid19 =  parseInt((document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent).replace(/,/, '')); 
    
    var bedsNonCovid19 = parseInt((document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3)").textContent).replace(/,/, ''));
        
        
    var bedsFree = parseInt((document.querySelector("#figure-icu > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(4)").textContent).replace(/,/, ''));
    
    var totalBeds = bedsCovid19 + bedsFree + bedsNonCovid19;
    
    var percentCovid = Math.round(bedsCovid19/totalBeds * 100);
    
     var percentNonCovid = Math.round(bedsNonCovid19/totalBeds * 100);
    
     var percentFree = Math.round(bedsFree/totalBeds * 100);
    
  
    document.querySelector("#tooltip-box-icu").innerHTML =  
        
        
        "<div>" +
        "<span style='font-size: 14px;'>" + innerTextx +  "</span>" + 
        "<br>" + 
        "<span style='color: rgb(90, 94, 200); font-size: 14px;'>" + 
        "<strong style='font-size: 16px;'>" + percentCovid + '%' + "</strong>" + 
        "<span>" + " COVID-19 patients" + "</span>" + 
        "<span>" + ' (' + (bedsCovid19).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +  ')' +  "</span>" + 
        "</span>" + 
        "<br>" + 
        "<span style='color: rgb(68, 68, 76); font-size: 14px;'>" + 
        "<strong style='font-size: 16px;'>" + percentNonCovid + '%' + "</strong>" + 
        "<span>" +  " patients without COVID-19" +  "</span>" + 
        "<span>" + ' (' +  (bedsNonCovid19).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +  ')' + "</span>" + 
        "</span>" + 
        "<br>" + 
        "<span style='color: rgb(105, 105, 108); font-size: 14px;'>" + 
        "<strong style='font-size: 16px;'>" + percentFree + '%' + "</strong>" + 
        "<span>" +  " free ICU beds" + "</span>" + 
        "<span>" + ' (' + (bedsFree).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ')' + "</span></span>" +
        "</div>"
      ;
       
   
   document.querySelector("#tooltip-box-icu").style.display = "block";
   document.querySelector("#vertical-line-icu").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-icu").style.display = "none";
   document.querySelector("#vertical-line-icu").style.display = "none";

}
});


window.addEventListener('mousemove', function(e) {

if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text") != null &&
    document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text").textContent == "Daily deaths ") {    
    
if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;

     var innerTextx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;
    
    var hoverText = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent;
    
    
   var figtop = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
   document.querySelector("#tooltip-box-cases").style.width = "170px";
   document.querySelector("#tooltip-box-cases").style.height = "48px";
   document.querySelector("#tooltip-box-cases").style.left = ((e.x+ window.scrollX-170/2).toString()).concat("px");
   document.querySelector("#tooltip-box-cases").style.top = ((figtop+window.scrollY-48).toString()).concat("px");
    
   document.querySelector("#vertical-line-cases").style.left = ((e.x + window.scrollX).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.height = ((figheight).toString()).concat("px");
    
     document.querySelector("#tooltip-box-cases").innerHTML = 
         "<div>" + 
         "<span style='font-size: 14px;'>" + innerTextx +
         "<span>" + 
         "<br>" + 
          "<strong style='color: rgba(51, 51, 60, 1); font-size: 16px;'>" + hoverText +  " deaths" + 
         "</strong>" +
         "</div>"
   
   document.querySelector("#tooltip-box-cases").style.display = "block";
   document.querySelector("#vertical-line-cases").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-cases").style.display = "none";
   document.querySelector("#vertical-line-cases").style.display = "none";

}    
}
    
else if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text") != null &&
         document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text").textContent == "Daily Confirmed Cases ") {
         
         if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;

     var innerTextx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;
    
    var hoverText1 = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent;
    
    var hoverText2 = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3)").textContent;
    
    
   var figtop = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
        
   document.querySelector("#tooltip-box-cases").style.width = "170px";
   document.querySelector("#tooltip-box-cases").style.height = "84px";
   document.querySelector("#tooltip-box-cases").style.left = ((e.x+ window.scrollX-170/2).toString()).concat("px");
   document.querySelector("#tooltip-box-cases").style.top = ((figtop+window.scrollY-84).toString()).concat("px");
    
   document.querySelector("#vertical-line-cases").style.left = ((e.x + window.scrollX).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.height = ((figheight).toString()).concat("px");
    
     document.querySelector("#tooltip-box-cases").innerHTML = 
         "<div>"+
         "<span style='font-size: 14px;'>" +
             innerTextx +
         "</span>" +
         "<br>" +
         "<strong style='font-size: 16px; color: rgb(158, 61, 112);'>"+
          hoverText2 + " new infections" + 
          "</strong>" +
          "<div style='padding-bottom: 4px;'>" +
           "</div>" +
          "<span style='font-size: 14px;'>" + 
          "<span>" + hoverText1 + " per 100,000" + 
           "</span>" + 
           "<br>" +
           "<span>" + "inhabitants / 7 days" + 
           "</span></span></div>";
    
   
   document.querySelector("#tooltip-box-cases").style.display = "block";
   document.querySelector("#vertical-line-cases").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-cases").style.display = "none";
   document.querySelector("#vertical-line-cases").style.display = "none";

}
         
         }
    
else if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text") != null && 
         document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(3) > g.infolayer > g.g-gtitle > text").textContent == "Confirmed new cases in the last 7 days  per 100,000 inhabitants ") {
         
         
   if (document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext") != null) 
{
   var leftx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().left;
    
   var widthx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").getBoundingClientRect().width;

     var innerTextx = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g.axistext").textContent;
    
    var hoverText1 = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(2)").textContent;
    
    var hoverText2 = (parseFloat(document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(5) > g > g:nth-child(3) > text").textContent)).toFixed(6);
    
    
    
   var figtop = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().top;
    
     var figheight = document.querySelector("#figure-cases > div.js-plotly-plot > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-pointer").getBoundingClientRect().height;
    
        
   document.querySelector("#tooltip-box-cases").style.width = "170px";
   document.querySelector("#tooltip-box-cases").style.height = "82px";
   document.querySelector("#tooltip-box-cases").style.left = ((e.x+ window.scrollX-170/2).toString()).concat("px");
   document.querySelector("#tooltip-box-cases").style.top = ((figtop+window.scrollY-82).toString()).concat("px");
    
   document.querySelector("#vertical-line-cases").style.left = ((e.x + window.scrollX).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.top = ((figtop+window.scrollY).toString()).concat("px");
   document.querySelector("#vertical-line-cases").style.height = ((figheight).toString()).concat("px");
    
     document.querySelector("#tooltip-box-cases").innerHTML =  "<div>" + 
   "<span style='font-size: 14px;'>" +  innerTextx + "</span>" + 
   "<br>" + 
   "<strong style='font-size: 16px;'>" +  hoverText1 + 
   "</strong><div style='padding-bottom: 4px;'></div>" + 
   "<span style='font-size: 14px;'>" + 
   "<span>" + Math.round(hoverText2*100000) +  " new infections" +  
   "</span><br><span>" +   "on this day" +  "</span></span> </div>";
       
   
   document.querySelector("#tooltip-box-cases").style.display = "block";
   document.querySelector("#vertical-line-cases").style.display = "block";
    

}
else 
{
   document.querySelector("#tooltip-box-cases").style.display = "none";
   document.querySelector("#vertical-line-cases").style.display = "none";

}      
 
         
         
}
});
