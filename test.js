import {exec} from "child_process"

exec("rmdir prisma/migrations", (error) => {
    if(error){
        console.log(error)
        return 
    }

    exec("npx prisma migrate dev --name init", (error) => {
        if(error){
            console.log(error)
            return 
        }
    })
})
