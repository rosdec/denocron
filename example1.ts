Deno.cron("task1", "* * * * *", 
    () => console.log("This will print every ONE minute"))


Deno.cron("task2", { minute: { every: 2 } }, 
    () => console.log("This will print every TWO minutes"))
