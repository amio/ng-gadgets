'use strict';

angular.module('NGGadgets', [])
.directive('demo', function () {
  return {
    restrict: 'A',
    link: function ($scope, $el) {
      var codes = $el.html();
      // Outdent TODO: Outdent for multiline
      codes = codes.replace(/\n\s+/, '\n');

      var codeEl = angular.element('<pre class="code code-html"></pre>').text(codes);
      $el[0].parentNode.insertBefore(codeEl[0], $el[0].nextSibling);
    }
  }
});
