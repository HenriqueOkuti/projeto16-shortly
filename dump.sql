--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortURL" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (2, '54538b75-8705-48a9-930c-e79735fa37e9', 20, '2022-10-13 23:47:30.840592');
INSERT INTO public.sessions VALUES (3, 'd4de16b3-9be6-4a9f-9af8-7582b9aa807b', 20, '2022-10-13 23:48:10.659808');
INSERT INTO public.sessions VALUES (4, 'bbad8489-407c-4b37-866d-fa3f5a8299d2', 20, '2022-10-13 23:48:11.636524');
INSERT INTO public.sessions VALUES (5, '0928778a-83c6-442e-9d49-843d6273b327', 20, '2022-10-13 23:49:48.838546');
INSERT INTO public.sessions VALUES (6, '0d147402-91f6-4785-8967-53cdf85c9e1e', 20, '2022-10-13 23:51:25.5106');
INSERT INTO public.sessions VALUES (7, 'b6881ee5-198c-4101-bc05-159803542be3', 20, '2022-10-14 00:00:58.448378');
INSERT INTO public.sessions VALUES (8, 'ec78605d-92e7-4532-9536-c9301f02a0f0', 20, '2022-10-14 00:01:07.950271');
INSERT INTO public.sessions VALUES (9, '3be44c69-39f4-4d56-8055-249b84744763', 20, '2022-10-14 00:01:21.612658');
INSERT INTO public.sessions VALUES (10, '4a04faa1-3358-48f9-8a0a-f406df63b285', 20, '2022-10-14 00:01:28.46581');
INSERT INTO public.sessions VALUES (11, 'c5051bcb-6af5-4fa6-adb5-2e94ee9b290b', 2, '2022-10-14 18:59:53.361146');
INSERT INTO public.sessions VALUES (12, '410df1d1-deeb-4474-839f-f16dda576078', 2, '2022-10-14 19:00:11.941759');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'www.google.com', '4GEaPoBp', 0, 2, '2022-10-14 01:18:53.227424');
INSERT INTO public.urls VALUES (3, 'www.google.com', 'Kqwd3vas', 0, 2, '2022-10-14 01:20:14.929127');
INSERT INTO public.urls VALUES (4, 'www.google.com', 'TGJM7qun', 0, 2, '2022-10-14 01:25:01.419543');
INSERT INTO public.urls VALUES (5, 'www.www.google.com', 'ISviJAXc', 0, 2, '2022-10-14 01:25:11.256452');
INSERT INTO public.urls VALUES (6, 'google.com', 'gMvUG-kO', 0, 2, '2022-10-14 01:25:17.046815');
INSERT INTO public.urls VALUES (7, 'google.com', 'PktX8xaK', 0, 2, '2022-10-14 01:25:36.838711');
INSERT INTO public.urls VALUES (8, 'google.com', 'T-VjNO6r', 0, 2, '2022-10-14 01:25:51.507807');
INSERT INTO public.urls VALUES (9, 'google.com', 'Zq-00Spk', 0, 2, '2022-10-14 01:26:02.938833');
INSERT INTO public.urls VALUES (10, 'www.google', 'PBYl7dAb', 0, 2, '2022-10-14 01:26:29.906026');
INSERT INTO public.urls VALUES (11, 'www.google.com', '1MrUIjLl', 0, 2, '2022-10-14 01:26:34.960537');
INSERT INTO public.urls VALUES (12, 'www.google.com', 'NwL7c5fS', 0, 2, '2022-10-14 01:27:31.914234');
INSERT INTO public.urls VALUES (13, 'www.google.cm', 'XeK_XLYK', 0, 2, '2022-10-14 01:27:35.634012');
INSERT INTO public.urls VALUES (14, 'www.m.com', 'YD6A-2ey', 0, 2, '2022-10-14 01:28:23.711084');
INSERT INTO public.urls VALUES (15, 'www.google..com', 'RNinKRoA', 0, 2, '2022-10-14 01:28:30.356112');
INSERT INTO public.urls VALUES (16, 'www.google.....com', 'Pt-NsJB6', 0, 2, '2022-10-14 01:28:32.886089');
INSERT INTO public.urls VALUES (17, 'www.google.....co.m', '5xtiro0-', 0, 2, '2022-10-14 01:28:35.119001');
INSERT INTO public.urls VALUES (18, 'www.google.com', 'AAKtxt3t', 0, 2, '2022-10-14 01:28:42.665315');
INSERT INTO public.urls VALUES (19, 'www.google.com', '1VZgrh6_', 0, 2, '2022-10-14 01:34:37.142864');
INSERT INTO public.urls VALUES (20, 'www.google.com', 'yel6gEIl', 0, 2, '2022-10-14 01:34:38.662066');
INSERT INTO public.urls VALUES (21, 'www.google.com', 'DC8paIin', 0, 2, '2022-10-14 01:34:49.15676');
INSERT INTO public.urls VALUES (22, 'www.google.com', 'Y5dH-oJT', 0, 2, '2022-10-14 01:35:37.345497');
INSERT INTO public.urls VALUES (23, 'w2ww.google.com', 'TaGrWbyI', 0, 2, '2022-10-14 01:35:41.992803');
INSERT INTO public.urls VALUES (24, '3ww.google.com', 'Hwjq5RNB', 0, 2, '2022-10-14 01:35:45.238351');
INSERT INTO public.urls VALUES (25, 'zww.google.com', '_FCNYstA', 0, 2, '2022-10-14 01:35:48.241656');
INSERT INTO public.urls VALUES (26, 'www.google.com', 'Uk7xDHQx', 0, 2, '2022-10-14 01:36:00.63136');
INSERT INTO public.urls VALUES (27, 'www.google.com', 'jCXBf8aa', 0, 2, '2022-10-14 01:36:01.449646');
INSERT INTO public.urls VALUES (28, 'abcd', '1vm6U34C', 0, 2, '2022-10-14 01:36:08.271553');
INSERT INTO public.urls VALUES (29, 'abcd', '8ntK2ln-', 0, 2, '2022-10-14 01:36:35.533465');
INSERT INTO public.urls VALUES (30, 'abcd', 'B2vA22AM', 0, 2, '2022-10-14 01:37:19.058119');
INSERT INTO public.urls VALUES (31, 'abcd', 'lLND2y8-', 0, 2, '2022-10-14 01:37:19.961987');
INSERT INTO public.urls VALUES (32, 'www.google.com', 'WFHEJ8DH', 0, 2, '2022-10-14 01:42:06.98628');
INSERT INTO public.urls VALUES (33, 'abc.www.google.com', 'hygi1L69', 0, 2, '2022-10-14 01:42:12.417967');
INSERT INTO public.urls VALUES (34, 'www.google.com', 'jO5_FbLc', 0, 2, '2022-10-14 01:42:31.673686');
INSERT INTO public.urls VALUES (35, 'www.google.com', 'MjfnuNPR', 0, 2, '2022-10-14 01:45:23.947388');
INSERT INTO public.urls VALUES (36, 'www.google.com', 'Z9SYUVVq', 0, 2, '2022-10-14 01:45:43.960312');
INSERT INTO public.urls VALUES (37, 'www.google.com', 'us5jw-hV', 0, 2, '2022-10-14 01:46:02.298949');
INSERT INTO public.urls VALUES (38, 'www.google.com', 'f9UFfQ1r', 0, 2, '2022-10-14 01:47:42.501437');
INSERT INTO public.urls VALUES (39, 'www.google.com', 'zE5pc50t', 0, 2, '2022-10-14 01:50:55.521327');
INSERT INTO public.urls VALUES (40, 'hbttp://www.google.com', '538Igqek', 0, 2, '2022-10-14 01:51:17.330538');
INSERT INTO public.urls VALUES (41, 'http://www.google.com', 'iaOCcvWQ', 0, 2, '2022-10-14 01:51:23.10383');
INSERT INTO public.urls VALUES (42, 'https://i.ytimg.com/an_webp/aPmUnbh52rg/mqdefault_6s.webp?du=3000&sqp=COCWo5oG&rs=AOn4CLB_iOL7NG6s46c0QaQD2NJ6mibUtw', 'HmB9M9IO', 0, 2, '2022-10-14 01:51:44.306758');
INSERT INTO public.urls VALUES (43, 'https://i.ytimg.com/an_webp/aPmUnbh52rg/mqdefault_6s.webp?du=3000&sqp=COCWo5oG&rs=AOn4CLB_iOL7NG6s46c0QaQD2NJ6mibUtw', 'j4p50pUe', 0, 2, '2022-10-14 01:52:04.680618');
INSERT INTO public.urls VALUES (2, 'www.google.com', 'oLCtdF9h', 5, 2, '2022-10-14 01:19:37.422498');
INSERT INTO public.urls VALUES (44, 'www.uol.com.br', 'YTsNdT0J', 0, 2, '2022-10-14 19:04:41.89753');
INSERT INTO public.urls VALUES (45, 'www.uol.com.br', 'c-r8qfxW', 0, 2, '2022-10-14 19:04:59.629827');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'test', 'test@test.com', '$2b$10$d3fsjdGAdvge8QE.Y0wnWegA9i6c.ltDc/3HlRhbzhNvmJvzjJBp.', '2022-10-13 20:23:23.130837');
INSERT INTO public.users VALUES (19, 'test2', 'test2@test.com', '$2b$10$gwgX/8zYclqI1isNiFiS/urvv.rk0BpANdZ1QxP8jTAOohaftQlBO', '2022-10-13 20:41:38.850879');
INSERT INTO public.users VALUES (20, 'test3', 'test3@test.com', '$2b$10$U88vsPId2bDg87.C9cAN4eXSV7lhKGJEhPMd9aqXSTqj9gA/slHsm', '2022-10-13 23:38:46.872084');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 46, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: urls urls_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pk PRIMARY KEY (id);


--
-- Name: urls urls_shortURL_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortURL_key" UNIQUE ("shortURL");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

