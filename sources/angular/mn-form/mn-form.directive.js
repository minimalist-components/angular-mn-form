angular
  .module('mn-form')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'E',
    link,
  }

  function link(scope, element, attributes) {
    if (attributes.submit) {
      element[0].onSubmit = function() {
        scope.$eval(attributes.submit)
      }
    }

    scope.$watch(() => element.attr('disabled'), value => {
      if (value === 'disabled') {
        element[0].setDisabledOrReadOnly()
      }
    })

    scope.$watch(() => element.attr('readonly'), value => {
      if (value === 'readonly') {
        element[0].setDisabledOrReadOnly()
      }
    })
  }
}
