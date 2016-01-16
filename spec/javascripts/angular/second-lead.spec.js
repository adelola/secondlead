describe('Second Lead: Configuration', function () {

    beforeEach(module('secondLead'))

    describe('Dramas Route', function () {

        var $state,
            $rootScope,
            state = 'dramas';

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
            expect($state.href(state)).toEqual('#/dramas');
        })
    });
});