-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 24 ก.ค. 2020 เมื่อ 11:33 AM
-- เวอร์ชันของเซิร์ฟเวอร์: 10.4.10-MariaDB
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `works_movie_funding`
--

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_eng` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('on','off') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'off',
  `total` decimal(14,2) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `movies`
--

INSERT INTO `movies` (`id`, `category_id`, `name`, `name_eng`, `details`, `status`, `total`, `description`, `start`, `end`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'อวาตาร์ ภาค 2', 'Avatar Part II', 'xxxxxxxxxxxxxxxxxxxx', 'on', '100.00', 'xxxxx', '2020-07-24', '2020-07-24', '2020-07-23 17:00:00', '2020-07-24 02:18:18', NULL),
(11, 1, 'บักจอนวิค', 'johnwick', 'เรื่องย่อ', 'on', '10.45', 'รายละเอียด', '2020-07-01', '2020-12-01', '2020-07-24 02:28:41', '2020-07-24 02:28:41', NULL),
(12, 1, 'บักจอนวิค2', 'johnwick2', 'เรื่องย่อ', 'on', '122220.45', 'รายละเอียด', '2020-07-01', '2020-12-01', '2020-07-24 02:29:11', '2020-07-24 02:29:11', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_category_id_foreign` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
