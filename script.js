new Vue({
    el: '#vue_app',
    data: {
        name: 'shawn',
        website: 'www.skynet4.wapka.mobi',
        score: 25,
        anchorTag: '<a href="www.sentinel.ng">Goto</a>',
        x: 0,
        y: 0,
        design: false, 
        action: false
    },
    methods: {
        add: function(){
            this.score++;
        },
        sub: function(){
            this.score--;
        },
        addFive: function(chk){
            this.score += chk;
        },
        subFive: function(chk){
            this.score -= chk;
        },
        updateXY: function(event){
            this.x = event.offsetX,
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked me jerk!!')
        },
        keyboardEvent: function(){
            alert('is working...')
        }
    },
    computed: {
        compClasses: function(){
            return {
                addColor: this.design,
                disappear: this.action
            } 
        }
    }
});