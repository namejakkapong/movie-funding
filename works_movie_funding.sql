-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28 ก.พ. 2020 เมื่อ 12:54 PM
-- เวอร์ชันของเซิร์ฟเวอร์: 10.4.11-MariaDB
-- PHP Version: 7.2.26

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
-- โครงสร้างตาราง `education`
--

CREATE TABLE `education` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `graduation_year` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `faculty` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `education`
--

INSERT INTO `education` (`id`, `user_id`, `graduation_year`, `level`, `subject`, `faculty`, `school`, `created_at`, `updated_at`) VALUES
(1, 8, '2545', 'มัธยม', '-', '-', 'มหาสารคาม', '2020-02-27 17:00:00', NULL),
(2, 8, '2545', 'ป.ตรี', '-', '-', 'มหาสารคาม', '2020-02-27 17:00:00', NULL),
(3, 10, '2555', '1', 'เทคโนโลยี', 'สารสนเทศ', 'มหาสารคาม', '2020-02-28 04:46:47', '2020-02-28 04:46:47'),
(4, 10, '2560', 'ปริญญาเอก', 'สารสนเทศ', 'วิทยาการ', 'มหาสารคาม', '2020-02-28 04:48:52', '2020-02-28 04:48:52'),
(5, 10, '2562', 'มัธยมปลาย', '-', '-', 'มหาสารคาม', '2020-02-28 04:49:29', '2020-02-28 04:49:29');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2020_01_15_015949_create_education_table', 2),
(10, '2020_01_15_021823_create_work_experiences_table', 3);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('16ab73ebf192d005ccf326f808750c1f86277be4e86cfb3cb23692769e89a12b947b9fffb09acc6b', 1, 3, 'admin', '[]', 0, '2019-12-19 01:46:26', '2019-12-19 01:46:26', '2020-12-19 08:46:26'),
('1fb3c850bb13274a3d5e4bd723e6b9e9590dfffe0d33f558d0fc2fa2f675c6c46f8dbe1c6556f819', 1, 3, 'admin', '[]', 0, '2020-01-09 04:52:10', '2020-01-09 04:52:10', '2021-01-09 11:52:10'),
('2c8b0b5ed90510e54fbd5ffd3f60b798ef9fe730b5326c855b01deb71a920365f64cbbb54b44a579', 1, 3, 'admin', '[]', 1, '2019-12-19 21:46:23', '2019-12-19 21:46:23', '2020-12-20 04:46:23'),
('4619e71daea088b87228ca515574f230ba74c8d051576d12ce4d4d36e66e953edd41cb2ff95d25a7', 1, 3, 'admin', '[]', 0, '2019-12-19 21:36:25', '2019-12-19 21:36:25', '2020-12-20 04:36:25'),
('5ac15a7ccf61865b5e7132f6a0790824b8238d0dfec8494855cb487cd3a3abcceceed23e9fcf86fd', 1, 3, 'admin', '[]', 0, '2019-12-18 11:16:54', '2019-12-18 11:16:54', '2020-12-18 18:16:54'),
('7b6165ff4e7b9c7a92d6d8a7e5c42f22bd138190e36a3f0c0fa98c6a2ae1705bce85b50ceac2afb6', 1, 3, 'admin', '[]', 1, '2019-12-19 21:56:17', '2019-12-19 21:56:17', '2020-12-20 04:56:17'),
('9b08e051f27fe37422f35cebf1d1a9a3c3ea76b0e22b1dd580c157946f7e61d4ac503717240ced60', 1, 3, 'admin', '[]', 0, '2020-02-28 04:32:01', '2020-02-28 04:32:01', '2021-02-28 11:32:01'),
('a5458ab98d5fdad1940910fe03b87cac853b4a336d257a965e5063ee08737bd51397616b2e6317b9', 1, 3, 'admin', '[]', 0, '2019-12-19 21:05:04', '2019-12-19 21:05:04', '2020-12-20 04:05:04'),
('bfe154ac3c58fa26ecc3724698b5b0aed5aff9cb712744c7d915f59ce0565fa23f54a27e4b43a9c3', 1, 3, 'admin', '[]', 0, '2019-12-19 21:13:32', '2019-12-19 21:13:32', '2020-12-20 04:13:32'),
('c387d7fd7104426f8da7bc81bfc0c95def265a6e3b22a38ee8cbe0411935d5c36cd08b51de2beff4', 1, 3, 'admin', '[]', 0, '2019-12-19 21:18:08', '2019-12-19 21:18:08', '2020-12-20 04:18:08'),
('d0c56bf207507181838a2ca441b2bfe24fa9357f3269ef837bebe6c00efaeead03404e5505131dc0', 1, 3, 'admin', '[]', 0, '2019-12-19 21:41:02', '2019-12-19 21:41:02', '2020-12-20 04:41:02'),
('de3c6355596974b04a619e0e79ecb02802e0660d0629189470d18239e3caf2431da4cf3b54070ac5', 1, 3, 'admin', '[]', 0, '2019-12-18 10:22:40', '2019-12-18 10:22:40', '2020-12-18 17:22:40'),
('de5c4e63e49f271b67f8d10d413e5bc1e9ba9854c0c5f4d5eea8bee4fae17e2c0a1d2406cbdb7e11', 1, 3, 'admin', '[]', 1, '2020-02-27 04:16:19', '2020-02-27 04:16:19', '2021-02-27 11:16:19'),
('e629ba512fd52d5100e7cef77bdcec8c9b6cd12d32364bdf96badf652c2b1940880d4aa4da7fd905', 1, 3, 'admin', '[]', 1, '2020-02-28 03:17:50', '2020-02-28 03:17:50', '2021-02-28 10:17:50'),
('e785557aaa289a44ab43a1598f966472550bc2b6addac965a364dc9ae509790481f9631ead6b7d68', 1, 3, 'admin', '[]', 1, '2019-12-19 21:56:48', '2019-12-19 21:56:48', '2020-12-20 04:56:48'),
('fdbfafc10e6a0e0304ed1a5471162c78f07e8a30568b5e0f473d80fe08d08482bd0ca47402708dc5', 1, 3, 'admin', '[]', 1, '2019-12-24 07:10:29', '2019-12-24 07:10:29', '2020-12-24 14:10:29');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'JkE2rI93w9lUEBIiCLjPmnZ85YmmXvHSlTU7Ejk9', 'http://localhost', 1, 0, 0, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(2, NULL, 'Laravel Password Grant Client', '8itHFfEzluqsgtOTeHAGTkMkmhJmsf7EPGU96Zc5', 'http://localhost', 0, 1, 0, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(3, NULL, 'admin', 'xFKFkBa2Ctye6EAe5VQCDuQt0Pf1nliuml4iZlIQ', 'http://localhost', 1, 0, 0, '2019-12-18 07:47:58', '2019-12-18 07:47:58');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(2, 3, '2019-12-18 07:47:58', '2019-12-18 07:47:58');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amphoe` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zipcode` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `career` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `workplace` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_status` enum('member','admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'member',
  `admin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'false',
  `verified` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- dump ตาราง `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `profile_picture`, `birthday`, `address`, `district`, `amphoe`, `province`, `zipcode`, `country`, `career`, `workplace`, `user_status`, `admin`, `verified`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Mike Teerauyut', 'teerayut041995@gmail.com', '2019-12-18 10:15:09', '$2y$10$gqy9Y3VKP6/FHFDI8Xc8HelYZ2VsL5L23utCC/viW.iCUBcED9wYq', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '1', 'cwheYUJxLt', '2019-12-18 10:15:09', '2019-12-22 05:58:16', NULL),
(2, 'Jakkaphong Phesapron', 'jakkaphong@hotmail.com', NULL, '$2y$10$6wG6.eYqumOWH585h0ILnOuaW2/YUTkwpVtHJvUMVUCqdsPSVeS3e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2019-12-21 23:25:31', '2019-12-21 23:25:31', NULL),
(4, 'Jakkaphong Phesapron', 'jakkaphong1@hotmail.com', NULL, '$2y$10$SM2T4LIxVgP8/XW9A0mZqOACNFMHnGpmlaKQQMuWvlU./XWMznZ.C', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2019-12-22 05:49:48', '2019-12-22 11:10:49', '2019-12-22 11:10:49'),
(5, 'mike tee', 'mike@hotmail.com', NULL, '$2y$10$EvH4cV.FkZ5DsQoTBGjE4uJLEwJFBgOhnsJcjLQtl8lIVPB/9xP4e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-01-09 05:03:30', '2020-01-09 05:09:29', NULL),
(6, 'Bronson Preechaporn', 'mike_04-1995@hotmail.com', NULL, '$2y$10$KJPHoedssVfBIZb0YqhcU.HpwiwtvChlAsk62EXtZJYdvu5SohPUu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-01-09 06:53:24', '2020-01-09 06:53:24', NULL),
(7, 'Teerayut Khunsuk', 'teerayut@gmail.com', NULL, '$2y$10$VobzJBQzvt776Nfaq.hcn.MumyZMohsrWvDRWe11aeKh68pfcw5zG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-02-27 04:17:07', '2020-02-27 04:17:07', NULL),
(8, 'Jakkapong Preechaporn', 'name@gmail.com', NULL, '$2y$10$ySQ7cEfRz6XMl7lQf5BweeWtQZjWrK6KkAiAxZ0SJWgzSOHjuUum2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-02-27 04:17:46', '2020-02-27 04:17:46', NULL),
(9, 'sam smith', 'sam_smith@hotmail.com', NULL, '$2y$10$Hz5XtjfdhBkFH1YpjlnIpOF6gDJvjDtBnLRImcmCfsAGkMB43qzOG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-02-28 04:43:26', '2020-02-28 04:43:26', NULL),
(10, 'jame bond', 'jamebond@gmail.com', NULL, '$2y$10$572OR0ruQCiDNAhuoy0WvuGDzAzQNoXZ3mMDmZbRArhhfBgBoH4nG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-02-28 04:46:12', '2020-02-28 04:46:12', NULL);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `work_experiences`
--

CREATE TABLE `work_experiences` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `start_year` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_year` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `workplace` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `education_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `work_experiences`
--
ALTER TABLE `work_experiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `work_experiences_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `work_experiences`
--
ALTER TABLE `work_experiences`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `work_experiences`
--
ALTER TABLE `work_experiences`
  ADD CONSTRAINT `work_experiences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
