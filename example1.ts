Deno.cron("string", "* * * * *", 
    () => console.log("This will print every ONE minutes"))


Deno.cron("json", { minute: { every: 2 } }, 
    () => console.log("This will print every TWO minutes"))

