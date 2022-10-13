// commands for Developers
if(process.env.NODE_ENV === "development") import('./commands.js')

import app from './app.js'

app.listen(app.get("port"), function () {
    console.log(`\n🚀 Server ready at: http://localhost:${this.address().port}\n`)
})