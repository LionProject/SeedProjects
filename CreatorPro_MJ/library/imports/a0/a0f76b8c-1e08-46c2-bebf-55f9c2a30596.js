cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {},
    GetRandomNum: function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return Min + Math.round(Rand * Range);
    }
});

// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },
module.exports = {
    GetRandomNum: function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return Min + Math.round(Rand * Range);
    },
    loadRes: function loadRes(pathAndName, callback) {
        cc.loader.loadRes(pathAndName, function (err, spriteFrame) {
            if (err) {
                console.log('cc.loader.loadRes error : Path : pathAndName : =' + err);
            } else {
                callback(spriteFrame);
            }
        });
    },
    fix: function fix(num, length) {
        return ('' + num).length < length ? (new Array(length + 1).join('0') + num).slice(-length) : '' + num;
    }

};