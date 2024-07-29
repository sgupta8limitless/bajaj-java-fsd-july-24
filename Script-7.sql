select * from categories;

select * from products;

select * from customers;

select * from products_customers;

select * from 
categories c inner join products p
on c.id = p.category_id;


create table customers(
id serial primary key,
name varchar(20) not null,
email varchar(30) not null unique,
city varchar(20) not null,
created_at timestamp default current_timestamp
);

create table products_customers
(
id serial primary key,
product_id int,
customer_id int,
foreign key(product_id) references products(id),
foreign key(customer_id) references customers(id),
created_at timestamp default current_timestamp
);

insert into customers(name,email,city) values
('Gaurav','gaurav@gmail.com','Hydearabd'),
('Omkar','omkar@gmail.com','Bengaluru'),
('Ajay','ajay@gmail.com','Hyderabad');

insert into products_customers(product_id,customer_id) values
(1,1),
(4,1),
(5,3);


select * from 
products p inner join products_customers pc
on p.id = pc.product_id
inner join customers c 
on c.id = pc.customer_id ;

select p.name as product_name,c.name as customer_name  from products p , customers c , products_customers pc 
where p.id = pc.product_id 
and c.id = pc.customer_id ;


select * from 
categories c inner join products p 
on c.id =p.category_id ;

select * from categories c ,products p 
where c.id = p.category_id ;


--subqueries 


select * from categories c , products p 
where c.id = p.category_id 
and c.name = 'Electronics';


select * from products 
where category_id = 
(select id from categories where name='Electronics' );


select * from customers cu ,products p ,products_customers pc ,categories ca 
where cu.id = pc.customer_id 
and p.id = pc.product_id 
and p.category_id = ca.id ;


--select name from categories
--where id in
--(select category_id  from products
--where id in 
--(select product_id  from products_customers 
--where customer_id =
--(select id from customers where name = 'Abhay')));


--set operators 
--select name,email from customers where city in ('Hyderabad','Pune')
--except
--select name,email from customers where city = 'Pune';


select * from customers order by id desc;

select * from customers offset 1 limit 3;


SELECT * FROM customers 
offset 1 rows
fetch first 3 rows only;


copy customers(name,email) to 
'C:\Users\SAURABH\Desktop\bajaj-java-fsd-july-24\abc1.csv' 
delimiter ',' csv header;


copy customers(name,email,city) from 
'C:\Users\SAURABH\Desktop\bajaj-java-fsd-july-24\abc.csv' 
delimiter ',' csv header;

select * from customers ;



































