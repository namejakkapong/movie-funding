-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2020 at 01:37 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bank_account` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`id`, `bank_account`, `account_number`, `account_name`, `created_at`, `updated_at`) VALUES
(1, 'กรุงไทย', '042887423', 'นาย test test', '2020-10-16 02:10:22', '2020-10-16 02:10:22'),
(2, 'ธนาคาร', '123456789', 'xxxxx', '2020-10-16 02:10:52', '2020-10-20 03:37:04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eng` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `eng`, `slug`, `created_at`, `updated_at`) VALUES
(2, 'ผจญภัย', 'Adventure', 'adventure', '2020-10-01 04:59:12', '2020-10-07 02:00:23'),
(3, 'สงคราม', 'War', 'war', '2020-10-02 02:41:01', '2020-10-02 02:41:01'),
(4, 'แอ็กชั่น', 'Action', 'action', '2020-10-02 02:41:15', '2020-10-02 02:41:15'),
(5, 'คาวบอยตะวันตก', 'Western', 'western', '2020-10-02 02:41:27', '2020-10-02 02:41:27'),
(6, 'ตลก', 'Comedy', 'comedy', '2020-10-02 02:41:37', '2020-10-02 02:41:37'),
(7, 'ดราม่า', 'Drama', 'drama', '2020-10-02 02:41:48', '2020-10-02 02:41:48'),
(8, 'อีโรติก', 'Erotic', 'erotic', '2020-10-02 02:41:58', '2020-10-02 02:41:58'),
(9, 'เพลง', 'Musical', 'musical', '2020-10-02 02:42:10', '2020-10-02 02:42:10'),
(10, 'โรแมนติก', 'Romance', 'romance', '2020-10-02 02:42:26', '2020-10-02 02:42:26'),
(11, 'แฟนตาซี', 'Fantasy', 'fantasy', '2020-10-02 02:42:43', '2020-10-02 02:42:43'),
(12, 'วิทยาศาสตร์ หรือ ไซไฟ', 'Science fiction', 'science-fiction', '2020-10-02 02:42:57', '2020-10-02 02:42:57'),
(13, 'สยองขวัญ', 'Horror', 'horror', '2020-10-02 02:43:10', '2020-10-02 02:43:10'),
(14, 'ลึกลับ', 'Mystery', 'mystery', '2020-10-02 02:43:21', '2020-10-02 02:43:21'),
(15, 'อาชญากรรม', 'Crime', 'crime', '2020-10-02 02:43:33', '2020-10-02 02:43:33'),
(16, 'การ์ตูน', 'Animation', 'animation', '2020-10-02 02:43:49', '2020-10-02 02:43:49'),
(17, 'แนวสารคดี', 'Documentary', 'documentary', '2020-10-02 02:44:00', '2020-10-02 02:44:00'),
(18, 'ฟิล์มนัวร์', 'Film-Noir', 'film-noir', '2020-10-02 02:44:11', '2020-10-02 02:44:11'),
(20, 'ทดสอบ', 'test', 'test', '2020-10-20 03:59:13', '2020-10-20 03:59:55');

-- --------------------------------------------------------

--
-- Table structure for table `conditions`
--

CREATE TABLE `conditions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `movie_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `education`
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
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `user_id`, `graduation_year`, `level`, `subject`, `faculty`, `school`, `created_at`, `updated_at`) VALUES
(3, 10, '2555', '1', 'เทคโนโลยี', 'สารสนเทศ', 'มหาสารคาม', '2020-02-28 04:46:47', '2020-02-28 04:46:47'),
(4, 10, '2560', 'ปริญญาเอก', 'สารสนเทศ', 'วิทยาการ', 'มหาสารคาม', '2020-02-28 04:48:52', '2020-02-28 04:48:52'),
(5, 10, '2562', 'มัธยมปลาย', '-', '-', 'มหาสารคาม', '2020-02-28 04:49:29', '2020-02-28 04:49:29'),
(17, 8, '4', '4', '4', '4', '4', '2020-09-07 20:10:17', '2020-09-07 20:10:17');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
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
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
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
(10, '2020_01_15_021823_create_work_experiences_table', 3),
(12, '2020_07_23_033044_create_movies_table', 4),
(14, '2020_08_03_082518_create_conditions_table', 4),
(15, '2020_08_06_042033_create_progress_table', 4),
(16, '2020_07_31_064955_create_verifications_table', 5),
(18, '2020_03_06_024249_create_categories_table', 6),
(19, '2020_10_15_101639_create_movie_news_table', 7),
(20, '2020_10_15_142752_create_packages_table', 8),
(21, '2020_10_16_085659_create_banks_table', 9),
(22, '2020_10_18_103926_create_transfers_table', 10),
(23, '2020_10_30_110752_create_send_money_table', 11);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name_en` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_th` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movie_pic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `resume` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `director` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` decimal(9,2) NOT NULL,
  `current_total` decimal(9,2) NOT NULL,
  `status` enum('on','off') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'off',
  `screening_date` date NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `category_id`, `name_en`, `name_th`, `movie_pic`, `description`, `resume`, `director`, `total`, `current_total`, `status`, `screening_date`, `start_date`, `end_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 5, 'xxxxx', 'ไทย', NULL, 'xxxx', 'xxxxx', 'xxxx', '10.00', '0.00', 'off', '2020-10-01', '2020-10-01', '2020-10-01', '2020-10-15 06:31:55', '2020-10-20 03:31:24', NULL),
