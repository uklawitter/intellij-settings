import "${MODULE_PATH}";

describe("${CONTROLLER_NAME}", function () {
  let \$scope, controller;

  beforeEach(angular.mock.module("ionic"));
  beforeEach(angular.mock.module("ui.router"));
  beforeEach(angular.mock.module("${MODULE_NAME}"));

  beforeEach(inject((\$rootScope, \$controller) => {
    \$scope = \$rootScope.\$new();
    controller = \$controller("${CONTROLLER_NAME}", {\$scope: \$scope});
  }));

  it("the test...", function (done) {
    
  });
});