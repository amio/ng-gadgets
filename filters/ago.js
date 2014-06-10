'use strict';

angular.module('NGGadgets')

/**
 * 将具体时间格式化为 'xxx 天前' 等等
 */

.filter('ago', function () {
  return function (input) {

    var date = new Date(input);
    var seconds = Math.floor((new Date() - date) / 1000);

    var intervals = {
      '年': 31536000,
      '月': 2592000,
      '天': 86400,
      '小时': 3600,
      '分钟': 60,
      '秒': 1
    };

    var counter;
    for (var intv in intervals) {
      if(intervals.hasOwnProperty(intv)){
        counter = Math.floor(seconds / intervals[intv]);
        if (counter > 0) {
          return counter + ' ' + intv + '前';
        }
      }
    }

  };
});