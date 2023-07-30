class Door {
    location : String ;
    isOpen : boolean ;

    constructor(initialState : boolean) {
        this.location = name ;
        this.isOpen = initialState ;
    }

    open () {
        this.isOpen = true ;
    }

    shut () {
        this.isOpen = false ;
    }
    }

let frontDoor : Door = new Door(false);
console.log(Door at ${frontDoor.location} is open ? ${frontDoor.isOpen}' ) ;
frontDoor.open();


frontDoor.open();
garageDoor.shut()