app.controller('listCtrl', function() {
    'use strict'

    var vm = this;

    vm.rmItem = rmItemFn;
    vm.edItem = edItemFn;
    vm.attItem = attItemFn;
    vm.cancel = cancelFn;
    vm.addItem = addItemFn;
    vm.toggleModal = toggleModalFn;

    vm.getIndex = null;
    vm.list = [
        {
            'tarefa': 'Testar a nova API',
            'criado': '2016-01-09T02:06:59.149Z'
        }
    ];

    function addItemFn(){

        if(vm.newItem){
            vm.list.push({
                tarefa: vm.newItem,
                criado: new Date()
            });
            vm.newItem = undefined;
        }

    };

    function toggleModalFn(){
        vm.showModal = !vm.showModal;
    };

    // Apagar veiculo
    function rmItemFn(title, index) {
        vm.toggleModal();
        vm.list.splice(index, 1);
    };

    // Editar Veiculo
    function edItemFn(index){
        vm.editObj = {};
        vm.edit = true;
        vm.editTarefa = vm.list[index].tarefa;
        vm.currentIndex = index;
    };

    // Salvar Edicao
    function attItemFn(data){
        vm.edit = false;
        vm.list[vm.currentIndex].tarefa = data;
        vm.list[vm.currentIndex].criado = new Date();
        vm.editTarefa = undefined;
    };

    //Cancelar Edicao
    function cancelFn(){
        vm.edit = false;
        vm.editTarefa = undefined;
    };

});