(9, 3, 'The Gentlemen', 'สุภาพบุรุษมาหากัญ2', '7db98d43d762920511cf912b5ce48df8.png', 'เป็นเรื่องราวเกี่ยวกับ มิกกี้ เพียร์สัน (แมทธิว แม็กคอนาเฮย์) เจ้าพ่อกัญชาผู้ทรงอิทธิพล และมีชื่อเสียงโด่งดังในเกาะอังกฤษ ที่ได้ตัดสินใจวางมือจากธุรกิจการค้ากัญชา เพื่อจะใช้ชีวตแบบคนธรรมดา และเสนอขายต่อให้กับผู้ทรงอิทธิพลรายอื่น งานนี้ก็มีแต่คนอยากได้ธุรกิจไปครอบครองทั้ง แมทธิว(เจเรมี สตรอง) นักธุรกิจชาวยิว และ ดรายอาย (เฮนรี โกลดิง) เจ้าพ่อแก๊งมาเฟียจากจีน แต่ไปๆ มาๆ เรื่องก็ชักจะบานปลาย กลายเป็นเรื่องราวความขัดแย้งต่างๆ ซึ่งลำบาก เรย์มอนด์ (ชาร์ลี ฮันแนม) ลูกน้องมือขวาของมิกกี้ ต้องมาตามสะสางปัญหาให้', 'เรื่องราวเริ่มตินเมื่อเจ้าพ่อกัญชาผู้ทรงอิทธิพลมากที่สุดแห่งเกาะอังกฤษอย่าง มิคกี้ เพียร์สัน (แมทธิว แม็คคอนาเฮย์) ตัดสินใจวางมือจากวงการ เขาจึงตกกลายเป็นชนวนสำคัญที่นำไปสู่ความขัดแย้งหักเหลี่ยมเฉือนคมระหว่างแก๊งค์มาเฟีย องค์กรยาเสพติด สำนักข่าว และเหล่าชนชั้นสูงของอังกฤษ ที่ล้วนแต่มีเป้าหมายในการครอบครองอาณาจักรกัญชาของเขาไว้ในมือตัวเอง เมื่อพวกเขาโคจรมาพบกันจึงเป็นจุดเริ่มต้นแห่งความวายป่วงที่กำลังจะเกิดขึ้น', 'กาย ริตชี่', '2500000.00', '0.00', 'on', '2021-10-01', '2020-10-01', '2021-05-01', '2020-10-20 03:20:31', '2020-10-20 03:20:31', NULL),
(10, 9, 'aaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa', '169a2746b5c3c319ee59f25b72aeea6e.png', 'aaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaa', '200.00', '100.00', 'on', '2020-10-01', '2020-10-01', '2020-10-01', '2020-10-30 05:35:10', '2020-10-30 05:35:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
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
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('16ab73ebf192d005ccf326f808750c1f86277be4e86cfb3cb23692769e89a12b947b9fffb09acc6b', 1, 3, 'admin', '[]', 0, '2019-12-19 01:46:26', '2019-12-19 01:46:26', '2020-12-19 08:46:26'),
('1c8f3a02b2e3477e7d4766c95aa7456702ab264a9caa3ec48670dc8cacc7378ed031f5989dd15a4e', 1, 3, 'admin', '[]', 1, '2020-09-06 03:17:28', '2020-09-06 03:17:28', '2021-09-06 10:17:28'),
('1fb3c850bb13274a3d5e4bd723e6b9e9590dfffe0d33f558d0fc2fa2f675c6c46f8dbe1c6556f819', 1, 3, 'admin', '[]', 0, '2020-01-09 04:52:10', '2020-01-09 04:52:10', '2021-01-09 11:52:10'),
('2c8b0b5ed90510e54fbd5ffd3f60b798ef9fe730b5326c855b01deb71a920365f64cbbb54b44a579', 1, 3, 'admin', '[]', 1, '2019-12-19 21:46:23', '2019-12-19 21:46:23', '2020-12-20 04:46:23'),
('4619e71daea088b87228ca515574f230ba74c8d051576d12ce4d4d36e66e953edd41cb2ff95d25a7', 1, 3, 'admin', '[]', 0, '2019-12-19 21:36:25', '2019-12-19 21:36:25', '2020-12-20 04:36:25'),
('4f9ba13feb40d6b3301b49b465b32e3cd2766794a4c308d0e224e2630c46f2db6a7461159de6a49b', 1, 3, 'admin', '[]', 1, '2020-08-30 04:34:14', '2020-08-30 04:34:14', '2021-08-30 11:34:14'),
('5ac15a7ccf61865b5e7132f6a0790824b8238d0dfec8494855cb487cd3a3abcceceed23e9fcf86fd', 1, 3, 'admin', '[]', 0, '2019-12-18 11:16:54', '2019-12-18 11:16:54', '2020-12-18 18:16:54'),
('675eb2b74c0765b37fb9245d0797e5c5a3b73e4cbd4f8e71a37aa02f4567967675790c7e89bc0203', 1, 3, 'admin', '[]', 0, '2020-10-16 01:51:59', '2020-10-16 01:51:59', '2021-10-16 08:51:59'),
('7b6165ff4e7b9c7a92d6d8a7e5c42f22bd138190e36a3f0c0fa98c6a2ae1705bce85b50ceac2afb6', 1, 3, 'admin', '[]', 1, '2019-12-19 21:56:17', '2019-12-19 21:56:17', '2020-12-20 04:56:17'),
('98cb57d986990fb8461a048fbed1a950d199be720822a9ce7771b1a67283a97f0dd923eed6739c52', 1, 3, 'admin', '[]', 1, '2020-10-01 04:45:59', '2020-10-01 04:45:59', '2021-10-01 11:45:59'),
('9b08e051f27fe37422f35cebf1d1a9a3c3ea76b0e22b1dd580c157946f7e61d4ac503717240ced60', 1, 3, 'admin', '[]', 0, '2020-02-28 04:32:01', '2020-02-28 04:32:01', '2021-02-28 11:32:01'),
('a5458ab98d5fdad1940910fe03b87cac853b4a336d257a965e5063ee08737bd51397616b2e6317b9', 1, 3, 'admin', '[]', 0, '2019-12-19 21:05:04', '2019-12-19 21:05:04', '2020-12-20 04:05:04'),
('bfe154ac3c58fa26ecc3724698b5b0aed5aff9cb712744c7d915f59ce0565fa23f54a27e4b43a9c3', 1, 3, 'admin', '[]', 0, '2019-12-19 21:13:32', '2019-12-19 21:13:32', '2020-12-20 04:13:32'),
('c387d7fd7104426f8da7bc81bfc0c95def265a6e3b22a38ee8cbe0411935d5c36cd08b51de2beff4', 1, 3, 'admin', '[]', 0, '2019-12-19 21:18:08', '2019-12-19 21:18:08', '2020-12-20 04:18:08'),
('d0c56bf207507181838a2ca441b2bfe24fa9357f3269ef837bebe6c00efaeead03404e5505131dc0', 1, 3, 'admin', '[]', 0, '2019-12-19 21:41:02', '2019-12-19 21:41:02', '2020-12-20 04:41:02'),
('d29d17ca328cff7fe4254f7bc6b7f060a10a77c24228e64caaf458053b46147e10cdd5576db3c7b0', 1, 3, 'admin', '[]', 0, '2020-10-20 02:43:52', '2020-10-20 02:43:52', '2021-10-20 09:43:52'),
('d3321401e7f7d18a229a252f937183784aaa26106b1a02000f99f350319507041e8447d77c2aaad9', 1, 3, 'admin', '[]', 1, '2020-09-27 21:30:06', '2020-09-27 21:30:06', '2021-09-28 04:30:06'),
('de3c6355596974b04a619e0e79ecb02802e0660d0629189470d18239e3caf2431da4cf3b54070ac5', 1, 3, 'admin', '[]', 0, '2019-12-18 10:22:40', '2019-12-18 10:22:40', '2020-12-18 17:22:40'),
('de5c4e63e49f271b67f8d10d413e5bc1e9ba9854c0c5f4d5eea8bee4fae17e2c0a1d2406cbdb7e11', 1, 3, 'admin', '[]', 1, '2020-02-27 04:16:19', '2020-02-27 04:16:19', '2021-02-27 11:16:19'),
('e629ba512fd52d5100e7cef77bdcec8c9b6cd12d32364bdf96badf652c2b1940880d4aa4da7fd905', 1, 3, 'admin', '[]', 1, '2020-02-28 03:17:50', '2020-02-28 03:17:50', '2021-02-28 10:17:50'),
('e785557aaa289a44ab43a1598f966472550bc2b6addac965a364dc9ae509790481f9631ead6b7d68', 1, 3, 'admin', '[]', 1, '2019-12-19 21:56:48', '2019-12-19 21:56:48', '2020-12-20 04:56:48'),
('fdbfafc10e6a0e0304ed1a5471162c78f07e8a30568b5e0f473d80fe08d08482bd0ca47402708dc5', 1, 3, 'admin', '[]', 1, '2019-12-24 07:10:29', '2019-12-24 07:10:29', '2020-12-24 14:10:29');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
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
-- Table structure for table `oauth_clients`
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
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'JkE2rI93w9lUEBIiCLjPmnZ85YmmXvHSlTU7Ejk9', 'http://localhost', 1, 0, 0, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(2, NULL, 'Laravel Password Grant Client', '8itHFfEzluqsgtOTeHAGTkMkmhJmsf7EPGU96Zc5', 'http://localhost', 0, 1, 0, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(3, NULL, 'admin', 'xFKFkBa2Ctye6EAe5VQCDuQt0Pf1nliuml4iZlIQ', 'http://localhost', 1, 0, 0, '2019-12-18 07:47:58', '2019-12-18 07:47:58');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-12-18 07:42:13', '2019-12-18 07:42:13'),
(2, 3, '2019-12-18 07:47:58', '2019-12-18 07:47:58');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `movie_id` bigint(20) UNSIGNED NOT NULL,
  `type_package` enum('funds','invest') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'funds',
  `topic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `reward` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(9,2) NOT NULL,
  `percent` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `movie_id`, `type_package`, `topic`, `details`, `reward`, `amount`, `percent`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 7, 'funds', 'ระดมทุนแบบที่11', 'ระดมทุนสำหรับคนมีจิตใจดี', 'บัตรชมหนังฟรี', '2000.00', '10', '2020-10-15 08:21:18', '2020-10-15 08:35:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `movie_id` bigint(20) UNSIGNED NOT NULL,
  `topic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`id`, `movie_id`, `topic`, `detail`, `picture`, `date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 7, 'ครั้งที่1', 'หานักแสดง', '7f79ae2cc5bad6efbb8d09fb1ad74dc6.png', '2020-10-02', '2020-10-15 06:55:59', '2020-10-15 06:55:59', NULL),
(2, 7, 'ครั้งที่ II', 'ครั้งที่2', '9cd63722595345f9fefb9a7ab11e12f5.png', '2020-10-01', '2020-10-15 07:00:29', '2020-10-15 07:05:22', NULL),
(3, 9, 'ssss', 'sssss', 'fe3d1be7f9d5371603d437dc021f50a6.png', '2020-08-01', '2020-10-20 04:12:30', '2020-10-20 04:19:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `send_money`
--

CREATE TABLE `send_money` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `movie_id` bigint(20) UNSIGNED NOT NULL,
  `topic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(9,2) NOT NULL,
  `sendmoney_date` date NOT NULL,
  `sendmoney_pic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `send_money`
--

INSERT INTO `send_money` (`id`, `movie_id`, `topic`, `details`, `amount`, `sendmoney_date`, `sendmoney_pic`, `created_at`, `updated_at`) VALUES
(1, 9, 'งวดที่ 1', 'ส่งเงิน', '20000.00', '2020-10-01', '158f26c10b6fab33cb6df7e74651997b.png', '2020-10-30 04:58:36', '2020-10-30 04:58:36');

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `package_id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `transfer_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transfer_date` date NOT NULL,
  `transfer_pic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('confirm','not','Unsuccessful') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'not',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`id`, `user_id`, `package_id`, `bank_id`, `transfer_amount`, `transfer_date`, `transfer_pic`, `status`, `created_at`, `updated_at`) VALUES
(1, 8, 1, 2, '1000', '2020-08-10', '16e050ed5e804a5b36e2baf157425174.png', 'not', '2020-10-18 04:50:44', '2020-10-18 04:50:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `tel` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `profile_picture`, `birthday`, `tel`, `address`, `district`, `amphoe`, `province`, `zipcode`, `country`, `career`, `workplace`, `user_status`, `admin`, `verified`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Mike Teerauyut', 'teerayut041995@gmail.com', '2019-12-18 10:15:09', '$2y$10$gqy9Y3VKP6/FHFDI8Xc8HelYZ2VsL5L23utCC/viW.iCUBcED9wYq', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '1', 'cwheYUJxLt', '2019-12-18 10:15:09', '2019-12-22 05:58:16', NULL),
(2, 'Jakkaphong Phesapron', 'jakkaphong@hotmail.com', NULL, '$2y$10$6wG6.eYqumOWH585h0ILnOuaW2/YUTkwpVtHJvUMVUCqdsPSVeS3e', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2019-12-21 23:25:31', '2019-12-21 23:25:31', NULL),
(4, 'Jakkaphong Phesapron', 'jakkaphong1@hotmail.com', NULL, '$2y$10$SM2T4LIxVgP8/XW9A0mZqOACNFMHnGpmlaKQQMuWvlU./XWMznZ.C', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2019-12-22 05:49:48', '2019-12-22 11:10:49', '2019-12-22 11:10:49'),
(5, 'mike tee', 'mike@hotmail.com', NULL, '$2y$10$EvH4cV.FkZ5DsQoTBGjE4uJLEwJFBgOhnsJcjLQtl8lIVPB/9xP4e', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-01-09 05:03:30', '2020-01-09 05:09:29', NULL),
(6, 'Bronson Preechaporn', 'mike_04-1995@hotmail.com', NULL, '$2y$10$KJPHoedssVfBIZb0YqhcU.HpwiwtvChlAsk62EXtZJYdvu5SohPUu', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-01-09 06:53:24', '2020-01-09 06:53:24', NULL),
(7, 'Teerayut Khunsuk', 'teerayut@gmail.com', NULL, '$2y$10$VobzJBQzvt776Nfaq.hcn.MumyZMohsrWvDRWe11aeKh68pfcw5zG', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-02-27 04:17:07', '2020-02-27 04:17:07', NULL),
(8, 'Jakkapong Preechaporn', 'name@gmail.com', NULL, '$2y$10$ySQ7cEfRz6XMl7lQf5BweeWtQZjWrK6KkAiAxZ0SJWgzSOHjuUum2', NULL, '2020-09-01', '0984456632', '49888', 'ท่าสะอาด', 'เมือง', 'สารคาม', '45000', 'ไทย', 'โปรแกรมเมอร์', 'มหาวิทยาลัยมหาสารคาม', 'member', 'false', '0', NULL, '2020-02-27 04:17:46', '2020-10-08 02:09:17', NULL),
(9, 'sam smith', 'sam_smith@hotmail.com', NULL, '$2y$10$Hz5XtjfdhBkFH1YpjlnIpOF6gDJvjDtBnLRImcmCfsAGkMB43qzOG', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'true', '0', NULL, '2020-02-28 04:43:26', '2020-02-28 04:43:26', NULL),
(10, 'jame bond', 'jamebond@gmail.com', NULL, '$2y$10$572OR0ruQCiDNAhuoy0WvuGDzAzQNoXZ3mMDmZbRArhhfBgBoH4nG', NULL, NULL, NULL, '11', 'xxxx', 'xxxx', 'xxxx', '45222', 'thai', 'hr', 'MSU', 'member', 'false', '0', NULL, '2020-02-28 04:46:12', '2020-09-06 04:27:40', NULL),
(12, 'test 001', 'test001', NULL, '$2y$10$BiCLNBItk3yU.TFrDNuYQeaCR3zj6PSVrerKzMrSGMxj8CDXsseqm', '2b4b9577978d38c4df5e1029862f5c70.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-09-06 03:31:56', '2020-09-06 04:18:09', '2020-09-06 04:18:09'),
(13, 'ชนาธิป', 'teeeeeee@gmail.com', NULL, '$2y$10$QKXkWH9pyHVWr8cHUmwoRukmPePZ/FEiJr/9lo.chU1cmINR/MfKi', '5d1c532d848bd7e1c2015a917bcbcc70.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-10-01 03:19:32', '2020-10-01 03:19:32', NULL),
(14, 'นาย ทศพร ภาชนะวรรณ', 'peaaaaaaaa@hotmail.co', NULL, '$2y$10$IYVsn3IQpQCIernle8Uly.AMOK4IhW/IMYLGS6r6sWvoK09XAl0cC', 'bbb778669deb8dadd341ff0d5c997d90.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-10-05 02:22:45', '2020-10-05 02:50:25', '2020-10-05 02:50:25'),
(15, 'TEst0001', 'Test0001@hotmail.com', NULL, '$2y$10$BoQM/2/r2tdMMy1TJRpOG.ge9o6NIrrIE1RSfvuCP1KyD531yA08y', 'a5734fbfee6e12ff874f7317450b0112.png', NULL, '0801445523', '2/7', 'test', 'ma', 'ty', '45771', NULL, 'reas', NULL, 'member', 'false', '0', NULL, '2020-10-06 01:12:22', '2020-10-06 01:21:19', '2020-10-06 01:21:19'),
(16, 'test test02', 'test02', NULL, '$2y$10$q6JAaowpJUs1gwtMd0hSJeQHMrPGok13MZByTB/O3bA5dfO.N/4C6', 'e503cb233758f7545dcc69e4449f3e85.png', NULL, NULL, '2222', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'member', 'false', '0', NULL, '2020-10-07 00:29:05', '2020-10-07 00:35:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `verifications`
--

CREATE TABLE `verifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('card','passport') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'card',
  `card_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('approve','disapproval') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'disapproval',
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_pic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `verifications`
--

INSERT INTO `verifications` (`id`, `user_id`, `type`, `card_number`, `status`, `address`, `card_pic`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 8, 'passport', 'AB1244452', 'disapproval', '111', '', '2020-09-07 09:55:27', '2020-10-06 01:49:02', NULL),
(2, 13, 'passport', '1234856', 'disapproval', '1123345', '6fe7ff070695ce212496f5fb4cdd5975.png', '2020-10-05 03:17:13', '2020-10-05 03:17:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `work_experiences`
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
-- Dumping data for table `work_experiences`
--

INSERT INTO `work_experiences` (`id`, `user_id`, `start_year`, `end_year`, `position`, `workplace`, `created_at`, `updated_at`) VALUES
(4, 8, '1990', '2000', 'HRK', 'MSU', '2020-09-07 02:19:37', '2020-10-05 03:01:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conditions_movie_id_foreign` (`movie_id`);

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
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_category_id_foreign` (`category_id`);

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
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `packages_movie_id_foreign` (`movie_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `progress_movie_id_foreign` (`movie_id`);

--
-- Indexes for table `send_money`
--
ALTER TABLE `send_money`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transfers_user_id_foreign` (`user_id`),
  ADD KEY `transfers_package_id_foreign` (`package_id`),
  ADD KEY `transfers_bank_id_foreign` (`bank_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `verifications`
--
ALTER TABLE `verifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `verifications_user_id_foreign` (`user_id`);

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
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `send_money`
--
ALTER TABLE `send_money`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `verifications`
--
ALTER TABLE `verifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `work_experiences`
--
ALTER TABLE `work_experiences`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `conditions`
--
ALTER TABLE `conditions`
  ADD CONSTRAINT `conditions_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `packages`
--
ALTER TABLE `packages`
  ADD CONSTRAINT `packages_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `progress_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transfers`
--
ALTER TABLE `transfers`
  ADD CONSTRAINT `transfers_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`),
  ADD CONSTRAINT `transfers_package_id_foreign` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`),
  ADD CONSTRAINT `transfers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `verifications`
--
ALTER TABLE `verifications`
  ADD CONSTRAINT `verifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `work_experiences`
--
ALTER TABLE `work_experiences`
  ADD CONSTRAINT `work_experiences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
