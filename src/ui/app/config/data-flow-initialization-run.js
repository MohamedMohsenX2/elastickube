function dataFlowInitialization($injector) {
    'ngInject';

    $injector.get('instancesStore');
    $injector.get('namespacesStore');
    $injector.get('principalStore');
    $injector.get('sessionStore');
    $injector.get('usersStore');
}

export default dataFlowInitialization;