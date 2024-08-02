// to view all databases
show databases / dbs

// to create or switch db
use dbname

// to create a new collection
db.createCollection('collname')

// to view collections
show collections

// to insert a record
db.collname.insert({prop:value,prop:value...}) //deprecated
db.collname.insertOne({})
db.collname.insertMany([{},{}])

// to view all data 
db.collname.find()

// to fetch data based on a condition
db.collname.find({prop:value,prop:value})

// to fetch data based on multiple cond
// and op
db.collname.find({
    $and:[{},{},{}]
})

// or op 
db.collname.find({
    $or:[{},{},{}]
})

// relational ops 
// $gt,$lt,$gte,$lte,$eq,$ne
db.collname.find({prop:{$gt:value}})

// combining relationl and logical op 

db.users.find({
    $and:[{age:{$gte:22}},{age:{$lte:30}}]
})

// db.users.find({
//     $and:[{city:"Pune"},{$or:[{},]}]
// })



// to delete data 

db.collname.deleteOne({})
db.collname.deleteMany({})


// to update data 
db.collname.updateOne({prop:value},{$set:{prop:value,prop,value..}})
db.collname.updateMany({},{})
db.collname.updateOne({},{},{upsert:true}) // insert if there is nothing for matching condn


// to limit records 
db.collname.find().limit(n)

// to skip 
db.collname.find().skip(n)

// to limit and skip 
db.collname.find().limit(n).skip(n)

// to cound documents 
db.collname.countDocuments()

// to rename collection 
db.oldcollname.renameCollection('newname')

//to sort data
db.collname.find().sort({age:1/-1})




// collection with schema 

db.createCollection("products",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","price","quantity"],
            properties:{
                    name:{
                        bsonType:"string",
                        maxLength:20
                    },
                    price:{
                        bsonType:"int",
                        minimum:1
                    },
                    quantity:{
                        bsonType:"int",
                        minimum:1
                    },
                    category:{
                        bsonType:"string",
                        enum:["Clothing","Electronics","Appliance"]
                    },
                    vendors:{
                        bsonType:"array",
                        minItems:1,
                        maxItems:4,
                        items:{
                            bsonType:"string"
                        }
                    }
                    
                }
        }
    }
})



