describe('Unit: Drama', function () {

 
    // Suite for testing an individual piece of our feature.
    describe('Drama Route', function () {

        // Instantiate global variables (global to all tests in this describe block).
        var $state,
            $rootScope,
            state = 'dramatest';

        // Inject dependencies
        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('dramas-index.html', '');
        }));

        it('verifies state configuration', function () {
            var config = $state.get(state);
            expect(config.abstract).toBeTruthy();
            expect(config.url).toBeUndefined();
        });

        it('should respond to URL', function(){
            expect($state.href(state)).toEqual('#/dramatest');
        })
    });
});