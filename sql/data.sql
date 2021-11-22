insert into region(id, name) values (1, 'Durban');
insert into region(id, name) values (2, 'Cape Town');
insert into region(id, name) values (3, 'Gauteng');

insert into routes(name, fare) values ('cape town - Belville', 14.50 );
insert into routes(name, fare) values ('Cape Town - Gugulethu', 12.00);
insert into routes(name, fare) values ('Cape Town - Langa', 8.00);
insert into routes(name, fare) values ('Santon - Randburg', 8.50);
insert into routes(name, fare) values ('Alexandra - Santon', 8.50);
insert into routes(name, fare) values ('Sandton - Midrand', 12.50);
insert into routes(name, fare) values ('Umlazi - Durban Central', 15.00);
insert into routes(name, fare) values ('Durban Central - Umhlanga Rocks', 17.00);
insert into routes(name, fare) values ('Durban Central - Umbilo', 7.00);

insert into taxi(reg_number, region_name) values ('CA 123-09', 'Cape Town');
insert into taxi(reg_number, region_name) values ('CY 186-076', 'Cape Town');
insert into taxi(reg_number, region_name) values ('CA 199-999', 'Cape Town');
insert into taxi(reg_number, region_name) values ('NUZ 654-098', 'Durban');
insert into taxi(reg_number, region_name) values ('NU 687-008', 'Durban');
insert into taxi(reg_number, region_name) values ('GP 674-090', 'Gauteng');
insert into taxi(reg_number, region_name) values ('GP 777-888', 'Gauteng');