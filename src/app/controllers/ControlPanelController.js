(function () {

    angular
        .module('app')
        .controller('ControlPanelController', [
            '$mdDialog', '$interval',
            ControlPanelController
        ]);

    function ControlPanelController($mdDialog, $interval) {
        var vm = this;

        vm.buttonEnabled = false;
        vm.showProgress = false;
        vm.reloadServer = 'Aversed';
        vm.performProgress = performProgress;
        vm.determinateValue = 10;

        function performProgress() {
            vm.showProgress = true;
            interval = $interval(function() {
                vm.determinateValue += 1;
                if (vm.determinateValue > 100) {
                    vm.determinateValue = 10;
                    vm.showProgress = false;
                    showAlert();
                    $interval.cancel(interval)
                }
            }, 50, 0, true);
        }

        function showAlert() {
            alert = $mdDialog.alert({
                title: 'Sucessfully Changed!',
                content: "Risk Settings:"+ vm.reloadServer,
                ok: 'Close'
            });
            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }
    }

})();
