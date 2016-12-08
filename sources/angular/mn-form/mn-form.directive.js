angular
  .module('mn-form')
  .directive('mnForm', MnFormDirective)

function MnFormDirective($compile) {
  return {
    restrict: 'E',
    link,
  }

  function link(scope, element, attributes) {
    const form = element.find('form')
    const instanceIndex = Array.from(document.querySelectorAll('mn-form')).indexOf(element[0])

    const formName = form.attr('name') || `form${instanceIndex}`
    form.attr('name', formName)
    $compile(form)(scope)

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
