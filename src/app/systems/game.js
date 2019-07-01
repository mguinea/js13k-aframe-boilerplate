import {Box} from "../entities/Box";

AFRAME.registerSystem('game', {
    schema: {},

    init: function () {
        console.log('Game Initialized');

        // Example summon a custom entity
        this.box = new Box(0, 2, -5, {
           width: 2,
           height: 2,
           depth: 2
        });
    },

    tick(time, timeDelta){
        // Your gameloop code
        this.box.update(time, timeDelta);
    }
});
