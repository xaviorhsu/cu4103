// ----------------------------------------------------------------------------------- //
(function($){
  
  var param1=loadStorage_S('vehD1');  vehdata=param1.substring(1,param1.length-1).split(","); //alert(param1);
    //var param1=decodeURI(getUrlVars('vehD1')); var vehdata=param1.substring(1,param1.length-1).split("%2C");
    if(vehdata[1]=='P') { for(var i=12;i>3;i--) {vehdata[i]=vehdata[i-1];} vehdata[i]='';}    
    var str='投保'+((vehdata[5]==1)?' 一 ':' 二 ')+'年期\n'+((vehdata[0]==1)?'【汽車險】':'【機車險】');
    $('#s0td1').text(str);
    
    var param2=loadStorage_S('insD1');  insdata=param2.substring(1,param2.length-1).split(","); //alert(param2);
    //var param2=decodeURI(getUrlVars('insD1')); var insdata=param2.substring(1,param2.length-1).split("%2C");
    {   var insna='';
        for(i=0;i<insdata[0].length;i++) { insna+=insdata[0].substring(i,i+1)+'\n'; }
        $('#s3ins').text(insna);
        if(vehdata[8]==21) {
          var pp1=insdata[1].substring(0,insdata[1].length).split("/");$('#price1').text(pp1[0]+'/'+pp1[1]);
          var total=0; total+=parseInt(pp1[0]); var disc=0; disc+=parseInt(pp1[1]); }
        if(vehdata[9]==48) {
          $('#item2').text('駕駛人傷害險 (駕駛人體傷死亡險200萬/每一人醫療險20萬)');$('#fid21').text('200/20');$('#fid22').text('─');
          var pp2=insdata[2].substring(0,insdata[2].length).split("/");$('#price2').text(pp2[0]+'/'+pp2[1]);
          total+=parseInt(pp2[0]); disc+=parseInt(pp2[1]);
          if(vehdata[10]==33) { var a1=parseInt(vehdata[11])/10000; var a2=parseInt(vehdata[12])/10000;
            $('#item3').text('任意第三人責任險 (每一人/每一事故體傷險'+a1+'/'+parseInt(a1)*2+'萬)(每一事故之財損險'+a2+'萬)');
            $('#fid31').text(a1+'/'+parseInt(a1)*2);$('#fid32').text('─');
            var pp3=insdata[3].substring(0,insdata[3].length).split("/");$('#price3').text(pp3[0]+'/'+pp3[1]);
            total+=parseInt(pp3[0]); disc+=parseInt(pp3[1]);}
          }
        else if(vehdata[9]==33) {  var a1=parseInt(vehdata[10])/10000; var a2=parseInt(vehdata[11])/10000;
           $('#item2').text('任意第三人責任險 (每一人/每一事故體傷險'+a1+'/'+parseInt(a1)*2+'萬)(每一事故之財損險'+a2+'萬)');
           $('#fid21').text(a1+'/'+parseInt(a1)*2);$('#fid22').text('─');
           var pp2=insdata[2].substring(0,insdata[2].length).split("/");$('#price2').text(pp2[0]+'/'+pp2[1]);
           total+=parseInt(pp2[0]); disc+=parseInt(pp2[1]); }
        
        $('#total').text(total+'/'+disc);
        $('#cost').val(total-disc);
        $('#totalcost').text(total-disc);
    } 
  
})(jQuery);
// ----------------------------------------------------------------------------------- //