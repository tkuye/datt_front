--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-1.pgdg20.10+1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-1.pgdg20.10+1)

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
-- Name: blogs; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.blogs (
    blog_id integer NOT NULL,
    blog_title character varying(100) NOT NULL,
    blog_date date NOT NULL,
    user_id integer,
    image text
);


ALTER TABLE public.blogs OWNER TO datt;

--
-- Name: blogs_blog_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.blogs_blog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_blog_id_seq OWNER TO datt;

--
-- Name: blogs_blog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.blogs_blog_id_seq OWNED BY public.blogs.blog_id;


--
-- Name: emails; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.emails (
    email_id integer NOT NULL,
    email character varying(60) NOT NULL
);


ALTER TABLE public.emails OWNER TO datt;

--
-- Name: emails_email_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.emails_email_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emails_email_id_seq OWNER TO datt;

--
-- Name: emails_email_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.emails_email_id_seq OWNED BY public.emails.email_id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.events (
    event_id integer NOT NULL,
    event_name character varying(80),
    event_date date,
    image text,
    iframe_form text,
    iframe_donation text,
    upcoming boolean
);


ALTER TABLE public.events OWNER TO datt;

--
-- Name: events_event_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_event_id_seq OWNER TO datt;

--
-- Name: events_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.events_event_id_seq OWNED BY public.events.event_id;


--
-- Name: interest_total; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.interest_total (
    inter_id integer NOT NULL,
    int_total integer NOT NULL,
    id_event integer NOT NULL
);


ALTER TABLE public.interest_total OWNER TO datt;

--
-- Name: interest_total_inter_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.interest_total_inter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.interest_total_inter_id_seq OWNER TO datt;

--
-- Name: interest_total_inter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.interest_total_inter_id_seq OWNED BY public.interest_total.inter_id;


--
-- Name: mission; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.mission (
    name text NOT NULL,
    quote text
);


ALTER TABLE public.mission OWNER TO datt;

--
-- Name: passwds; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.passwds (
    user_id integer NOT NULL,
    password text NOT NULL,
    username character varying(50) NOT NULL
);


ALTER TABLE public.passwds OWNER TO datt;

--
-- Name: passwds_user_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.passwds_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.passwds_user_id_seq OWNER TO datt;

