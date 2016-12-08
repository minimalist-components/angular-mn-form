angular
  .module('mn-form')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'E',
    link,
  }

  function link(scope, element, attributes) {
    const form = element.find('form')
    const formName = form.attr('name')

    if (attributes.submit) {
      form.bind('submit', () => {
        const valid = scope[formName].$valid

        if (valid) {
          scope.$eval(attributes.submit)
        }
      })
    }
  }
}
