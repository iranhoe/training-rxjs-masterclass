import { queueScheduler } from 'rxjs';

queueScheduler.schedule(() => {
    queueScheduler.schedule(() => {
        queueScheduler.schedule(() => {
            console.log('second inner queue');
        });
        console.log('inner queue');
    });
    console.log('first queue');
});
console.log('sync');