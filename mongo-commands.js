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

//to project data 
db.collname.find({},{propname:1,propname:1})




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


db.products.insertOne({
    name:["Mixer Grinder"],
    price:0,
    quantity:150,
    category:"Appliance",
    vendors:"Tata"
})



db.products.insertMany([
        {
          name: "Laptop",
          price: 999,
          quantity: 50,
          category: "Electronics",
          vendors: ["Best Buy", "Amazon", "Newegg"]
        },
        {
          name: "Smartphone",
          price: 699,
          quantity: 100,
          category: "Electronics",
          vendors: ["Amazon", "Walmart", "Target"]
        },
        {
          name: "Headphones",
          price: 199,
          quantity: 200,
          category: "Electronics",
          vendors: ["Best Buy", "Amazon"]
        },
        {
          name: "Desk Chair",
          price: 129,
          quantity: 150,
          category: "Furniture",
          vendors: ["IKEA", "Wayfair", "Amazon"]
        },
        {
          name: "Notebook",
          price: 2,
          quantity: 500,
          category: "Stationery",
          vendors: ["Office Depot", "Staples"]
        },
        {
          name: "Pen",
          price: 1.49,
          quantity: 1000,
          category: "Stationery",
          vendors: ["Staples", "Amazon"]
        },
        {
          name: "Water Bottle",
          price: 15,
          quantity: 300,
          category: "Accessories",
          vendors: ["Amazon", "REI"]
        },
        {
          name: "Backpack",
          price: 49,
          quantity: 200,
          category: "Accessories",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Monitor",
          price: 249,
          quantity: 80,
          category: "Electronics",
          vendors: ["Best Buy", "Amazon"]
        },
        {
          name: "Keyboard",
          price: 59,
          quantity: 150,
          category: "Electronics",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Mouse",
          price: 39,
          quantity: 300,
          category: "Electronics",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Sofa",
          price: 799,
          quantity: 30,
          category: "Furniture",
          vendors: ["Wayfair", "IKEA"]
        },
        {
          name: "Coffee Table",
          price: 149,
          quantity: 75,
          category: "Furniture",
          vendors: ["IKEA", "Wayfair"]
        },
        {
          name: "Bed Frame",
          price: 299,
          quantity: 50,
          category: "Furniture",
          vendors: ["Wayfair", "IKEA"]
        },
        {
          name: "Pillow",
          price: 19,
          quantity: 400,
          category: "Home",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Blanket",
          price: 49,
          quantity: 200,
          category: "Home",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Shampoo",
          price: 8,
          quantity: 500,
          category: "Personal Care",
          vendors: ["Walmart", "Target"]
        },
        {
          name: "Toothpaste",
          price: 3,
          quantity: 600,
          category: "Personal Care",
          vendors: ["Walmart", "Amazon"]
        },
        {
          name: "T-shirt",
          price: 14,
          quantity: 300,
          category: "Clothing",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Jeans",
          price: 39,
          quantity: 200,
          category: "Clothing",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Sneakers",
          price: 69,
          quantity: 150,
          category: "Footwear",
          vendors: ["Amazon", "Foot Locker"]
        },
        {
          name: "Sandals",
          price: 29,
          quantity: 100,
          category: "Footwear",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Watch",
          price: 199,
          quantity: 100,
          category: "Accessories",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Sunglasses",
          price: 49,
          quantity: 200,
          category: "Accessories",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Wallet",
          price: 29,
          quantity: 150,
          category: "Accessories",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Blender",
          price: 89,
          quantity: 75,
          category: "Kitchen",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Toaster",
          price: 29,
          quantity: 150,
          category: "Kitchen",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Microwave",
          price: 99,
          quantity: 50,
          category: "Kitchen",
          vendors: ["Best Buy", "Walmart"]
        },
        {
          name: "Vacuum Cleaner",
          price: 149,
          quantity: 80,
          category: "Home",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Air Purifier",
          price: 129,
          quantity: 70,
          category: "Home",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Table Lamp",
          price: 24,
          quantity: 100,
          category: "Home",
          vendors: ["IKEA", "Amazon"]
        },
        {
          name: "Picture Frame",
          price: 14,
          quantity: 250,
          category: "Home",
          vendors: ["Walmart", "Target"]
        },
        {
          name: "Book",
          price: 12,
          quantity: 500,
          category: "Stationery",
          vendors: ["Amazon", "Barnes & Noble"]
        },
        {
          name: "Magazine",
          price: 5,
          quantity: 300,
          category: "Stationery",
          vendors: ["Barnes & Noble", "Walmart"]
        },
        {
          name: "Board Game",
          price: 29,
          quantity: 150,
          category: "Toys",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Puzzle",
          price: 19,
          quantity: 200,
          category: "Toys",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Action Figure",
          price: 24,
          quantity: 150,
          category: "Toys",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Doll",
          price: 29,
          quantity: 150,
          category: "Toys",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Laptop Stand",
          price: 39,
          quantity: 100,
          category: "Electronics",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "External Hard Drive",
          price: 79,
          quantity: 120,
          category: "Electronics",
          vendors: ["Amazon", "Newegg"]
        },
        {
          name: "Router",
          price: 59,
          quantity: 90,
          category: "Electronics",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Smartwatch",
          price: 199,
          quantity: 80,
          category: "Electronics",
          vendors: ["Amazon", "Best Buy"]
        },
        {
          name: "Fitness Tracker",
          price: 129,
          quantity: 100,
          category: "Electronics",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Yoga Mat",
          price: 29,
          quantity: 150,
          category: "Sports",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Dumbbells",
          price: 49,
          quantity: 100,
          category: "Sports",
          vendors: ["Amazon", "Target"]
        },
        {
          name: "Tennis Racket",
          price: 69,
          quantity: 50,
          category: "Sports",
          vendors: ["Amazon", "Walmart"]
        },
        {
          name: "Soccer Ball",
          price: 24,
          quantity: 200,
          category: "Sports",
          vendors: ["Amazon", "Target"]
        }
      ])



    //   aggregation in mongo 

    


    
    // $group - $sum,$min,$max,$avg,$push
    // $unwind 
    // $match 

    // $lookup
    // $project
    // $out
    // $sort 
    //$limit
    


     // $group - $sum,$min,$max,$avg,$push

    // db.collname.aggregate([
    //     {$group:{_id:'collpropname/null',aliasName:{$op:'collprop'}}}
    // ])

    db.products.aggregate([
        { $group : { _id:'$category', totalPrice:{$sum:'$price'}}}
    ])

    db.products.aggregate([
        { $group : { _id:null, avgPrice:{$min:'$price'}}}
    ])

    db.products.aggregate([
        {$group:{_id:'$category',productNames:{$push:'$name'}}}
    ])

    db.products.aggregate([
        {$group:{_id:'$category',productInfo:{$push:{n:'$name',q:'$quantity'}}}}
    ])

    db.products.aggregate([
        {$group:{_id:'$category',products:{$push:'$$ROOT'}}}
    ])




    // $match 

    // db.products.aggregate([
    //     {$match:{category:'Toys'}}
    // ])

    db.products.aggregate([
        {$group:{_id:'$category',productNames:{$push:'$name'}}},
        {$match:{_id:'Electronics'}}
    ])

    db.products.aggregate([
        {$group:{_id:'$category',productNames:{$push:'$name'}}},
        {$match:{productNames:{$all:["Pen"]}}}
    ])


    // $unwind 


    db.products.aggregate([
        {$match:{category:"Stationery"}},
        {$unwind:'$vendors'},
        {$group:{
            _id:'$_id',
            name:{$first:'$name'},
            price:{$first:'$price'},
            category:{$first:'$category'},
            quantity:{$first:'$quantity'},
            vendors:{$push:'$vendors'}

        }}
    ])


    db.products.aggregate([
        {$match:{category:"Stationery"}},
        {$unwind:'$vendors'}
    ])



    // loopup  for relations 

    db.departments.insertMany([
      {name:"IT"},
      {name:"HR"},
      {name:"Sales"}
    ])

    db.employees.insertMany([
      {name:"Abhay",age:22,city:"Mumbai",department:ObjectId('66b1b4a17ebcf73a9aa28f45')},
      {name:"Vinaya",age:25,city:"Pune",department:ObjectId('66b1b4a17ebcf73a9aa28f44')},
      {name:"Harshada",age:28,city:"Mumbai",department:ObjectId('66b1b4a17ebcf73a9aa28f44')}
    ])



    db.departments.aggregate([

      {
        $lookup:{
          from:"employees",
          localField:"_id",
          foreignField:"department",
          as:"employees"
        } 
      }

    ])

    db.employees.aggregate([

      {
        $lookup:{
          from:"departments",
          localField:"department",
          foreignField:"_id",
          as:"department"
        } 
      },

      {$unwind:'$department'}


    ])



    //students and subjects 

    db.subjects.insertMany([
      {name:"Science"},
      {name:"Maths"},
      {name:"History"},
      {name:"Geography"}
    ])  

    // { _id: ObjectId('66b1c53e7ebcf73a9aa28f4b'), name: 'Science' },
    // { _id: ObjectId('66b1c53e7ebcf73a9aa28f4c'), name: 'Maths' },
    // { _id: ObjectId('66b1c53e7ebcf73a9aa28f4d'), name: 'History' },
    // { _id: ObjectId('66b1c53e7ebcf73a9aa28f4e'), name: 'Geography' }


    db.students.insertMany([
      {
        name:"Rahul",
        age:14,
        subjects:[ObjectId('66b1c53e7ebcf73a9aa28f4b'),ObjectId('66b1c53e7ebcf73a9aa28f4d')]
      },
      {
        name:"Sachin",
        age:13,
        subjects:[ObjectId('66b1c53e7ebcf73a9aa28f4e'),ObjectId('66b1c53e7ebcf73a9aa28f4d'),ObjectId('66b1c53e7ebcf73a9aa28f4d')]
      },

    ])


    db.students.insertOne(
      {
        name:"Prajakta",
        age:14,
        subjects:[]
      }
    )




    db.students.aggregate([
      {
        $lookup:{
          from:"subjects",
          localField:"subjects",
          foreignField:"_id",
          as:"subjects"
        }
      },
      {$match:{subjects:{$ne:null}}}
     
    ])


    db.createCollection("customers")

    db.customers.insertMany([
      {name:"Dale",city:"Cape Town"},
      {name:"Thor",city:"Asgard"},
      {name:"Steve",city:"Brooklyn"},
      {name:"Tony",city:"New York"}
    ])


    db.orders.insertMany([
      {
        product:ObjectId('66b06b4fd25399a457e4c21e'),
        customer:ObjectId('66b1cf5b7ebcf73a9aa28f53'),
        quantity:1
      },
      {
        product:ObjectId('66b06b4fd25399a457e4c21f'),
        customer:ObjectId('66b1cf5b7ebcf73a9aa28f54'),
        quantity:3
      },
      {
        product:ObjectId('66b06b4fd25399a457e4c228'),
        customer:ObjectId('66b1cf5b7ebcf73a9aa28f55'),
        quantity:10
      }
    ])


    db.orders.aggregate([
      {
        $lookup:{
          from:'products',
          localField:'product',
          foreignField:'_id',
          as:'product'
        }
      },
      {
        $lookup:{
          from:'customers',
          localField:'customer',
          foreignField:'_id',
          as:'customer'
        }
      }
      ,
      {$unwind:'$product'},
      {$unwind:'$customer'},
      {$project:{pname:'$product.name',quantity:1}}
    ])



    
  




    db.products.aggregate([
      {
        $group:{
          _id:null,
          avgPrice:{$avg:'$price'}
        }
      },
      {
          $lookup:{
            from:'products',
            pipeline:[],
            as:'product'
        }
      },
      {$unwind:'$product'},
      {$project:{
        name:'$product.name',
        price:'$product.price',
        avgPrice:1,
        isGreater:{$cmp:['$product.price','$avgPrice']}
      }},
      {$match:{isGreater:1}}
    
    ])



    // indexing in mongo 

    db.collection.createIndex({column:1})

    db.collection.createIndex({column:1,column:1})

    db.collection.getIndexes()

    db.collection.dropIndex('indexname')



    // to explain a query 

    db.collection.anyQuery().explain('executionStats')