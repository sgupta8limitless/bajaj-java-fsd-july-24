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






begin transaction;

update customers set city = 'kashi2' where id =12;

savepoint a2;

update customers set city = 'Hyderabad2' where id =11;

end transaction;


rollback to a2;



select * from customers;

update customers set city = 'pune' where id =1;

insert into customers(name,email,city) values('Ishwar','ish@gmail.com','Indore');

create table cust_backup(
id serial primary key,
email varchar(30) not null unique,
created_at timestamp default current_timestamp
);

select * from cust_backup;

delete from customers where id = 2;



create or replace function triggercall()
returns trigger
language plpgsql
as $$
begin
	insert into cust_backup(email) values(old.email);
	return null;
end; $$;



create or replace trigger custupdate
after delete 
on customers
for each row
execute procedure triggercall()

select * from information_schema.triggers;


explain analyze
select * from customers where city='New York';


create index city_index on customers(city);

--create index index_name on customers(name,city)

drop index city_index;



select * from customers where city = 'New York';


INSERT INTO customers (name, email, city) VALUES
('John Doe1', 'john.doe1@example.com', 'New York'),
('Jane Doe2', 'jane.doe2@example.com', 'Los Angeles'),
('Alice Smith3', 'alice.smith3@example.com', 'Chicago'),
('Bob Johnson4', 'bob.johnson4@example.com', 'Houston'),
('Charlie Brown5', 'charlie.brown5@example.com', 'Phoenix'),
('David Wilson6', 'david.wilson6@example.com', 'Philadelphia'),
('Ella Harris7', 'ella.harris7@example.com', 'San Antonio'),
('Frank Clark8', 'frank.clark8@example.com', 'San Diego'),
('Grace Lewis9', 'grace.lewis9@example.com', 'Dallas'),
('Hank Lee10', 'hank.lee10@example.com', 'San Jose'),
('Ivy Walker11', 'ivy.walker11@example.com', 'Austin'),
('Jack Hall12', 'jack.hall12@example.com', 'Jacksonville'),
('Katie Young13', 'katie.young13@example.com', 'Fort Worth'),
('Liam King14', 'liam.king14@example.com', 'Columbus'),
('Mia Wright15', 'mia.wright15@example.com', 'Charlotte'),
('Noah Scott16', 'noah.scott16@example.com', 'San Francisco'),
('Olivia Green17', 'olivia.green17@example.com', 'Indianapolis'),
('Paul Adams18', 'paul.adams18@example.com', 'Seattle'),
('Quincy Baker19', 'quincy.baker19@example.com', 'Denver'),
('Rachel White20', 'rachel.white20@example.com', 'Washington'),
('Sam Turner21', 'sam.turner21@example.com', 'Boston'),
('Tina Thompson22', 'tina.thompson22@example.com', 'El Paso'),
('Uma Roberts23', 'uma.roberts23@example.com', 'Nashville'),
('Victor Phillips24', 'victor.phillips24@example.com', 'Detroit'),
('Wendy Campbell25', 'wendy.campbell25@example.com', 'Oklahoma City'),
('Xander Parker26', 'xander.parker26@example.com', 'Portland'),
('Yara Martinez27', 'yara.martinez27@example.com', 'Las Vegas'),
('Zane Stewart28', 'zane.stewart28@example.com', 'Memphis'),
('Amy Hernandez29', 'amy.hernandez29@example.com', 'Louisville'),
('Brian Gonzalez30', 'brian.gonzalez30@example.com', 'Baltimore'),
('Cathy Ramirez31', 'cathy.ramirez31@example.com', 'Milwaukee'),
('Danielle Moore32', 'danielle.moore32@example.com', 'Albuquerque'),
('Ethan Clark33', 'ethan.clark33@example.com', 'Tucson'),
('Fiona Lewis34', 'fiona.lewis34@example.com', 'Fresno'),
('George Hall35', 'george.hall35@example.com', 'Sacramento'),
('Hannah Allen36', 'hannah.allen36@example.com', 'Kansas City'),
('Isaac Young37', 'isaac.young37@example.com', 'Mesa'),
('Julia Wright38', 'julia.wright38@example.com', 'Atlanta'),
('Kevin Scott39', 'kevin.scott39@example.com', 'Omaha'),
('Laura Johnson40', 'laura.johnson40@example.com', 'Raleigh'),
('Mike Harris41', 'mike.harris41@example.com', 'Miami'),
('Nina Brown42', 'nina.brown42@example.com', 'Oakland'),
('Oscar Wilson43', 'oscar.wilson43@example.com', 'Minneapolis'),
('Penny Thompson44', 'penny.thompson44@example.com', 'Tulsa'),
('Quinn Martinez45', 'quinn.martinez45@example.com', 'Wichita'),
('Rose Walker46', 'rose.walker46@example.com', 'New Orleans'),
('Steve King47', 'steve.king47@example.com', 'Arlington'),
('Tara Adams48', 'tara.adams48@example.com', 'Bakersfield'),
('Ulysses Green49', 'ulysses.green49@example.com', 'Aurora'),
('Violet Baker50', 'violet.baker50@example.com', 'Anaheim'),
('Walter White51', 'walter.white51@example.com', 'Santa Ana'),
('Xenia Hall52', 'xenia.hall52@example.com', 'Riverside'),
('Yvonne Wright53', 'yvonne.wright53@example.com', 'Corpus Christi'),
('Zach Parker54', 'zach.parker54@example.com', 'Lexington'),
('Anna Roberts55', 'anna.roberts55@example.com', 'Stockton'),
('Ben Phillips56', 'ben.phillips56@example.com', 'Henderson'),
('Cara Campbell57', 'cara.campbell57@example.com', 'Saint Paul'),
('Dylan Parker58', 'dylan.parker58@example.com', 'St. Louis'),
('Elena Thompson59', 'elena.thompson59@example.com', 'Cincinnati'),
('Finn Clark60', 'finn.clark60@example.com', 'Pittsburgh'),
('Gina Lewis61', 'gina.lewis61@example.com', 'Greensboro'),
('Hugo Hernandez62', 'hugo.hernandez62@example.com', 'Anchorage'),
('Isabel Young63', 'isabel.young63@example.com', 'Plano'),
('James Wright64', 'james.wright64@example.com', 'Lincoln'),
('Kara Scott65', 'kara.scott65@example.com', 'Orlando'),
('Lukas Johnson66', 'lukas.johnson66@example.com', 'Irvine'),
('Molly Harris67', 'molly.harris67@example.com', 'Toledo'),
('Nate Brown68', 'nate.brown68@example.com', 'Jersey City'),
('Olga Wilson69', 'olga.wilson69@example.com', 'Chula Vista'),
('Pete Thompson70', 'pete.thompson70@example.com', 'Fort Wayne'),
('Quincy Martinez71', 'quincy.martinez71@example.com', 'St. Petersburg'),
('Rita Walker72', 'rita.walker72@example.com', 'Chandler'),
('Steve King73', 'steve.king73@example.com', 'Laredo'),
('Tina Adams74', 'tina.adams74@example.com', 'Madison'),
('Ulysses Green75', 'ulysses.green75@example.com', 'Lubbock'),
('Violet Baker76', 'violet.baker76@example.com', 'Durham'),
('Walter White77', 'walter.white77@example.com', 'Winston-Salem'),
('Xenia Hall78', 'xenia.hall78@example.com', 'Garland'),
('Yvonne Wright79', 'yvonne.wright79@example.com', 'Glendale'),
('Zach Parker80', 'zach.parker80@example.com', 'Hialeah'),
('Anna Roberts81', 'anna.roberts81@example.com', 'Reno'),
('Ben Phillips82', 'ben.phillips82@example.com', 'Chesapeake'),
('Cara Campbell83', 'cara.campbell83@example.com', 'Gilbert'),
('Dylan Parker84', 'dylan.parker84@example.com', 'Baton Rouge'),
('Elena Thompson85', 'elena.thompson85@example.com', 'Irving'),
('Finn Clark86', 'finn.clark86@example.com', 'Scottsdale'),
('Gina Lewis87', 'gina.lewis87@example.com', 'North Las Vegas'),
('Hugo Hernandez88', 'hugo.hernandez88@example.com', 'Fremont'),
('Isabel Young89', 'isabel.young89@example.com', 'Boise'),
('James Wright90', 'james.wright90@example.com', 'Richmond'),
('Kara Scott91', 'kara.scott91@example.com', 'San Bernardino'),
('Lukas Johnson92', 'lukas.johnson92@example.com', 'Birmingham'),
('Molly Harris93', 'molly.harris93@example.com', 'Spokane'),
('Nate Brown94', 'nate.brown94@example.com', 'Rochester'),
('Olga Wilson95', 'olga.wilson95@example.com', 'Des Moines'),
('Pete Thompson96', 'pete.thompson96@example.com', 'Modesto'),
('Quincy Martinez97', 'quincy.martinez97@example.com', 'Fayetteville'),
('Rita Walker98', 'rita.walker98@example.com', 'Tacoma'),
('Steve King99', 'steve.king99@example.com', 'Oxnard'),
('Tina Adams100', 'tina.adams100@example.com', 'Fontana');











































