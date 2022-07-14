import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1657811097361 implements MigrationInterface {
	name = 'migration1657811097361';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`ID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`ID\` int NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`TerritoryID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`TerritoryID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`SupplierID\` \`SupplierID\` int NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` DROP COLUMN \`SupplierID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` ADD \`SupplierID\` int NOT NULL PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`ContactName\` \`ContactName\` varchar(30) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`ContactTitle\` \`ContactTitle\` varchar(30) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Address\` \`Address\` varchar(60) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`City\` \`City\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Region\` \`Region\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Country\` \`Country\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Fax\` \`Fax\` varchar(24) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`HomePage\` \`HomePage\` longtext NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`shippers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Title\` \`Title\` varchar(30) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`TitleOfCourtesy\` \`TitleOfCourtesy\` varchar(25) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`BirthDate\` \`BirthDate\` datetime NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`HireDate\` \`HireDate\` datetime NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Address\` \`Address\` varchar(60) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`City\` \`City\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Region\` \`Region\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Country\` \`Country\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`HomePhone\` \`HomePhone\` varchar(24) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Extension\` \`Extension\` varchar(4) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Notes\` \`Notes\` longtext NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`ReportsTo\` \`ReportsTo\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`PhotoPath\` \`PhotoPath\` varchar(255) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customerdemographics\` CHANGE \`CustomerDesc\` \`CustomerDesc\` longtext NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` ADD \`CustomerID\` varchar(5) NOT NULL PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`ContactName\` \`ContactName\` varchar(30) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`ContactTitle\` \`ContactTitle\` varchar(30) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Address\` \`Address\` varchar(60) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`City\` \`City\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Region\` \`Region\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Country\` \`Country\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Fax\` \`Fax\` varchar(24) NULL`
		);
		await queryRunner.query(
			`DROP INDEX \`CustomerID\` ON \`orders\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` ADD \`CustomerID\` varchar(5) NULL`
		);
		await queryRunner.query(
			`CREATE INDEX \`CustomersOrders\` ON \`orders\` (\`CustomerID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`EmployeeID\` \`EmployeeID\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`OrderDate\` \`OrderDate\` datetime NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`RequiredDate\` \`RequiredDate\` datetime NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShippedDate\` \`ShippedDate\` datetime NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipVia\` \`ShipVia\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipName\` \`ShipName\` varchar(40) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipAddress\` \`ShipAddress\` varchar(60) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipCity\` \`ShipCity\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipRegion\` \`ShipRegion\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipPostalCode\` \`ShipPostalCode\` varchar(10) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipCountry\` \`ShipCountry\` varchar(15) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`SupplierID\` \`SupplierID\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`CategoryID\` \`CategoryID\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`QuantityPerUnit\` \`QuantityPerUnit\` varchar(20) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`categories\` CHANGE \`Description\` \`Description\` longtext NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`TerritoryID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`TerritoryID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`TerritoryID\` varchar(40) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`ID\`, \`EmployeeID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`TerritoryID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`TerritoryID\` varchar(20) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`ID\`, \`TerritoryID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD PRIMARY KEY (\`CustomerTypeID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD \`CustomerID\` varchar(5) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD PRIMARY KEY (\`CustomerTypeID\`, \`CustomerID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`RegionID\` ON \`territories\` (\`RegionID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`CustomerID\` ON \`orders\` (\`CustomerID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`IDX_4dd4d306a101644d589dccd1bd\` ON \`employeeterritories\` (\`EmployeeID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`IDX_c1886cbf2819ffc3a01eed010e\` ON \`employeeterritories\` (\`TerritoryID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`IDX_d8559b6e753654da99d0a01825\` ON \`customercustomerdemo\` (\`CustomerTypeID\`)`
		);
		await queryRunner.query(
			`CREATE INDEX \`IDX_c112bc0467c448b7cfa2689b4c\` ON \`customercustomerdemo\` (\`CustomerID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`territories\` ADD CONSTRAINT \`FK_dfd7c07defa0f4c109708bc1a2f\` FOREIGN KEY (\`RegionID\`) REFERENCES \`region\`(\`RegionID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_948fb2b96625297720dd6073969\` FOREIGN KEY (\`ReportsTo\`) REFERENCES \`employees\`(\`EmployeeID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_1c6788638d5ad9a0e38aa1a6758\` FOREIGN KEY (\`CustomerID\`) REFERENCES \`customers\`(\`CustomerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_100b0b50ea9f2c067bc91a41e9a\` FOREIGN KEY (\`EmployeeID\`) REFERENCES \`employees\`(\`EmployeeID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_aafc3949d485c7072c340720b62\` FOREIGN KEY (\`ShipVia\`) REFERENCES \`shippers\`(\`ShipperID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`order details\` ADD CONSTRAINT \`FK_3be0ecc031c1011f2294bca981f\` FOREIGN KEY (\`OrderID\`) REFERENCES \`orders\`(\`OrderID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`order details\` ADD CONSTRAINT \`FK_c2be933fd83f1c08fe93d51c67f\` FOREIGN KEY (\`ProductID\`) REFERENCES \`products\`(\`ProductID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_981bd4588a5ac92d66345a96837\` FOREIGN KEY (\`CategoryID\`) REFERENCES \`categories\`(\`CategoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_f6094d74b79c5ab944c8007e62e\` FOREIGN KEY (\`SupplierID\`) REFERENCES \`suppliers\`(\`SupplierID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD CONSTRAINT \`FK_4dd4d306a101644d589dccd1bd9\` FOREIGN KEY (\`EmployeeID\`) REFERENCES \`employees\`(\`EmployeeID\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD CONSTRAINT \`FK_c1886cbf2819ffc3a01eed010e9\` FOREIGN KEY (\`TerritoryID\`) REFERENCES \`territories\`(\`TerritoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD CONSTRAINT \`FK_d8559b6e753654da99d0a018250\` FOREIGN KEY (\`CustomerTypeID\`) REFERENCES \`customerdemographics\`(\`CustomerTypeID\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD CONSTRAINT \`FK_c112bc0467c448b7cfa2689b4cb\` FOREIGN KEY (\`CustomerID\`) REFERENCES \`customers\`(\`CustomerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP FOREIGN KEY \`FK_c112bc0467c448b7cfa2689b4cb\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP FOREIGN KEY \`FK_d8559b6e753654da99d0a018250\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP FOREIGN KEY \`FK_c1886cbf2819ffc3a01eed010e9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP FOREIGN KEY \`FK_4dd4d306a101644d589dccd1bd9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_f6094d74b79c5ab944c8007e62e\``
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_981bd4588a5ac92d66345a96837\``
		);
		await queryRunner.query(
			`ALTER TABLE \`order details\` DROP FOREIGN KEY \`FK_c2be933fd83f1c08fe93d51c67f\``
		);
		await queryRunner.query(
			`ALTER TABLE \`order details\` DROP FOREIGN KEY \`FK_3be0ecc031c1011f2294bca981f\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_aafc3949d485c7072c340720b62\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_100b0b50ea9f2c067bc91a41e9a\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_1c6788638d5ad9a0e38aa1a6758\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_948fb2b96625297720dd6073969\``
		);
		await queryRunner.query(
			`ALTER TABLE \`territories\` DROP FOREIGN KEY \`FK_dfd7c07defa0f4c109708bc1a2f\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_c112bc0467c448b7cfa2689b4c\` ON \`customercustomerdemo\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_d8559b6e753654da99d0a01825\` ON \`customercustomerdemo\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_c1886cbf2819ffc3a01eed010e\` ON \`employeeterritories\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_4dd4d306a101644d589dccd1bd\` ON \`employeeterritories\``
		);
		await queryRunner.query(
			`DROP INDEX \`CustomerID\` ON \`orders\``
		);
		await queryRunner.query(
			`DROP INDEX \`RegionID\` ON \`territories\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD PRIMARY KEY (\`CustomerTypeID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD \`CustomerID\` char(5) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`customercustomerdemo\` ADD PRIMARY KEY (\`CustomerID\`, \`CustomerTypeID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`TerritoryID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`TerritoryID\` varchar(40) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`TerritoryID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`TerritoryID\` varchar(20) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`TerritoryID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`TerritoryID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`categories\` CHANGE \`Description\` \`Description\` longtext NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`QuantityPerUnit\` \`QuantityPerUnit\` varchar(20) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`CategoryID\` \`CategoryID\` int NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`products\` CHANGE \`SupplierID\` \`SupplierID\` int NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipCountry\` \`ShipCountry\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipPostalCode\` \`ShipPostalCode\` varchar(10) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipRegion\` \`ShipRegion\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipCity\` \`ShipCity\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipAddress\` \`ShipAddress\` varchar(60) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipName\` \`ShipName\` varchar(40) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShipVia\` \`ShipVia\` int NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`ShippedDate\` \`ShippedDate\` datetime NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`RequiredDate\` \`RequiredDate\` datetime NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`OrderDate\` \`OrderDate\` datetime NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` CHANGE \`EmployeeID\` \`EmployeeID\` int NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`DROP INDEX \`CustomersOrders\` ON \`orders\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`orders\` ADD \`CustomerID\` char(5) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`CREATE INDEX \`CustomerID\` ON \`orders\` (\`CustomerID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Fax\` \`Fax\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Country\` \`Country\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Region\` \`Region\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`City\` \`City\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`Address\` \`Address\` varchar(60) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`ContactTitle\` \`ContactTitle\` varchar(30) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` CHANGE \`ContactName\` \`ContactName\` varchar(30) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` DROP COLUMN \`CustomerID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` ADD \`CustomerID\` char(5) NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`customers\` ADD PRIMARY KEY (\`CustomerID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`customerdemographics\` CHANGE \`CustomerDesc\` \`CustomerDesc\` longtext NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`PhotoPath\` \`PhotoPath\` varchar(255) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`ReportsTo\` \`ReportsTo\` int NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Notes\` \`Notes\` longtext NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Extension\` \`Extension\` varchar(4) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`HomePhone\` \`HomePhone\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Country\` \`Country\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Region\` \`Region\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`City\` \`City\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Address\` \`Address\` varchar(60) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`HireDate\` \`HireDate\` datetime NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`BirthDate\` \`BirthDate\` datetime NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`TitleOfCourtesy\` \`TitleOfCourtesy\` varchar(25) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`employees\` CHANGE \`Title\` \`Title\` varchar(30) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`shippers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`HomePage\` \`HomePage\` longtext NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Fax\` \`Fax\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Phone\` \`Phone\` varchar(24) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Country\` \`Country\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`PostalCode\` \`PostalCode\` varchar(10) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Region\` \`Region\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`City\` \`City\` varchar(15) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`Address\` \`Address\` varchar(60) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`ContactTitle\` \`ContactTitle\` varchar(30) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`ContactName\` \`ContactName\` varchar(30) NULL DEFAULT 'NULL'`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` DROP COLUMN \`SupplierID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` ADD \`SupplierID\` int NOT NULL AUTO_INCREMENT`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` ADD PRIMARY KEY (\`SupplierID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`suppliers\` CHANGE \`SupplierID\` \`SupplierID\` int NOT NULL AUTO_INCREMENT`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`TerritoryID\`, \`ID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP PRIMARY KEY`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD PRIMARY KEY (\`EmployeeID\`, \`TerritoryID\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` DROP COLUMN \`ID\``
		);
		await queryRunner.query(
			`ALTER TABLE \`employeeterritories\` ADD \`ID\` int(5) NOT NULL`
		);
	}
}

