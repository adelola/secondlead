describe('Unit: Drama', function () {

    // Include Modules
    beforeEach(module('myApp'));
    beforeEach(module('myApp.drama'));
    beforeEach(module('ui.router'));

    // Suite for testing an individual piece of our feature.
    describe('Drama Route', function () {

        // Instantiate global variables (global to all tests in this describe block).
        var $state,
            $rootScope,
            state = 'app';

        // Inject dependencies
        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/assets/javascripts/angular/dramas/drama.tmpl.html', '');
        }));

        // It block (or "spec") to test expectations for the
        // Expectations return true or false.
        it('verifies state configuration', function () {
            var config = $state.get(state);
            expect(config.abstract).toBeTruthy();
            expect(config.url).toBeUndefined();
        });
    });
});