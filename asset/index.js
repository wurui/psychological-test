define([], function () {
    var getAllList = function ($ctx) {

        var totalCount= 1,
            val=0;
        $('li', $ctx).each(function (i, n) {
            var len=$('input[type=radio]', n).each(function (j, m) {

                if(m.checked){
                    val+= j * totalCount ;
                }
            }).length;
            totalCount=len * totalCount;

        });
        return {
            total:totalCount,
            value:val
        };
    };
    return {
   
        init: function ($mod) {
            var $cnt = $('.J_Content', $mod),
                count = $cnt.attr('data-count') - 0,

                allResult = [];
            $('.J_results>[type=hidden]').each(function (i, n) {console.log(i,n)
                allResult.push({
                    value: n.value,
                    text: n.getAttribute('text')
                })
            })

            $mod.on('change', function (e) {

                var on = $cnt.attr('data-on') - 0;
                //console.log(on,count);
                if (on >= count) {
                    //that.getResult();
                    var resultData=getAllList($cnt);

                    var result=allResult[resultData.value%allResult.length];
                    //console.log('result',resultData,result);
                    $('.J_Result',$mod).html('<p>你在金庸小说里的角色是:<big>'+result.value+'</big></p><p>'+result.text+'</p>')
                } else {
                    $cnt.attr('data-on', on + 1)
                }

            });
        }
    }
})
