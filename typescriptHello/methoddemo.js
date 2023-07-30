var Door = /** @class */ (function () {
    function Door(initialState) {
        this.isOpen = initialState;
    }
    Door.prototype.open = function () {
        this.isOpen = true;
    };
    Door.prototype.shut = function () {
        this.isOpen = false;
    };
    return Door;
}());
var frontDoor = new Door(false);
var garageDoor = new Door(true);
console.log('Door at ${frontDoor.location} is open ? ${frontDoor.isOpen}');
frontDoor.open();
frontDoor.open();
garageDoor.shut();
