var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var navbar_component_1 = require('./components/ui/navbar/navbar.component');
var banner_component_1 = require('./components/ui/banner/banner.component');
var AngularAppReferenceAppComponent = (function () {
    function AngularAppReferenceAppComponent() {
    }
    AngularAppReferenceAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular-app-reference-app',
            templateUrl: 'angular-app-reference.component.html',
            styleUrls: ['angular-app-reference.component.css'],
            directives: [navbar_component_1.NavBarComponent, banner_component_1.BannerComponent, HomeComponent, AboutComponent]
        })
    ], AngularAppReferenceAppComponent);
    return AngularAppReferenceAppComponent;
})();
exports.AngularAppReferenceAppComponent = AngularAppReferenceAppComponent;
