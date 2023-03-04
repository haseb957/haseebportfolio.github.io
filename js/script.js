function toggleClick(val,menu){
    $(menu).toggleClass('toggleLeftSlide')
    $(val).find('span').toggleClass('active');
}

(()=> {
    const circleObj = {
        id: ['circles-html','circles-javascript', 'circles-css', 'circles-php', 'circles-wordpress', 'circles-jquery', 'circles-angular', 'circles-react' ],
        value: [90,89,80,50,95,70,50,95]
    }
    for(let i = 0; i <= 8; i++){
        Circles.create({
            id: circleObj.id[i],
            radius: 60,
            value: circleObj.value[i],
            maxValue: 100,
            width: 10,
            text: function (value) { return value + '%'; },
            colors: ['#252525', '#FFB400'],
            duration: 3000,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });
        
    }
})()
function sectionToggle(val){
    $('[data-section]').removeClass('active');
    $(val).addClass('active');
}