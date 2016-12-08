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
      const form = element.find('form')

      form.bind('submit', () => {
        const valid = scope[attributes.name].$valid

        if (valid) {
          scope.$eval(attributes.submit)
        }
      })
    }
  }
}
