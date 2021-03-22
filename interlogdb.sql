-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2021 at 11:55 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interlogdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Customer_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `Customer_Name`) VALUES
(2, 'Adeboye Ben Jnr'),
(3, 'Hannah Akin'),
(5, 'Sam Smith');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Product_Name` varchar(255) NOT NULL,
  `Customer_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Product_Name`, `Customer_Name`) VALUES
(1, 'Product_name', 'Hannah Akin'),
(2, 'Sam Smith', 'Clothing and Perfume'),
(4, 'Drugs', 'Sam Smith');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `UserId` bigint(20) UNSIGNED NOT NULL,
  `Customer_Name` varchar(255) NOT NULL,
  `Product_Name` varchar(255) NOT NULL,
  `Reporting_Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `State` varchar(150) NOT NULL,
  `Field_Staff_Name` varchar(200) NOT NULL,
  `Opening_balance` varchar(100) NOT NULL,
  `Take_on` varchar(255) NOT NULL,
  `Release_` varchar(255) NOT NULL,
  `Loading` varchar(255) NOT NULL,
  `Release_balance` varchar(150) NOT NULL,
  `Closing_balance` varchar(150) NOT NULL,
  `Physical_Stock_Balance` varchar(255) NOT NULL,
  `Approval_1` varchar(150) NOT NULL,
  `Approval_2` varchar(150) NOT NULL,
  `Approval_3` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `UserId`, `Customer_Name`, `Product_Name`, `Reporting_Date`, `State`, `Field_Staff_Name`, `Opening_balance`, `Take_on`, `Release_`, `Loading`, `Release_balance`, `Closing_balance`, `Physical_Stock_Balance`, `Approval_1`, `Approval_2`, `Approval_3`) VALUES
(13, 8, 'Hannah Akin', 'Sam Smith', '2021-03-10 17:00:00', '', 'Akin Laolaye', '10000', '7000', '3000', '2000', '0', '0', '0', 'UserManager', 'Toju Nathaniel', ''),
(14, 8, 'Adeboye Ben Jnr', 'Product_name', '2021-03-10 22:00:00', '', 'Akin Laolaye', '100000', '70000', '50000', '30001', '0', '0', '0', '', 'Toju Nathaniel', ''),
(15, 8, 'Adeboye Ben Jnr', 'Drugs', '2021-03-10 23:00:00', '', 'Akin Laolaye', '200000', '100000', '70000', '50000', '0', '0', '0', '', '', ''),
(16, 8, 'Adeboye Ben Jnr', 'Drugs', '2021-03-10 23:00:00', '', 'Akin Laolaye', '100000', '70000', '50000', '20000', '0', '0', '0', '', '', ''),
(17, 8, 'Sam Smith', 'Drugs', '2021-03-10 23:00:00', '', 'Akin Laolaye', '100000', '60000', '30000', '5000', '25000', '130000', '155000', '', '', ''),
(18, 8, 'Adeboye Ben Jnr', 'Drugs', '2021-03-09 23:00:00', '', 'Akin Laolaye', '100000', '60000', '30000', '5000', '25000', '130000', '155000', '', '', ''),
(19, 8, 'Adeboye Ben Jnr', 'Drugs', '2021-03-01 23:00:00', '', 'Akin Laolaye', '100000', '60000', '30000', '5000', '25000', '130000', '155000', '', '', ''),
(20, 8, 'Hannah Akin', 'Drugs', '2021-03-03 23:00:00', '', 'Akin Laolaye', '100000', '60000', '30000', '5000', '25000', '130000', '155000', '', '', ''),
(21, 6, 'Adeboye Ben Jnr', 'Drugs', '2021-03-10 23:00:00', '', 'Akin Laolaye', '250000', '50000', '40000', '20000', '20000', '260000', '280000', '', '', ''),
(22, 6, 'Adeboye Ben Jnr', 'Drugs', '2021-03-11 15:00:00', 'Lagos', 'Rebecca Amoo', '500000', '200000', '150000', '45000', '105000', '550000', '655000', 'UserManager', 'Toju Nathaniel', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `state` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('manager','staff','admin','hr','supervisor') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `state`, `email`, `password`, `role`) VALUES
(1, 'John Doe', '', 'johndoe@gmail.com', '$2a$10$dvNBKvfaApeOAofZhTzx6uhPKPr8K/ItK0mufBXeoKVjFY2s/foWm', 'manager'),
(6, 'Sam Smith', 'Lagos', 'samsmith@gmail.com', '$2a$10$hkbomiSeNtqGgxlQ8GAeTeSpD5op5SQvR2x2tMjmjhAGMKjIa800K', 'staff'),
(8, 'Test test', '', 'test@gmail.com', '$2a$10$rXYy2qcQxd98KmW2gk9jrunhPJWoLzJjTV6sWPiCTzi2CPK1XGTaC', 'staff'),
(10, 'John Mark', 'Lagos', 'maarkjohn@gmail.com', '$2a$10$UkONG3lMGhYa4hFb62WCeeUEg3eSrZfEwZMpUjCNeG6ujii647iiu', 'admin'),
(11, 'UserManager', 'Cross River', 'Usermanager@gmail.com', '$2a$10$iLPgU9JQO0tR/G5.J7GdReWKesUCnSKulbuEGmUQMcNFeEZZR7fsu', 'hr'),
(12, 'Toju Nathaniel', 'Lagos', 'tojuofe@gmail.com', '$2a$10$KkyFKbk/XbZOjyYdeYRD6uzocN5A.SsU67.VxRtq67ExuL1pQyn0C', 'manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
