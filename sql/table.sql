create table routes(
id serial not null primary key,
name varchar not null,
fare int
);

create table taxi(
    id serial not null primary key,
    reg_number text not null,
    region_name text not null
);

create table trip(
    id serial not null primary key,
    taxiId int,
    routesId int,
    foreign key (taxiId) references taxi(id),
	foreign key (routesId) references routes(id)
);

create table region(
    id serial not null primary key,
    name text not null
);