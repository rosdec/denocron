import { time } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";

Deno.cron("task1", { minute: { every: 1 }}, {
    backoffSchedule: [1000, 5000, 10000],
}, () => {
    console.log('Time now UTC: ', time().t)

    throw new Error();
});
