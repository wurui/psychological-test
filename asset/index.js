define([], function () {
    var getAllList = function ($ctx) {

        var totalCount = 1,
            val = 0;
        $('li', $ctx).each(function (i, n) {
            var len = $('input[type=radio]', n).each(function (j, m) {

                if (m.checked) {
                    val += j * totalCount;
                }
            }).length;
            totalCount = len * totalCount;

        });
        return {
            total: totalCount,
            value: val
        };
    };
    return {

        init: function ($mod) {
            var $cnt = $('.J_Content', $mod),
                count = $cnt.attr('data-count') - 0,
                checkedCount= 0,

                allResult = [];
            $('.J_results>[type=hidden]',$mod).each(function (i, n) {
                allResult.push({
                    value: n.value,
                    text: n.getAttribute('text')
                })
            });

            $('.J_ScrollWindow',$mod).on('touchstart swipeUp swipeDown',function(e){

                var on = $cnt.attr('data-on') - 0;

                switch (e.type){
                    case 'swipeUp':
                        on=Math.min(checkedCount+1,++on);

                        break
                    case 'swipeDown':
                        on=Math.max(1,--on);
                        break
                    case 'touchstart':
                        var tagname=e.target.tagName.toLowerCase();
                        if(tagname=='p'||tagname=='h3'||tagname=='li'){
                            e.preventDefault()
                        }

                        break
                }
                $cnt.attr('data-on', on )

                //return false

            })


            $mod.on('change', function (e) {

                var on = $cnt.attr('data-on') - 0;
                //console.log(on,count);
                checkedCount=Math.max(checkedCount,on);
                //console.log('checkedCount=',checkedCount)
                if (on >= count) {
                    //that.getResult();
                    var resultData = getAllList($cnt);

                    var result = allResult[resultData.value % allResult.length];
                    //console.log('result',resultData,result);
                    $('.J_Result', $mod).html('<p>结果是:<big>' + result.value + '</big></p><p>' + result.text + '</p>')
                } else {
                    $cnt.attr('data-on', on + 1);

                }


            });
        }
    }
})
