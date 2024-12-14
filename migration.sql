BEGIN;
CREATE TABLE IF NOT EXISTS public."Trucks"
(
    truck_id serial NOT NULL,
    brand character varying(50) NOT NULL,
    load real NOT NULL,
    capacity real NOT NULL,
    year integer NOT NULL,
    number_of_repairs integer NOT NULL,
    PRIMARY KEY (truck_id)
);

CREATE TYPE employee_category AS ENUM ('Driver', 'Mechanic');

CREATE TABLE IF NOT EXISTS public."Employees"
(
    employee_id serial NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    seniority integer,
    category employee_category,
    PRIMARY KEY (employee_id)
);

CREATE TABLE IF NOT EXISTS public."Mechanic_Specialties"
(
    specialty_id serial,
    mechanic_id integer,
    vehicle_brand character varying(50),
    PRIMARY KEY (specialty_id)
);

CREATE TABLE IF NOT EXISTS public."Mechanic_Repairs"
(
    repair_id serial NOT NULL,
    truck_id integer NOT NULL,
    estimated_repair_days integer,
    PRIMARY KEY (repair_id)
);

CREATE TABLE IF NOT EXISTS public."Customers"
(
    customer_id serial NOT NULL,
    name character varying(50) NOT NULL,
    address character varying(50) NOT NULL,
    phone1 character varying(20) NOT NULL,
    phone2 character varying(20) NOT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE IF NOT EXISTS public."Shipments"
(
    shipment_id serial NOT NULL,
    customer_id integer NOT NULL,
    weight real NOT NULL,
    value real NOT NULL,
    origin character varying(50) NOT NULL,
    destination character varying(50) NOT NULL,
    PRIMARY KEY (shipment_id)
);

CREATE TABLE IF NOT EXISTS public."Truck_Trips"
(
    trip_id serial NOT NULL,
    truck_id integer NOT NULL,
    driver1_id integer NOT NULL,
    driver2_id integer,
    shipment_id integer NOT NULL,
    PRIMARY KEY (trip_id)
);

ALTER TABLE IF EXISTS public."Mechanic_Specialties"
    ADD FOREIGN KEY (mechanic_id)
    REFERENCES public."Employees" (employee_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Mechanic_Repairs"
    ADD FOREIGN KEY (truck_id)
    REFERENCES public."Trucks" (truck_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Shipments"
    ADD FOREIGN KEY (customer_id)
    REFERENCES public."Customers" (customer_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Truck_Trips"
    ADD FOREIGN KEY (truck_id)
    REFERENCES public."Trucks" (truck_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Truck_Trips"
    ADD FOREIGN KEY (driver1_id)
    REFERENCES public."Employees" (employee_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Truck_Trips"
    ADD FOREIGN KEY (driver2_id)
    REFERENCES public."Employees" (employee_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Truck_Trips"
    ADD FOREIGN KEY (shipment_id)
    REFERENCES public."Shipments" (shipment_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
END;

Step 3: Insert Data
Tables:
--Employees:
INSERT INTO public."Employees"(name, surname, seniority, category)
VALUES ('Bin', 'Hu', 5, 'Mechanic'),
       ('Xinmeng', 'Tai', 4, 'Driver'),
       ('Alex', 'Wu', 8, 'Mechanic'),
       ('John', 'Tai', 3, 'Driver'),
       ('Brian', 'Kang', 8, 'Mechanic'),
       ('Prakash', 'Wang', 2, 'Driver'),
       ('Rose', 'Wu', 8, 'Mechanic'),
       ('Marry', 'Tai', 3, 'Driver'),
       ('Ross', 'Wu', 8, 'Driver'),
       ('Joey', 'Wang', 2, 'Driver');

--Specialized:
INSERT INTO public."Mechanic_Specialties" (mechanic_id, vehicle_brand) VALUES
(1, 'Ford'),
(2, 'Chevrolet'),
(3, 'Toyota'),
(4, 'Honda'),
(5, 'Nissan'),
(6, 'BMW'),
(5, 'Mercedes-Benz'),
(8, 'Volkswagen'),
(7, 'Hyundai'),
(10, 'Kia'),
(3, 'Mack'),
(8, 'Freightliner'),
(3, 'Isuzu'),
(4, 'Volvo'),
(5, 'Hino'),
(6, 'Ram'),
(7, 'Dodge'),
(8, 'Jeep'),
(9, 'Subaru'),
(6, 'GMC');

--Trucks:
INSERT INTO public."Trucks" (brand, load, capacity, year, number_of_repairs) VALUES
('Ford', 5.0, 15.0, 2015, 2),
('Chevrolet', 6.0, 18.0, 2016, 1),
('Mercedes-Benz', 7.0, 20.0, 2018, 3),
('Volvo', 8.0, 22.0, 2017, 0),
('Toyota', 4.5, 14.0, 2019, 1),
('Mack', 9.0, 25.0, 2014, 4),
('Isuzu', 5.5, 16.0, 2020, 0),
('Hino', 6.5, 17.0, 2021, 2),
('Nissan', 7.5, 19.0, 2013, 5),
('Freightliner', 8.5, 21.0, 2022, 1);

--Repairs:
INSERT INTO public."Mechanic_Repairs" (truck_id, estimated_repair_days) VALUES
(1, 3),
(2, 2),
(3, 5),
(4, 1),
(5, 4),
(6, 2),
(7, 6),
(8, 3),
(9, 1),
(10, 2);

--Customers:
INSERT INTO public."Customers" (name, address, phone1, phone2) VALUES
('Alice Johnson', '123 Maple St', '555-1234', '555-5678'),
('Bob Smith', '456 Oak St', '555-2345', '555-6789'),
('Charlie Brown', '789 Pine St', '555-3456', '555-7890'),
('Diana Prince', '321 Cedar St', '555-4567', '555-8901'),
('Edward Norton', '654 Birch St', '555-5678', '555-9012'),
('Fiona Green', '987 Spruce St', '555-6789', '555-0123'),
('George White', '147 Elm St', '555-7890', '555-1235'),
('Hannah Black', '258 Willow St', '555-8901', '555-2346'),
('Ian Gray', '369 Chestnut St', '555-9012', '555-3457'),
('Jackie Chan', '159 Maple Ave', '555-0123', '555-4568');

--Shipments:
INSERT INTO public."Shipments" (customer_id, weight, value, origin, destination) VALUES
(1, 1500.5, 2500.0, 'New York', 'Los Angeles'),
(2, 2000.0, 3000.0, 'Chicago', 'Miami'),
(3, 1800.75, 2800.0, 'Houston', 'San Francisco'),
(4, 2200.25, 3200.5, 'Phoenix', 'Dallas'),
(5, 1600.0, 2700.0, 'San Diego', 'Seattle'),
(6, 1300.5, 2400.0, 'Austin', 'Denver'),
(7, 1900.0, 3100.0, 'Boston', 'Atlanta'),
(8, 2100.5, 3500.0, 'Philadelphia', 'Orlando'),
(9, 1700.0, 2900.0, 'San Antonio', 'Las Vegas'),
(10, 1400.75, 2600.0, 'Detroit', 'Nashville'),
(5, 7100.0, 2550.0, 'Baltimore', 'Cleveland'),
(5, 7500.0, 2750.0, 'San Jose', 'Portland'),
(6, 1850.0, 2950.0, 'Indianapolis', 'Columbus'),
(6, 1600.0, 3000.0, 'Charlotte', 'San Francisco'),
(7, 2000.5, 3300.0, 'Memphis', 'Seattle'),
(7, 2100.0, 3100.0, 'Washington', 'New Orleans'),
(7, 1900.0, 2800.0, 'Milwaukee', 'Boston'),
(8, 2200.5, 3400.0, 'Kansas City', 'Miami'),
(8, 1750.0, 2900.0, 'Tucson', 'Phoenix'),
(8, 1600.5, 2650.0, 'Cincinnati', 'Detroit');

-- Truck_Trips:
INSERT INTO public."Truck_Trips" (truck_id, driver1_id, driver2_id, shipment_id) VALUES
(1, 1, 2, 1),
(2, 2, 3, 2),
(3, 3, NULL, 3),
(4, 4, 5, 4),
(5, 5, 6, 5),
(6, 6, NULL, 6),
(7, 7, 8, 7),
(8, 8, 9, 8),
(9, 9, NULL, 9),
(10, 10, 1, 10),
(1, 1, 3, 11),
(2, 2, 4, 12),
(2, 3, 5, 13),
(4, 4, NULL, 14),
(5, 5, 6, 15),
(8, 6, 7, 16),
(8, 7, NULL, 17),
(8, 8, 9, 18),
(6, 9, 10, 19),
(6, 10, NULL, 20);