--
-- Name: passwds_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.passwds_user_id_seq OWNED BY public.passwds.user_id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.sessions (
    session_id text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO datt;

--
-- Name: user_desc; Type: TABLE; Schema: public; Owner: datt
--

CREATE TABLE public.user_desc (
    desc_id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    img_location text NOT NULL,
    video text
);


ALTER TABLE public.user_desc OWNER TO datt;

--
-- Name: user_desc_desc_id_seq; Type: SEQUENCE; Schema: public; Owner: datt
--

CREATE SEQUENCE public.user_desc_desc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_desc_desc_id_seq OWNER TO datt;

--
-- Name: user_desc_desc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: datt
--

ALTER SEQUENCE public.user_desc_desc_id_seq OWNED BY public.user_desc.desc_id;


--
-- Name: blogs blog_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.blogs ALTER COLUMN blog_id SET DEFAULT nextval('public.blogs_blog_id_seq'::regclass);


--
-- Name: emails email_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.emails ALTER COLUMN email_id SET DEFAULT nextval('public.emails_email_id_seq'::regclass);


--
-- Name: events event_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.events ALTER COLUMN event_id SET DEFAULT nextval('public.events_event_id_seq'::regclass);


--
-- Name: interest_total inter_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.interest_total ALTER COLUMN inter_id SET DEFAULT nextval('public.interest_total_inter_id_seq'::regclass);


--
-- Name: passwds user_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.passwds ALTER COLUMN user_id SET DEFAULT nextval('public.passwds_user_id_seq'::regclass);


--
-- Name: user_desc desc_id; Type: DEFAULT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.user_desc ALTER COLUMN desc_id SET DEFAULT nextval('public.user_desc_desc_id_seq'::regclass);


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.blogs (blog_id, blog_title, blog_date, user_id, image) FROM stdin;
36	My First Blogs	2021-02-27	1	My%20First%20Blogs.jpeg
34	Tosin's First Blog!	2020-12-10	1	Tosin's%20First%20Blog!.jpeg
33	Pantry Clearout	2021-02-20	5	Pantry%20Clearout.png
\.


--
-- Data for Name: emails; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.emails (email_id, email) FROM stdin;
1	tkuye77@gmail.com
2	tkuye@ymail.com
4	kuye@ualberta.ca
5	h@example.com
6	h@ymail.com
7	h@gmail.com
8	sydneymarinag@gmail.com
9	tkuye@ga.com
10	t@gmail.com
11	hi@gmail.com
12	h@gmail.com
13	hhh@gmail.com
14	a@gmail.com
15	tkuye@gmail.com
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.events (event_id, event_name, event_date, image, iframe_form, iframe_donation, upcoming) FROM stdin;
16	An Intro To JavaScript	2021-02-27	An%20Intro%20To%20JavaScript.jpeg		\N	f
15	Pantry Clearout	2021-02-27	Pantry%20Clearouts.jpeg		\N	t
28	dfdfddfd	2021-03-08	dfdfddfd.png		\N	f
\.


--
-- Data for Name: interest_total; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.interest_total (inter_id, int_total, id_event) FROM stdin;
13	15	16
12	8	15
25	4	28
\.


--
-- Data for Name: mission; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.mission (name, quote) FROM stdin;
DATT strives to look within ourselves and use what we have to help families in our fair city. \n	"When we give cheerfully and accept gracefully, everyone is blessed"-Maya Angelou
\.


--
-- Data for Name: passwds; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.passwds (user_id, password, username) FROM stdin;
1	$2b$10$9YA1bhWAhdX8xNZILLBQ0O8d6BBOjWdzANIW8GM8R.R6JX9ULKOwG	tkuye
2	$2b$10$QDRT4SRp9LcR2dgtFlp/0u4csB7JJOSk3.rfJCRxGLClYLTqmdF6y	tosink
3	$2b$10$0NPNAHdNpktvpQSpFmThV.1PSJMsdONT1Hn6A8yt.tC2MgxdtRqCO	test123
5	$2b$10$XJiuMEJg3K8QQs5OgNnCR.R8MLDl6I4MhsV41wm6zAABfBFo7drzS	tosinkuye
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.sessions (session_id, user_id) FROM stdin;
36f7e01c9db297d44e6cf6187812008b5fbe7586704c5c7e85d43568695594158c860f21c4dc4bc2ce12ec3e07c0fcf970f2c69525f2ede56d9941c361253e9e	1
\.


--
-- Data for Name: user_desc; Type: TABLE DATA; Schema: public; Owner: datt
--

COPY public.user_desc (desc_id, user_id, name, description, img_location, video) FROM stdin;
1	1	Tosin Kuye	Hello, My name is Tosin and I am a second-year at the University of Alberta majoring in computer science. 	Tosin%20Kuye.jpeg	Tosin%20Kuye.webm
77	2	Doc Martens	Hello I am the doc.	Doc%20Martens.jpeg	Doc%20Martens.webm
80	3	Toast Man 	Hello I am indeed the toast man.	Toast%20Man%20.jpeg	Toast%20Man%20.webm
112	5	Sydney Gray	Hello, my name is Sydney Gray and I work at Kumon. I am trying to become a dental hygienist and I love playing Terraria and watching anime and vibing. 	Sydney%20Gray.jpeg	Sydney%20Gray.webm
\.


--
-- Name: blogs_blog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.blogs_blog_id_seq', 36, true);


--
-- Name: emails_email_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.emails_email_id_seq', 15, true);


--
-- Name: events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.events_event_id_seq', 28, true);


--
-- Name: interest_total_inter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.interest_total_inter_id_seq', 25, true);


--
-- Name: passwds_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.passwds_user_id_seq', 5, true);


--
-- Name: user_desc_desc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: datt
--

SELECT pg_catalog.setval('public.user_desc_desc_id_seq', 113, true);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (blog_id);


--
-- Name: emails emails_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT emails_pkey PRIMARY KEY (email_id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);


--
-- Name: interest_total interest_total_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.interest_total
    ADD CONSTRAINT interest_total_pkey PRIMARY KEY (inter_id);


--
-- Name: mission mission_name_key; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.mission
    ADD CONSTRAINT mission_name_key UNIQUE (name);


--
-- Name: mission mission_quote_key; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.mission
    ADD CONSTRAINT mission_quote_key UNIQUE (quote);


--
-- Name: passwds passwds_password_key; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.passwds
    ADD CONSTRAINT passwds_password_key UNIQUE (password);


--
-- Name: passwds passwds_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.passwds
    ADD CONSTRAINT passwds_pkey PRIMARY KEY (user_id);


--
-- Name: sessions sessions_user_id_key; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_key UNIQUE (user_id);


--
-- Name: user_desc unique_user_id; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.user_desc
    ADD CONSTRAINT unique_user_id UNIQUE (user_id);


--
-- Name: user_desc user_desc_pkey; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.user_desc
    ADD CONSTRAINT user_desc_pkey PRIMARY KEY (desc_id);


--
-- Name: user_desc user_desc_video_key; Type: CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.user_desc
    ADD CONSTRAINT user_desc_video_key UNIQUE (video);


--
-- Name: interest_total fk_event; Type: FK CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.interest_total
    ADD CONSTRAINT fk_event FOREIGN KEY (id_event) REFERENCES public.events(event_id) ON DELETE CASCADE;


--
-- Name: sessions fk_session; Type: FK CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT fk_session FOREIGN KEY (user_id) REFERENCES public.passwds(user_id);


--
-- Name: user_desc fk_user; Type: FK CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.user_desc
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.passwds(user_id) ON DELETE CASCADE;


--
-- Name: blogs fk_user; Type: FK CONSTRAINT; Schema: public; Owner: datt
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.passwds(user_id);


--
-- PostgreSQL database dump complete
--

