import { sleep } from "https://deno.land/x/sleep@v1.3.0/mod.ts"
import { time } from "https://denopkg.com/burhanahmeed/time.ts@v2.0.1/mod.ts";

Deno.cron("task1", { minute: { every: 1 } },
    () => {
        console.log('Time now UTC: ', time().t)
    })

Deno.cron("task2", { minute: { every: 2 } },
    () => {
        console.log("Sleeping 3 minutes")
        sleep(3 * 60)
        console.log("Done")
    })
