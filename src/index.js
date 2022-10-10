import app from './app.js'

app.listen(app.get("port"), function () {
    console.log(`\n🚀 Server ready at: http://localhost:${this.address().port}\n`)
})