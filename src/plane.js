// Plane Class

class Plane {

    #isPlane = true;

    constructor(planeID = 'The Plane') {
        this.planeID = planeID;
    }

    isPlane() {
        return this.#isPlane; // return the value of the property isPlane
    }

}

module.exports = Plane;